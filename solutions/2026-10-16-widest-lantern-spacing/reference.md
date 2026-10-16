# Widest Lantern Spacing — Reference Solution

## Approach

Sort the posts. The question "can we hang `k` lanterns with spacing at least
`d`?" is monotonic: if it works for `d`, it works for every smaller `d`. So we
binary search the largest feasible `d` in `[0, max - min]`.

Feasibility check for a given `d` (greedy, one pass over the sorted posts):
hang a lantern on the first post, then repeatedly hang the next lantern on the
first post at least `d` away from the previously hung one. Taking the earliest
possible post each time leaves the most room for the rest. If we place at least
`k` lanterns, `d` is feasible (extra lanterns can simply be dropped).

`d = 0` is always feasible because `k <= n`.

```python
from typing import List


def widest_spacing(posts: List[int], k: int) -> int:
    posts = sorted(posts)

    def feasible(d: int) -> bool:
        count, last = 1, posts[0]
        for p in posts[1:]:
            if p - last >= d:
                count += 1
                last = p
                if count >= k:
                    return True
        return count >= k

    lo, hi = 0, posts[-1] - posts[0]
    while lo < hi:
        mid = (lo + hi + 1) // 2
        if feasible(mid):
            lo = mid
        else:
            hi = mid - 1
    return lo
```

## Complexity

- Time: O(n log n + n log M), where `M = max(posts) - min(posts)`.
- Space: O(n) for the sorted copy (O(1) extra if sorting in place).
