# Reference Solution: Workshop Marathon Scheduler

## Approach

This is a classic **greedy-with-a-max-heap** pattern: process candidates in
deadline order, provisionally accept every one that still fits, and let
later, tighter-deadline workshops "bump" the single worst (longest) already
accepted workshop if that's the only way to make room.

1. **Sort by deadline.** Any optimal schedule can be reordered so completed
   workshops run in nondecreasing deadline order without breaking any
   deadline (swapping two adjacent completed workshops whose deadlines are
   out of order never makes either one finish later than the later of the
   two original finish times). So it's safe to only ever consider building
   the schedule in deadline order.
2. **Walk the sorted list, tracking `time`** (the finish time of the
   marathon so far) **and a max-heap of the durations currently kept.**
   For each `(duration, deadline)`:
   - If `time + duration <= deadline`, keep it: push `duration` onto the
     heap and add it to `time`.
   - Otherwise it doesn't fit as-is. If the heap's largest kept duration is
     **greater than** this workshop's duration, swap them: popping the
     heap's max and pushing `duration` instead can only *decrease* `time`
     (since we're replacing a bigger duration with a smaller one), while
     the *count* of kept workshops stays the same. Since everything kept
     so far already has a deadline `<= ` the current one (sorted order),
     shrinking `time` can only help those earlier deadlines stay satisfied,
     never hurt them.
   - If neither branch applies (it doesn't fit, and it isn't smaller than
     the current max), this workshop simply can't be part of any optimal
     selection restricted to what's been seen so far — skip it.
3. **The answer is the final heap size** — the number of workshops kept
   after processing the whole list.

The key invariant is that after processing the first `k` workshops (in
deadline order), the heap always holds a set of durations of **maximum
possible size** whose sum is the **minimum possible** among all
maximum-size feasible subsets of those `k` workshops. Swapping in a smaller
duration whenever possible preserves both maximality and minimality, which
is exactly what lets later, more time-constrained workshops still have a
chance to fit.

```python
import heapq
from typing import List


def max_workshops(workshops: List[List[int]]) -> int:
    ordered = sorted(workshops, key=lambda w: w[1])
    heap: List[int] = []  # max-heap via negation
    time = 0

    for duration, deadline in ordered:
        if time + duration <= deadline:
            heapq.heappush(heap, -duration)
            time += duration
        elif heap and -heap[0] > duration:
            time += duration - (-heapq.heappop(heap))
            heapq.heappush(heap, -duration)

    return len(heap)
```

### Worked check against the examples

- `[[2, 5], [3, 5], [4, 7], [5, 10]]` is already sorted by deadline.
  `[2, 5]`: `0+2<=5` → keep, `time=2`, heap `{2}`. `[3, 5]`: `2+3<=5` →
  keep, `time=5`, heap `{2, 3}`. `[4, 7]`: `5+4=9>7`; heap max is `3`,
  which is **not** greater than `4`, so no swap — skip it. `[5, 10]`:
  `5+5<=10` → keep, `time=10`, heap `{2, 3, 5}`. Final heap size `3`. ✓
- `[[4, 6], [5, 5], [2, 6]]` sorts by deadline to `[[5, 5], [4, 6], [2, 6]]`.
  `[5, 5]`: `0+5<=5` → keep, `time=5`, heap `{5}`. `[4, 6]`: `5+4=9>6`; heap
  max `5 > 4` → swap: `time = 5 + (4-5) = 4`, heap `{4}`. `[2, 6]`:
  `4+2=6<=6` → keep, `time=6`, heap `{4, 2}`. Final heap size `2`. ✓
- `[[10, 3]]`: `0+10=10>3`, heap is empty so no swap is possible — skip it.
  Final heap size `0`. ✓
- Tie-deadline sanity check, `[[2, 4], [1, 4]]` (already sorted, deadlines
  tie): `[2, 4]`: `0+2<=4` → keep, `time=2`, heap `{2}`. `[1, 4]`:
  `2+1=3<=4` → keep, `time=3`, heap `{2, 1}`. Final heap size `2`, matching
  that both fit back to back within the shared deadline.
- `[[3, 4], [2, 4]]` (tie deadlines, combined duration `5` exceeds the
  shared deadline `4`): `[3, 4]`: `0+3<=4` → keep, `time=3`, heap `{3}`.
  `[2, 4]`: `3+2=5>4`; heap max `3 > 2` → swap: `time = 3 + (2-3) = 2`,
  heap `{2}`. Final heap size `1` — only the shorter workshop can be kept,
  which matches: no ordering of both fits inside deadline `4`.

## Complexity

- **Time:** `O(n log n)` — an `O(n log n)` sort by deadline, followed by a
  single pass over the sorted list doing at most one push and one pop per
  element, each `O(log n)` on the heap.
- **Space:** `O(n)` for the sorted copy and the heap, which holds at most
  one entry per input workshop.

### Follow-up sketch

To recover *which* workshops make up an optimal selection, push
`(duration, originalIndex)` pairs onto the heap instead of bare durations
(ordering still by `duration`), and remember the swapped-out pair when a
bump happens instead of discarding it. Whatever remains in the heap at the
end is one valid maximum set — read off each entry's `originalIndex` to
report the actual workshops chosen. Complexity is unchanged, since the heap
still holds at most `n` pairs and each operation is still `O(log n)`.
