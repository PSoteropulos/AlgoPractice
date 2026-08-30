# Loyalty Tier Lookup — Reference Solution

## Approach

`thresholds` is sorted in strictly increasing order, so the set of
indices `i` where `thresholds[i] <= points` is always a contiguous
prefix `[0, r]` for some `r` (possibly empty). We want the last index
of that prefix — a classic **binary search for the rightmost index
satisfying a monotonic predicate**.

Keep a `result` variable initialized to `-1` (the "no tier qualifies"
default) and binary search over `[0, n - 1]`:

- If `thresholds[mid] <= points`, index `mid` qualifies. Record it in
  `result` and search the right half (`lo = mid + 1`) to see if an
  even higher index also qualifies.
- Otherwise `thresholds[mid] > points`, so `mid` and everything to its
  right is disqualified. Search the left half (`hi = mid - 1`).

The loop ends when `lo > hi`, and `result` holds the highest qualifying
index found (or stays `-1` if none ever qualified).

```python
from typing import List


def find_tier(thresholds: List[int], points: int) -> int:
    lo, hi = 0, len(thresholds) - 1
    result = -1
    while lo <= hi:
        mid = (lo + hi) // 2
        if thresholds[mid] <= points:
            result = mid
            lo = mid + 1
        else:
            hi = mid - 1
    return result
```

## Why this is correct

- Because `thresholds` is strictly increasing, `thresholds[mid] <=
  points` being true implies `thresholds[j] <= points` for every `j <
  mid`, and being false implies `thresholds[j] > points` for every `j >
  mid`. That monotonicity is exactly what makes binary search valid
  here.
- Every time we find a qualifying `mid`, we save it as the current best
  answer *before* moving right to look for something even better —
  so we never lose track of the best index seen, even though we keep
  narrowing the range.
- If `thresholds[0] > points`, the very first comparison sends `hi`
  left immediately and `result` is never updated, correctly leaving it
  at `-1`.
- If `points` meets or exceeds the last threshold, the search keeps
  moving `lo` right until it lands on and confirms the final index.

## Complexity

- **Time:** O(log n) — each iteration halves the search range `[lo,
  hi]`.
- **Space:** O(1) — only a few scalar variables (`lo`, `hi`, `mid`,
  `result`) regardless of `n`.

## Follow-up sketch

With ties allowed (`thresholds` merely non-decreasing, e.g. `[100,
250, 250, 250, 500]`), the same "record on match, then keep pushing
right" binary search still returns the last matching index if we make
one change: on `thresholds[mid] == points` treat it as a qualifying
match (already covered by `<=`) but still move `lo = mid + 1` instead
of stopping, so the search keeps sweeping rightward through the block
of ties until it finds the boundary where the array exceeds `points`.
That is precisely what the code above already does — the `<=`
comparison and the "keep searching right after a match" rule require
no modification even when duplicates are introduced, since the
algorithm was never assuming strict increase, only monotonicity of the
predicate `thresholds[i] <= points`. The time complexity stays
**O(log n)**: the search still halves its range every step regardless
of how many duplicate values it passes over.
