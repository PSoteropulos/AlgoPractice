# Gap-Rule Tip Jar — Reference Solution

## Approach

Let `dp[i]` be the best total using only patios `0..i-1` (the first `i`
patios), with `dp[0] = 0`. For patio `i` there are two choices:

- **Skip it:** the best is `dp[i]`.
- **Play it:** the previously chosen patio must be at index `<= i - d`, so
  the rest of the plan lives in the first `i - d + 1` patios. That gives
  `tips[i] + dp[max(0, i - d + 1)]`.

So `dp[i + 1] = max(dp[i], tips[i] + dp[max(0, i - d + 1)])`. Because `dp`
is a running maximum, "best over any allowed prefix" is just a single lookup,
and choosing nothing is covered by `dp[0] = 0`. With `d = 1` this reduces to
summing all positive tips.

```python
def max_total_tips(tips, d):
    n = len(tips)
    dp = [0] * (n + 1)
    for i in range(n):
        take = tips[i] + dp[max(0, i - d + 1)]
        dp[i + 1] = max(dp[i], take)
    return dp[n]
```

## Complexity

- Time: `O(n)`
- Space: `O(n)` for the table (a queue/sliding window of the last `d` values
  could reduce this, but `O(n)` is fine for the constraints).

## Follow-up note

To recover the indices, store for each `i` whether "take" won, then walk back
from `i = n - 1`: if taken, record `i` and jump to `max(0, i - d + 1) - 1`;
otherwise move to `i - 1`. Still `O(n)` time and space.
