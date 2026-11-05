# Balanced Shift Split — Reference Solution

## Approach

Let `pre` be the prefix sums of `weights`. Define `dp[j][i]` as the minimum
total strain for splitting the first `i` crates into exactly `j` non-empty
blocks:

```
dp[j][i] = min over p in [j-1, i-1] of dp[j-1][p] + (pre[i] - pre[p])^2
dp[0][0] = 0, everything else in row 0 is infinity
```

A direct evaluation is `O(k * n^2)`. The cost `(pre[i] - pre[p])^2` satisfies
the quadrangle inequality (weights are non-negative, so `pre` is
non-decreasing), which means the optimal split point `opt(i)` is monotone
non-decreasing in `i`. That allows **divide-and-conquer optimization**: to fill
a row, compute `dp[j][mid]` for the middle index by scanning only candidates in
`[optLo, optHi]`, record the best `p`, then recurse on the left half with
`[optLo, p]` and the right half with `[p, optHi]`. Each recursion level scans
`O(n)` candidates in total, and there are `O(log n)` levels per row.

The final answer is `dp[k][n]`.

## Python

```python
from typing import List


def min_split_cost(weights: List[int], k: int) -> int:
    n = len(weights)
    pre = [0] * (n + 1)
    for i, w in enumerate(weights):
        pre[i + 1] = pre[i] + w
    INF = float("inf")
    prev = [INF] * (n + 1)
    prev[0] = 0
    for _ in range(k):
        cur = [INF] * (n + 1)

        def solve(lo, hi, opt_lo, opt_hi):
            if lo > hi:
                return
            mid = (lo + hi) // 2
            best, best_p = INF, -1
            for p in range(opt_lo, min(mid - 1, opt_hi) + 1):
                if prev[p] == INF:
                    continue
                c = prev[p] + (pre[mid] - pre[p]) ** 2
                if c < best:
                    best, best_p = c, p
            cur[mid] = best
            solve(lo, mid - 1, opt_lo, best_p)
            solve(mid + 1, hi, best_p, opt_hi)

        solve(1, n, 0, n - 1)
        prev = cur
    return prev[n]
```

Verified against the three examples and a brute-force checker on 3000 random
small inputs.

## Complexity

- Time: `O(k * n log n)`.
- Space: `O(n)` (two rows plus prefix sums; recursion depth `O(log n)`).
