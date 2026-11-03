# Even Relay Legs — Reference Solution

## Approach

Binary search on the answer `L` (the allowed maximum leg length).

- **Feasibility check:** for a given `L`, scan left to right and greedily
  extend the current leg until adding the next stretch would exceed `L`, then
  start a new leg. This produces the *minimum* number of legs `m(L)` needed
  when no leg may exceed `L` (it is only valid if `L >= max(distances)`).
- **Monotonic:** `m(L)` never increases as `L` grows.
- **Exactly `k` vs. at most `k`:** if `m(L) <= k`, we can always split some
  legs further to reach exactly `k` legs, because `k <= n` guarantees enough
  stretches to split (splitting never raises the longest leg). So `L` is
  feasible iff `m(L) <= k`.
- The answer lies in `[max(distances), sum(distances)]`; binary search for the
  smallest feasible `L`.

## Python

```python
from typing import List


def min_longest_leg(distances: List[int], k: int) -> int:
    def legs_needed(limit: int) -> int:
        legs, cur = 1, 0
        for d in distances:
            if cur + d > limit:
                legs += 1
                cur = d
            else:
                cur += d
        return legs

    lo, hi = max(distances), sum(distances)
    while lo < hi:
        mid = (lo + hi) // 2
        if legs_needed(mid) <= k:
            hi = mid
        else:
            lo = mid + 1
    return lo


if __name__ == "__main__":
    tests = [
        ([4, 9, 3, 6, 2, 8], 3, 13),
        ([5, 5, 5, 5], 2, 10),
        ([12, 1, 1], 3, 12),
        ([7], 1, 7),
        ([0, 0, 0], 2, 0),
        ([1, 2, 3, 4, 5], 1, 15),
        ([3, 1, 4, 1, 5, 9, 2, 6], 8, 9),
        ([10000] * 100000, 50000, 20000),
    ]
    for distances, k, expected in tests:
        got = min_longest_leg(distances, k)
        print("PASS" if got == expected else "FAIL", len(distances), k, expected, got)
```

## Complexity

- **Time:** `O(n log S)` where `S = sum(distances)` — about 30 passes over the
  array.
- **Space:** `O(1)` extra.
