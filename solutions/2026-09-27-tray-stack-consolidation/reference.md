# Reference Solution: Tray Stack Consolidation

## Approach

This is a classic **greedy + min-heap** pairing problem (the same shape as
Huffman-style repeated merging):

1. Push every stack height onto a min-heap.
2. While more than one stack remains, pop the two *smallest* stacks, merge
   them (cost = their sum), add that cost to a running total, and push the
   merged stack back onto the heap.
3. Once only one stack remains, return the running total.

**Why always merge the two smallest?** Every stack's height is counted once
for every merge it participates in above it in the "merge tree" — i.e. its
height is multiplied by the depth at which it finally joins the single
remaining stack. To minimize the total effort, the smallest stacks should be
merged earliest (and therefore participate in the most subsequent merges),
since multiplying a *small* height by a larger multiplier costs less than
multiplying a *large* height by that same multiplier. This is exactly the
exchange argument behind Huffman coding: any optimal merge order can be
rearranged, without increasing total cost, so that the two globally smallest
elements are merged first, which justifies the greedy step and lets the same
argument be applied recursively to the resulting multiset.

```python
import heapq
from typing import List


def min_consolidation_effort(heights: List[int]) -> int:
    heap = list(heights)
    heapq.heapify(heap)
    total = 0
    while len(heap) > 1:
        a = heapq.heappop(heap)
        b = heapq.heappop(heap)
        merged = a + b
        total += merged
        heapq.heappush(heap, merged)
    return total
```

### Worked check against the examples

- `heights = [4, 3, 2, 6]` → heap starts `[2,3,4,6]`. Merge `2+3=5`
  (`total=5`), heap `[4,5,6]`. Merge `4+5=9` (`total=14`), heap `[6,9]`.
  Merge `6+9=15` (`total=29`), heap `[15]`. Result `29`. ✓
- `heights = [1, 8, 3, 5]` → heap starts `[1,3,5,8]`. Merge `1+3=4`
  (`total=4`), heap `[4,5,8]`. Merge `4+5=9` (`total=13`), heap `[8,9]`.
  Merge `8+9=17` (`total=30`), heap `[17]`. Result `30`. ✓
- `heights = [7]` → only one stack, loop never runs, result `0`. ✓
- `heights = []` → loop never runs, result `0`. ✓
- `heights = [2, 9]` → single merge `2+9=11`, result `11`. ✓

## Complexity

- **Time:** `O(n log n)` — building the heap is `O(n)`, and each of the
  `n - 1` merges does two pops and one push on a heap of size `O(n)`, each
  `O(log n)`.
- **Space:** `O(n)` for the heap.

### Follow-up sketch

If up to `k` stacks can be combined in a single move (cost equal to the sum
of everything combined in that move), the same greedy idea generalizes: pop
the `k` smallest stacks at a time and merge them. The one subtlety is that
merging exactly `k` items at every step only tiles the `n` stacks evenly
when `(n - 1) % (k - 1) == 0`; otherwise the *first* merge should combine
just enough "dummy" zero-height stacks (or, equivalently, a smaller initial
group) so that every subsequent merge uses exactly `k` real or
already-merged stacks. This is the standard extension of Huffman coding to
a `k`-ary alphabet, and it keeps the same `O(n log n)` complexity using a
heap.
