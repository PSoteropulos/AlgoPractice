# Reference Solution: Tour Bus Occupancy Window

## Approach

This is a sliding window problem with two conditions to maintain
simultaneously as the window `[left, right]` expands and contracts:

1. **Bounded spread**: `max(window) - min(window) <= tolerance`.
2. **Contains a peak**: at least one element in the window is `>= minPeak`.

**Tracking the running max/min.** As the window slides, we need the max and
min of the current window in better than `O(window size)` per step. The
standard trick is two monotonic deques of indices:

- `maxDq` keeps indices with strictly decreasing values (front is always the
  index of the current window's max).
- `minDq` keeps indices with strictly increasing values (front is always the
  index of the current window's min).

When a new value `v` enters at `right`, pop from the back of `maxDq` while
the value there is `<= v` (it can never be the max again), then push
`right`. Symmetrically for `minDq` with `>= v`. When the window's left edge
advances past an index, pop it from the front of the deque if it's there.
Each index is pushed and popped at most once, so total deque work across the
whole scan is `O(n)`.

**Tracking whether the window has a peak.** Instead of re-scanning the
window, maintain a running counter `peakCount` of how many elements in the
current window satisfy `value >= minPeak`. Increment it when a qualifying
value enters the window at `right`, decrement it when a qualifying value
leaves the window as `left` advances. The window is valid (for the purposes
of updating the answer) exactly when `peakCount > 0`.

**Main loop.** For each `right`, extend the window and update both deques
and `peakCount`. Then, while the window's spread (`max - min`, read from the
fronts of the two deques) exceeds `tolerance`, shrink from the left,
updating `peakCount` and popping stale front indices from the deques. After
the window is valid again, if `peakCount > 0`, update `best` with the
current window length `right - left + 1`.

Because `left` only ever increases and `right` only ever increases, and
each index enters/leaves each deque at most once, the whole algorithm runs
in a single amortized `O(n)` pass.

## Reference implementation (Python)

```python
from collections import deque
from typing import List


def longest_steady_window(occupancy: List[int], tolerance: int, min_peak: int) -> int:
    max_dq: deque = deque()  # indices, values strictly decreasing
    min_dq: deque = deque()  # indices, values strictly increasing
    left = 0
    peak_count = 0
    best = 0

    for right, v in enumerate(occupancy):
        while max_dq and occupancy[max_dq[-1]] <= v:
            max_dq.pop()
        max_dq.append(right)

        while min_dq and occupancy[min_dq[-1]] >= v:
            min_dq.pop()
        min_dq.append(right)

        if v >= min_peak:
            peak_count += 1

        while occupancy[max_dq[0]] - occupancy[min_dq[0]] > tolerance:
            if occupancy[left] >= min_peak:
                peak_count -= 1
            if max_dq[0] == left:
                max_dq.popleft()
            if min_dq[0] == left:
                min_dq.popleft()
            left += 1

        if peak_count > 0:
            best = max(best, right - left + 1)

    return best
```

## Walkthrough on Example 1

`occupancy = [4, 6, 5, 7, 9, 8, 3]`, `tolerance = 3`, `minPeak = 8`.

The window grows to `[4, 6, 5, 7]` (spread 3, no peak yet, doesn't count),
then adding `9` makes the spread 5, so the window shrinks from the left
until it becomes `[7, 9]` (spread 2, contains 9 which is `>= 8`, length 2).
Adding `8` gives `[7, 9, 8]` (spread 2, still has a peak, length 3 — the
best found). Adding `3` blows the spread past 3 again; after shrinking,
the surviving window `[3]` has no peak, so it doesn't improve the answer.
Final answer: `3`.

## Complexity

- **Time:** `O(n)` — `left` and `right` each advance at most `n` times, and
  each index is pushed/popped from each deque at most once.
- **Space:** `O(n)` — the two monotonic deques hold at most `n` indices
  each in the worst case (e.g. a strictly increasing or decreasing array).

## Follow-up notes

For the streaming/update variant (values change one at a time and the query
must be re-answered), a plain recomputation is `O(n)` per update, which is
fine for infrequent updates but too slow for heavy update workloads. A
sqrt-decomposition or segment-tree-with-merge-of-(max, min, longest-valid-
run) structure can bring a single point update + full-array query down to
`O(sqrt(n))` or `O(log n)` respectively, at the cost of a considerably more
involved merge function that has to combine "longest steady run containing
a peak" across a segment boundary.
