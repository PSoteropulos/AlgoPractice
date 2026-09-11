# Reference Solution: Prep Line Priority

## Approach

This is a classic "maximize count under a running-total deadline" problem,
solved with a **greedy + max-heap exchange argument**:

1. Sort `orders` by `spoilBy` ascending. Intuitively, we should always be
   willing to consider the order with the nearest deadline before one with
   a later deadline, since a plan that's feasible for a set of orders stays
   feasible if we only ever add orders whose deadlines are no earlier than
   any deadline already accounted for.
2. Walk the sorted orders left to right, maintaining a max-heap of the
   `prepTime` values *tentatively accepted so far*, plus a running `total`
   of their sum.
3. For each order, tentatively accept it: push its `prepTime` onto the heap
   and add it to `total`.
4. If `total` now exceeds the current order's `spoilBy`, the tentative set
   is infeasible for this deadline. Rather than necessarily rejecting the
   order we just looked at, **evict whichever accepted order has the
   largest `prepTime`** (the top of the max-heap) — pop it and subtract it
   from `total`. This keeps the *count* of accepted orders the same while
   minimizing the time spent, which can only help satisfy later (larger or
   equal) deadlines. If the order just added happens to be the one with the
   largest `prepTime`, this correctly "un-accepts" it.
5. After processing every order, the heap's size is the answer — every
   order still in the heap has a cumulative-time prefix (when the heap's
   contents are sorted into completion order) that never exceeded any of
   the deadlines encountered along the way, by construction.

Why the exchange step preserves optimality: at every prefix of the sorted
orders, the algorithm maintains the *feasible set of maximum size with the
minimum possible total prep time* among all subsets of that prefix. Adding
one more order either keeps that invariant directly (it fits) or, if it
doesn't fit, swapping out the current largest `prepTime` can only reduce
(or leave unchanged) the total time for the same count — never increasing
it — so the invariant is preserved by induction. This is the same
exchange-argument style used for interval/deadline scheduling problems in
general.

```python
from typing import List
import heapq


def max_orders_completed(orders: List[List[int]]) -> int:
    orders_sorted = sorted(orders, key=lambda o: o[1])
    heap: List[int] = []  # max-heap via negation
    total = 0
    for prep_time, spoil_by in orders_sorted:
        heapq.heappush(heap, -prep_time)
        total += prep_time
        if total > spoil_by:
            total += heapq.heappop(heap)  # adds a negative value back
    return len(heap)
```

### Worked check against the examples

- `orders = [[5,9],[2,6],[3,9],[4,15],[6,15]]` → sorted by `spoilBy`:
  `(2,6), (5,9), (3,9), (4,15), (6,15)` (the two deadline-`9` orders can go
  in either relative order). Processing: accept `2` (total `2 <= 6`);
  accept `5` (total `7 <= 9`); accept `3` (total `10 > 9` → evict the
  largest, `5`, total becomes `5`); accept `4` (total `9 <= 15`); accept
  `6` (total `15 <= 15`). Final heap holds `{2,3,4,6}`, size `4`. ✓
- `orders = [[3,3],[2,3]]` → sorted: `(2,3), (3,3)` or `(3,3), (2,3)`,
  either way: accept the first (total equals its own `prepTime`, `<= 3`);
  accept the second, pushing total to `5 > 3`, so evict the larger of the
  two (`3`), leaving total `2` and heap size `1`. ✓
- `orders = [[5,3]]` → accept `5`, total `5 > 3`, evict it — the only
  order it had. Heap ends empty, size `0`. ✓
- No orders at all → the loop never runs, heap stays empty, size `0`. ✓
- `orders = [[1,10],[2,10],[3,10]]` → every prefix sum (`1`, `3`, `6`)
  stays `<= 10`, so nothing is ever evicted; heap ends with all `3`
  entries. ✓

## Complexity

- **Time:** `O(n log n)` — sorting is `O(n log n)`, and each of the `n`
  orders causes at most one push and at most one pop on a heap of size
  `O(n)`, each `O(log n)`.
- **Space:** `O(n)` for the sorted copy and the heap.

### Follow-up sketch

In the streaming/online version, orders arrive in arbitrary `spoilBy`
order rather than sorted, and each accept/reject decision is final the
moment it's made. The heap invariant from the offline algorithm — "the
heap holds a feasible, minimum-total-time set of maximum size *among the
orders seen with `spoilBy` no greater than the current one*" — depends
entirely on having already seen every order with an earlier deadline
before making the swap decision for a later one. Without that ordering
guarantee, a superficially reasonable adaptation (maintain the same
max-heap + running-total swap rule as orders arrive) can still make
locally correct swaps, but it loses the *global* optimality guarantee: an
order with a very early deadline that arrives late can force the eviction
of orders that a clairvoyant (offline, sorted) scheduler would have kept,
and there is no way to recover that eviction retroactively once time has
"passed" it in the online model. In general, competitive online algorithms
for deadline scheduling trade optimality for a bounded competitive ratio
against the offline optimum, rather than matching it exactly.
