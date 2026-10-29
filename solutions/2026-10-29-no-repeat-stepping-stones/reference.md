# No-Repeat Stepping Stones — Reference Solution

## Approach

Dynamic programming over (stone, length of the last jump). Let `dp[i][j]`
be the minimum toll to be standing on stone `i` having arrived with a jump
of length `j + 1`. To land on `i` with a jump of length `L`, you came from
stone `p = i - L`:

- if `p == 0`, nothing has been paid and there is no previous jump, so the
  base cost is `0`;
- otherwise the previous jump into `p` must have had a *different* length,
  so the base cost is `min(dp[p][k] for k != j)`.

Then `dp[i][j] = base + cost[i]`. The answer is `min(dp[n-1])` (or `0` if
`n == 1`). Since each state looks back at most 3 stones, only a rolling
window of 3 rows is needed for `O(1)` space; the full table is shown here
for clarity.

```python
from typing import List
INF = float("inf")


def min_hop_cost(cost: List[int]) -> int:
    n = len(cost)
    if n == 1:
        return 0
    dp = [[INF] * 3 for _ in range(n)]
    for i in range(1, n):
        for j in range(3):
            p = i - (j + 1)
            if p < 0:
                continue
            best = 0 if p == 0 else min(dp[p][k] for k in range(3) if k != j)
            dp[i][j] = best + cost[i]
    return int(min(dp[n - 1]))


if __name__ == "__main__":
    tests = [
        ([0, 5, 1, 4, 2], 6),
        ([0, 1, 1, 1, 1, 1, 1], 3),
        ([0, 9, 1, 1, 9, 1], 2),
        ([7], 0),
        ([3, 8], 8),
        ([0, 2, 100, 3], 3),
        ([0, 4, 4, 4, 4, 4, 4, 4, 4], 12),
    ]
    for c, e in tests:
        g = min_hop_cost(c)
        print("PASS" if g == e else "FAIL", c, e, g)
```

## Complexity

- Time: `O(n)` (3 × 3 transitions per stone).
- Space: `O(n)` as written; `O(1)` with a rolling window of the last 3 rows.
