# Kth Closest Dock Pairing — Reference Solution

## Approach

The answer is a gap value between `0` and `max - min` over all docks, and
the number of pairings with gap `<= d` never decreases as `d` grows. So
binary search on the **answer value** `d`: find the smallest `d` such that
at least `k` pairings have gap `<= d`.

To count pairings with gap `<= d`, sort both arrays. For each `x` in `a`
(in increasing order) the matching docks in `b` are those in
`[x - d, x + d]`, a contiguous window whose two ends only move right as `x`
increases. Two pointers give the count in `O(n + m)`.

Total: sort, then `log(range)` (about 31) counting passes.

```python
from typing import List


def kth_closest_gap(a: List[int], b: List[int], k: int) -> int:
    a = sorted(a)
    b = sorted(b)

    def count_at_most(d: int) -> int:
        # pairs with |a[i] - b[j]| <= d; both windows only move right
        total = 0
        lo = hi = 0
        for x in a:
            while lo < len(b) and b[lo] < x - d:
                lo += 1
            while hi < len(b) and b[hi] <= x + d:
                hi += 1
            total += hi - lo
        return total

    left, right = 0, max(a[-1], b[-1]) - min(a[0], b[0])
    while left < right:
        mid = (left + right) // 2
        if count_at_most(mid) >= k:
            right = mid
        else:
            left = mid + 1
    return left


if __name__ == "__main__":
    assert kth_closest_gap([8, 1, 4], [6, 2], 4) == 2
    assert kth_closest_gap([5, 5], [5], 2) == 0
    assert kth_closest_gap([7, -3, 0], [10, -1], 4) == 8
    assert kth_closest_gap([-10**9], [10**9], 1) == 2 * 10**9
    print("all passed")
```

## Complexity

- **Time:** `O(n log n + m log m + (n + m) log R)` where `R = max - min`
  (at most `2 * 10^9`, so about 31 iterations).
- **Space:** `O(1)` extra beyond the sorted copies (`O(n + m)` in Python
  because `sorted` copies).
