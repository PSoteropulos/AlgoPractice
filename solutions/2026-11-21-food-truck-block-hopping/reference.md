# Food Truck Block Hopping — Reference Solution

## Approach

Let `best[d][j]` be the maximum profit over days `0..d` given that you park
at spot `j` on day `d`. Then

```
best[0][j] = earnings[0][j]
best[d][j] = earnings[d][j] + max over k of (best[d-1][k] - moveCost * |j - k|)
```

and the answer is `max(best[n-1])`. Only the previous day's row is needed.

Evaluated directly, the inner `max over k` costs `O(m)` per spot, so
`O(n * m^2)` in total, which is too slow when the street is wide (`n = 2`,
`m = 50,000`).

The fix is to split the absolute value by which side `k` is on:

- `k <= j`: `best[d-1][k] - moveCost * (j - k)`. Define
  `left[j] = max over k <= j of (best[d-1][k] - moveCost * (j - k))`.
  Moving from `j - 1` to `j` adds one more block to every candidate, so
  `left[j] = max(left[j-1] - moveCost, best[d-1][j])`.
- `k >= j`: symmetrically, `right[j] = max(right[j+1] - moveCost, best[d-1][j])`.

Then `best[d][j] = earnings[d][j] + max(left[j], right[j])`. Each sweep is
`O(m)`, so a whole day costs `O(m)`.

Common pitfalls:

- Greedily moving to each day's most profitable spot. Driving can cost more
  than it earns (Example 2).
- Starting the answer at `0`. Profits can be negative and you must operate
  every day, so the answer can be negative (the "single all-negative day"
  case returns `-1`).
- 32-bit overflow. With `n = 100,000` days at `100,000` each, the total is
  `10^10`.

## Python

```python
from typing import List


def max_route_earnings(earnings: List[List[int]], move_cost: int) -> int:
    m = len(earnings[0])
    prev = list(earnings[0])  # best profit ending at each spot yesterday
    for row in earnings[1:]:
        reach = [0] * m

        # Best arrival from the west (k <= j).
        run = prev[0]
        reach[0] = run
        for j in range(1, m):
            run = max(run - move_cost, prev[j])
            reach[j] = run

        # Best arrival from the east (k >= j); keep the better side.
        run = prev[m - 1]
        reach[m - 1] = max(reach[m - 1], run)
        for j in range(m - 2, -1, -1):
            run = max(run - move_cost, prev[j])
            reach[j] = max(reach[j], run)

        prev = [row[j] + reach[j] for j in range(m)]
    return max(prev)
```

## Complexity

- **Time:** `O(n * m)`. Each day takes two linear sweeps plus one combine pass.
- **Space:** `O(m)` for the previous row and the `reach` buffer. Python
  integers never overflow; in other languages use 64-bit integers.
