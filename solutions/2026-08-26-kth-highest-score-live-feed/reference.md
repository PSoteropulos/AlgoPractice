# Kth Highest Score Live Feed — Reference Solution

## Approach

This is a classic **bounded min-heap** pattern: to know the k-th largest
value among everything seen so far, it is enough to keep only the `k`
largest values around, and among those the smallest one (the heap's root)
*is* the k-th largest overall.

1. Maintain a min-heap that is only ever allowed to grow to size `k`.
2. For each incoming score `s`:
   - Push `s` onto the heap.
   - If the heap's size just became `k + 1`, pop the smallest element —
     this discards a value that is definitely not among the current top
     `k`, so the heap always holds exactly the `k` largest scores seen so
     far (once at least `k` scores have arrived).
   - If the heap's size is now `k`, its root (the minimum of the heap) is
     the k-th highest score so far — append it to the result.
   - Otherwise fewer than `k` scores have arrived yet — append `-1`.

```python
import heapq
from typing import List

def kth_highest_scores(k: int, scores: List[int]) -> List[int]:
    heap: List[int] = []
    result: List[int] = []
    for s in scores:
        heapq.heappush(heap, s)
        if len(heap) > k:
            heapq.heappop(heap)
        result.append(heap[0] if len(heap) == k else -1)
    return result
```

## Why this is correct

- Invariant: after processing the first `i` scores, the heap contains
  exactly `min(i, k)` elements, and whenever `i >= k` those elements are
  precisely the `k` largest values among `scores[0..i-1]` (as a multiset —
  duplicates are kept as separate entries, matching the problem's
  tie-handling rule).
- The invariant holds by induction: pushing a new score and then, only if
  the heap overflowed past `k`, popping the current minimum never removes
  a value unless there are already `k` values at least as large sitting in
  the heap — so the discarded value can never have been the k-th largest
  (or higher) among the scores seen so far.
- Given that invariant, the smallest element of a set of exactly the `k`
  largest values is, by definition, the k-th largest value overall — which
  is exactly the heap's root.
- Before `k` scores have arrived the heap has fewer than `k` elements, so
  the k-th highest doesn't exist yet and the algorithm correctly reports
  `-1`.

## Complexity

- **Time:** O(n log k) — each of the `n` scores causes at most one push and
  one pop on a heap that never holds more than `k + 1` elements.
- **Space:** O(k) for the heap, plus O(n) for the output array.

## Follow-up sketch

To support disqualifying (removing) an arbitrary past score, a plain heap
alone is not enough because a binary heap only gives efficient access to
its *minimum*, not to an arbitrary interior value — finding a specific
value inside a heap to remove it takes O(n) in general. The standard fix
is **lazy deletion**:

- Keep the same min-heap of "current top-k candidates," but also keep a
  hash map of `value -> count` for scores that have been disqualified and
  are still sitting in the heap.
- When popping (or peeking) the heap's root, first check the "pending
  removal" map: if the root's value has a pending removal, decrement its
  count, pop it, and repeat until the true root is found.
- On a disqualification, if the value is inside the current top-k heap,
  record it in the pending-removal map (an O(log k) hash update, no
  scan); if it isn't (it's outside the current top-k window), nothing
  needs to happen immediately since it wasn't affecting the answer.
- Because a candidate score's removal is only ever charged (via the
  pending-removal map) once it is actually reached, the total work across
  all pushes, pops, and removals stays O(log k) amortized per operation.
