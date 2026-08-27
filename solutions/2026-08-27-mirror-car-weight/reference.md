# Mirror Car Weight — Reference Solution

## Approach

The train's cars only expose themselves one at a time through the
linked list, so there's no way to jump straight to position
`n - k + 1` without first knowing `n`. The natural fix is **two linear
passes**:

1. **First pass — measure.** Walk the list from `head` to `null`,
   counting nodes, to get the length `n`.
2. **Validate.** If `k < 1` or `k > n`, there is no car at position
   `k`, so return `-1` immediately.
3. **Second pass — locate.** Compute the mirror position
   `mirror = n - k + 1`. Walk from `head` again, advancing
   `mirror - 1` times, and return the value of the node you land on.

```python
from typing import Optional


class ListNode:
    def __init__(self, val: int = 0, next: "Optional[ListNode]" = None):
        self.val = val
        self.next = next


def mirror_car_weight(head: Optional[ListNode], k: int) -> int:
    n = 0
    node = head
    while node is not None:
        n += 1
        node = node.next

    if k < 1 or k > n:
        return -1

    mirror_idx = n - k + 1
    node = head
    for _ in range(mirror_idx - 1):
        node = node.next
    return node.val
```

## Why this is correct

- The first pass counts every node exactly once, so `n` is exactly the
  number of cars — this is the only way to learn `n` from a singly
  linked list, since there is no `.length` or back-pointer available.
- `k` is valid precisely when `1 <= k <= n`; anything else has no
  corresponding car, matching the problem's `-1` rule.
- Positions are 1-indexed, so the node holding the `mirror`-th car is
  reached by advancing `mirror - 1` links from `head`. Substituting
  `mirror = n - k + 1` directly encodes "the same distance from the
  other end": position `1` mirrors position `n`, position `n` mirrors
  position `1`, and (for odd `n`) the middle position mirrors itself —
  which is exactly what happens for the single-car list in Example 2,
  where `mirror = 1 - 1 + 1 = 1`.

## Complexity

- **Time:** O(n) — two linear passes over the list, each visiting at
  most `n` nodes.
- **Space:** O(1) additional space — only a counter and a couple of
  pointers are kept; the list itself is never copied into an array or
  other structure that scales with `n`.

## Follow-up sketch

To answer mirror queries in `O(1)` while supporting live `couple`
(append) operations, keep a **dynamic array (or deque) of the node
weights alongside the linked list**, updated incrementally:

- On `couple(weight)`: append the new node to the linked list's tail
  *and* push `weight` onto the backing array. An amortized-`O(1)`
  growable array (doubling capacity as needed, like Python's `list` or
  a C++ `vector`) keeps this append amortized `O(1)` even though an
  occasional resize costs `O(n)`.
- On a mirror query for position `k`: read `n = len(array)` in `O(1)`,
  validate `k`, and index directly into `array[n - k]` (0-indexed) in
  `O(1)` — no walking the linked list at all.

**Trade-off vs. re-walking the raw list:** the array costs an extra
`O(n)` space (one integer per car, mirroring what's already stored in
the linked list), roughly doubling memory usage. In exchange, queries
drop from `O(n)` per call to `O(1)`, and `couple` stays amortized
`O(1)`. This is the classic time/space trade-off: worthwhile whenever
queries are frequent relative to how often the train grows; wasteful
if the train is assembled once and only ever inspected a handful of
times, in which case the original two-pass, zero-extra-space approach
is simpler and just as fast in total work.
