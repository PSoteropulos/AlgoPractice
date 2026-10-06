# Floodlight Placement Budget — Reference Solution

## Approach

Sort order is given (`x` is increasing). In an optimal solution every light
serves a **contiguous** block of stalls (nearest-light regions on a line are
intervals), so the problem becomes: split the stalls into consecutive groups,
pay `c` per group, and pay the glare of each group with its light placed at the
best stall inside it.

1. **Group cost.** For one group `i..j`, the glare `sum w[k] * |x[k] - x[m]|`
   is minimised at the *weighted median* `m`: the first index where the prefix
   weight reaches half of the group's total weight. With prefix sums of `w` and
   of `w * x`, the cost of any group is O(1) after locating `m` with a binary
   search over the weight prefix sums.
2. **DP.** `dp[j]` = min cost for the first `j` stalls.
   `dp[j] = min over i < j of dp[i] + c + cost(i, j-1)`, `dp[0] = 0`.
3. Assigning each stall to its own group's light can only overestimate the true
   "nearest light" cost, and the true optimum is itself representable as such a
   partition, so the minimum is exact.

## Complexity

- Time: O(n^2 log n) (O(n^2) with a monotone median pointer).
- Space: O(n).

## Code (Python)

```python
from bisect import bisect_left
from itertools import combinations
from typing import List


def min_floodlight_cost(x: List[int], w: List[int], c: int) -> int:
    n = len(x)
    pw = [0] * (n + 1)
    pwx = [0] * (n + 1)
    for i in range(n):
        pw[i + 1] = pw[i] + w[i]
        pwx[i + 1] = pwx[i] + w[i] * x[i]

    def group_cost(i: int, j: int) -> int:
        # houses i..j (inclusive), one light at the weighted median
        total = pw[j + 1] - pw[i]
        m = bisect_left(pw, pw[i] + (total + 1) // 2, i + 1, j + 2) - 1
        left = x[m] * (pw[m + 1] - pw[i]) - (pwx[m + 1] - pwx[i])
        right = (pwx[j + 1] - pwx[m + 1]) - x[m] * (pw[j + 1] - pw[m + 1])
        return left + right

    INF = float("inf")
    dp = [0] + [INF] * n
    for j in range(1, n + 1):
        for i in range(j):
            v = dp[i] + c + group_cost(i, j - 1)
            if v < dp[j]:
                dp[j] = v
    return dp[n]
```
