# Reference Solution: Mixer Friend Circles

## Approach

This is a straightforward application of the **Union-Find (Disjoint Set
Union)** data structure with union-by-size and path compression:

1. Start with `n` singleton sets, one per attendee, each of size `1`.
2. For every `[a, b]` pair in `introductions`, union the set containing `a`
   with the set containing `b`. If they're already in the same set, the
   union is a no-op — this also makes repeated/duplicate introductions
   harmless automatically.
3. After processing every introduction, walk all `n` attendees, find each
   one's set root, and look up that root's tracked size. The maximum size
   seen is `largestCircleSize`; the count of attendees whose set size is
   exactly `1` is `soloCount`.

Union-by-size keeps the tree shallow (the smaller set's root is always
re-parented under the larger set's root), and path compression flattens
lookup chains on every `find`, so both operations run in amortized
`O(α(n))` time (effectively constant).

```python
from typing import List


def mixer_friend_circles(n: int, introductions: List[List[int]]) -> List[int]:
    parent = list(range(n))
    size = [1] * n

    def find(x: int) -> int:
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x

    def union(a: int, b: int) -> None:
        ra, rb = find(a), find(b)
        if ra == rb:
            return
        if size[ra] < size[rb]:
            ra, rb = rb, ra
        parent[rb] = ra
        size[ra] += size[rb]

    for a, b in introductions:
        union(a, b)

    largest = max((size[find(i)] for i in range(n)), default=0)
    solo = sum(1 for i in range(n) if size[find(i)] == 1)
    return [largest, solo]
```

### Worked check against the examples

- `n=5, [[0,1],[1,2],[3,4]]` → union(0,1) merges `{0,1}` (size 2); union(1,2)
  finds root of `1` (which is `0`'s set, size 2) and root of `2` (size 1),
  merging into `{0,1,2}` (size 3); union(3,4) merges `{3,4}` (size 2). Final
  sizes by root: `3, 3, 3, 2, 2` → largest `3`, and no attendee has a
  size-`1` set → `soloCount = 0`. Result `[3, 0]`. ✓
- `n=6, [[0,1],[2,3]]` → `{0,1}` size 2, `{2,3}` size 2, `{4}` size 1, `{5}`
  size 1. Largest is `2`, and two attendees (`4`, `5`) are alone → `[2, 2]`.
  ✓
- `n=1, []` → the single attendee is their own set of size `1`, which is
  also solo → `[1, 1]`. ✓

Edge cases: repeating the same pair (`[0,1]`, `[1,0]`, `[0,1]` again) only
merges the sets once — every union after the first is a no-op because `find`
returns the same root for both attendees — so duplicates never inflate a
circle's size. A full chain of introductions (`0-1`, `1-2`, `2-3`)
transitively merges every attendee into one circle even though `0` and `3`
were never introduced directly, since union-find tracks connectivity, not
direct adjacency.

## Complexity

- **Time:** `O((n + m) * α(n))`, where `m` is the number of introductions
  and `α` is the inverse Ackermann function (effectively constant) —
  `O(m)` for processing all unions plus `O(n)` for the final scan over every
  attendee to read off circle sizes.
- **Space:** `O(n)` for the `parent` and `size` arrays.

### Follow-up sketch

To answer "what is the largest circle size so far" after each introduction
incrementally, track a running `maxSize` variable alongside the Union-Find
structure: process each introduction's `union(a, b)` as usual, and if the
union actually merges two different sets (not a no-op), compare the newly
combined size against `maxSize` and update it if larger. Since the combined
size after a real merge is trivially available inside `union` (`size[ra] +=
size[rb]`), this adds only `O(1)` work per introduction on top of the
existing `O(α(n))` union cost — no need to ever re-scan all `n` attendees,
so each incremental query is still amortized `O(α(n))`.
