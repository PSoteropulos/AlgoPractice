# Merged Step-Count Timeline — Reference Solution

## Approach

This is the classic **merge two sorted lists** pattern, with one twist:
ties must be broken so that `A`'s checkpoint always lands before `B`'s.

Use a dummy head node and a `tail` pointer that always points at the last
node appended to the merged list so far. Walk `A` and `B` with two
pointers, `a` and `b`:

1. While both `a` and `b` are non-null, compare `a.timestamp` and
   `b.timestamp`.
   - If `a.timestamp <= b.timestamp` (using `<=`, not `<`, is exactly
     what gives `A` the tie-break), splice `a` onto the tail and advance
     `a`.
   - Otherwise splice `b` onto the tail and advance `b`.
2. Once one pointer runs out, the other list is already sorted and
   entirely greater than or equal to everything appended so far, so
   splice whichever pointer is still non-null onto the tail as one final
   chunk — no need to walk it node by node.
3. Return `dummy.next` (the real head, skipping the dummy sentinel).

```python
from typing import Optional


class ListNode:
    def __init__(self, timestamp=0, steps=0, next=None):
        self.timestamp = timestamp
        self.steps = steps
        self.next = next


def merge_step_timelines(
    head_a: Optional[ListNode], head_b: Optional[ListNode]
) -> Optional[ListNode]:
    dummy = ListNode()
    tail = dummy
    a, b = head_a, head_b
    while a is not None and b is not None:
        if a.timestamp <= b.timestamp:
            tail.next = a
            a = a.next
        else:
            tail.next = b
            b = b.next
        tail = tail.next
    tail.next = a if a is not None else b
    return dummy.next
```

## Why this is correct

- Both input lists are individually sorted by strictly increasing
  timestamp, so at every step the smaller of the two current heads (`a`
  or `b`) is guaranteed to be the smallest remaining timestamp across
  *both* lists — nothing later in either list can be smaller than its own
  current head. This is the standard merge-step invariant.
- Using `a.timestamp <= b.timestamp` (rather than strict `<`) as the
  condition to take from `A` means that on an exact tie, `A`'s node is
  spliced in first and `B`'s equal-timestamp node is only picked up on
  the very next iteration, immediately after — exactly the required
  tie-break.
- Existing nodes are relinked in place (`tail.next = a` reuses the node
  rather than copying its fields), satisfying the "reuse nodes" 
  requirement and naturally handling arbitrary `steps` values without
  ever inspecting them.
- When one list is exhausted, the remaining list is already fully sorted
  and every one of its timestamps is `>=` the last timestamp appended (it
  lost the most recent comparison, if there was one, or the other list
  was empty from the start), so attaching it wholesale in one step is
  safe and correct — this is what makes Example 3 (an empty `A`) and the
  "both empty" edge case fall out of the same code path with no special
  casing.

## Complexity

- **Time:** O(n + m), where `n` and `m` are the lengths of `A` and `B` —
  each node from both lists is visited and spliced in exactly once.
- **Space:** O(1) additional space — only the `dummy`, `tail`, `a`, and
  `b` pointers are allocated; no new nodes are created and no auxiliary
  array is used.

## Follow-up sketch

For `k` sorted timelines, repeatedly picking the smallest of `k` current
heads by scanning all of them is `O(k)` per step, or `O(n * k)` overall
for `n` total nodes — too slow for large `k`. Instead, keep a **min-heap
(priority queue) of size at most `k`**, keyed first by `timestamp` and
then by the watch's original index (`0` before `1` before `2`, ...) to
get the tie-break order:

- Seed the heap with the head node of each of the `k` lists, tagged with
  its source index.
- Repeatedly pop the minimum `(timestamp, sourceIndex)` entry, splice
  that node onto the merged list's tail, and — if that node has a
  `next` — push `next` (tagged with the same `sourceIndex`) back onto the
  heap.
- Stop when the heap is empty.

Each of the `n` total nodes across all `k` lists is pushed and popped at
most once, and each heap operation costs `O(log k)`, giving `O(n log k)`
overall — far better than `O(n * k)` once `k` is large. The trade-off is
`O(k)` extra space for the heap itself (versus `O(1)` for the two-pointer
version above), which is negligible as long as `k` is much smaller than
`n`.
