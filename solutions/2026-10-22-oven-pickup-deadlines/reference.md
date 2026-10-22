# Oven Pickup Deadlines — Reference Solution

## Approach

Process the orders by increasing `pickup`. Keep a max-heap of the bake times of
the orders currently chosen, and `total`, their combined bake time. For each
order, tentatively add it. If `total` now exceeds its `pickup`, the chosen set
is infeasible, so remove the order with the **largest** bake time (which may be
the new one itself).

Why it is correct: a chosen set is feasible exactly when, run in pickup order,
every prefix sum is within its deadline. Because we handle orders in deadline
order, the new order has the latest deadline so far, and only the total needs
checking against it (earlier prefixes were already valid). Dropping the longest
order keeps the count at the best achievable and leaves the smallest possible
total, which can only help later orders (exchange argument). The answer is the
final heap size.

```python
import heapq
from typing import List


def max_orders(orders: List[List[int]]) -> int:
    heap = []  # max-heap via negated bake times
    total = 0
    for bake, pickup in sorted(orders, key=lambda o: o[1]):
        heapq.heappush(heap, -bake)
        total += bake
        if total > pickup:
            total += heapq.heappop(heap)  # popped value is negative
    return len(heap)
```

## Complexity

- Time: `O(n log n)` for the sort and heap operations.
- Space: `O(n)` for the heap.
