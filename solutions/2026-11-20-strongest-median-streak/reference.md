# Strongest Median Streak — Reference Solution

## Approach

### 1. Turn "is the median at least `x`?" into a sum question

Fix a candidate value `x`. Replace each score with `+1` if it is `>= x`, and
with `-1` otherwise.

A streak of length `len` has median (position `ceil(len / 2)` in sorted
order) **at least `x`** exactly when fewer than `ceil(len / 2)` of its scores
are below `x`. That is the same as saying scores `>= x` strictly outnumber
scores `< x`, which means the `±1` sum of the streak is **positive**.

- Odd `len = 2m + 1`: median `>= x` ⇔ at most `m` scores are `< x` ⇔ sum `>= 1`.
- Even `len = 2m`: the median is the *smaller* middle, so we need at most
  `m - 1` scores `< x` ⇔ sum `>= 2` ⇔ sum `> 0` (an even-length sum is even).

### 2. Check one `x` in O(n) with prefix sums

Let `pre[j]` be the `±1` prefix sum of the first `j` scores. A streak
`[i, j)` with `j - i >= k` has a positive sum iff `pre[j] - pre[i] > 0`. Sweep
`j` from `k` to `n`, keeping `low = min(pre[0..j-k])`. If `pre[j] - low > 0`
at any point, some streak of length `>= k` has median `>= x`.

### 3. Binary search over the answer

If some streak has median `>= x`, it also has median `>= y` for every
`y <= x`. So the check is monotone: true up to the answer, then false. Binary
search over the sorted distinct values of `nums` for the largest `x` that
passes. The answer is always one of the array's values, and the smallest
value always passes (every `±1` becomes `+1`).

## Code (Python)

```python
from typing import List


def strongest_median(nums: List[int], k: int) -> int:
    n = len(nums)
    vals = sorted(set(nums))

    def has_streak_with_median_at_least(x: int) -> bool:
        pre = [0] * (n + 1)
        for i, v in enumerate(nums):
            pre[i + 1] = pre[i] + (1 if v >= x else -1)
        low = float("inf")
        for j in range(k, n + 1):
            low = min(low, pre[j - k])
            if pre[j] - low > 0:
                return True
        return False

    lo, hi = 0, len(vals) - 1  # vals[lo] always passes
    while lo < hi:
        mid = (lo + hi + 1) // 2
        if has_streak_with_median_at_least(vals[mid]):
            lo = mid
        else:
            hi = mid - 1
    return vals[lo]
```

## Complexity

- **Time:** `O(n log n)`. Sorting the distinct values is `O(n log n)`, and the
  binary search runs `O(log n)` checks of `O(n)` each.
- **Space:** `O(n)` for the sorted values and the prefix array.

## Follow-up notes

If an even-length streak used the *larger* middle as its median, the
condition becomes "scores `< x` are at most half," i.e. the `±1` sum is
`>= 0`. Change `> 0` to `>= 0` in the check. Everything else stays the same.
