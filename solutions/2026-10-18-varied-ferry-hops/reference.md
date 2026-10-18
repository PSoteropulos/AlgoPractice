# Varied Ferry Hops — Reference Solution

## Approach

The restriction (no two consecutive hops of equal length) means position alone
is not enough state; we also need the length of the hop that brought us to the
current dock. Let `dp[i][h]` be the minimum fee to stand on dock `i` having
arrived with a hop of length `h` (`h` in `1..3`). The start is a special state
with no previous hop (`h = 0`) and cost `0`.

From a state `(i, h)` with cost `c`, we may leave dock `i` (paying `fees[i]`)
with any hop `s` in `{1, 2, 3}` where `s != h` and `i + s < n`, reaching
`(i + s, s)` at cost `c + fees[i]`. The answer is the minimum over
`dp[n-1][1..3]` (or `0` when `n = 1`). Docks are processed in increasing order,
so every state is final before it is expanded. Only the last three docks'
states are ever needed, which gives the `O(1)` space follow-up.

```python
from typing import List


def min_total_fee(fees: List[int]) -> int:
    n = len(fees)
    if n == 1:
        return 0
    INF = float("inf")
    dp = [[INF] * 4 for _ in range(n)]
    dp[0][0] = 0
    for i in range(n - 1):
        for h in range(4):
            cur = dp[i][h]
            if cur == INF:
                continue
            for step in (1, 2, 3):
                if step != h and i + step < n:
                    dp[i + step][step] = min(dp[i + step][step], cur + fees[i])
    return min(dp[n - 1][1:])


if __name__ == "__main__":
    cases = [
        ([4, 1, 5, 2, 3], 5),
        ([3, 9, 1, 1], 3),
        ([1, 1, 1, 1, 1, 1, 1], 3),
        ([7], 0),
        ([5, 2], 5),
        ([2, 2, 2, 2, 2, 2, 2, 2], 6),
        ([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5),
        ([1000000000, 1000000000, 1000000000, 1000000000], 1000000000),
    ]
    for fees, expected in cases:
        actual = min_total_fee(fees)
        print("PASS" if actual == expected else "FAIL", fees, actual)
```

## Complexity

- Time: `O(n)` — each dock has 4 states and each state tries 3 hops.
- Space: `O(n)` for the table (`O(1)` with a rolling window of three docks).
