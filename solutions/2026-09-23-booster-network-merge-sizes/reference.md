# Reference Solution: Booster Network Merge Sizes

## Approach

This is a **Union-Find (Disjoint Set Union)** problem with union-by-size
and path compression, where each installation asks for the size of the
resulting component immediately.

1. Start with `n` singleton networks, one per booster, each of size `1`.
2. For every `[a, b]` in `cables`, find the roots of `a` and `b`.
   - If the roots differ, union them: re-parent the smaller network's
     root under the larger network's root (union-by-size), and add the
     smaller size into the larger.
   - If the roots are the same, the cable is redundant — do nothing.
3. Either way, the size to record is the size stored at the (possibly
   updated) root of `a`'s network — since `a` and `b` are guaranteed to
   share a root at this point.

Union-by-size keeps trees shallow, and path compression flattens lookup
chains on every `find`, so both operations run in amortized `O(α(n))`
time (effectively constant).

```python
from typing import List


def booster_network_merge_sizes(n: int, cables: List[List[int]]) -> List[int]:
    parent = list(range(n))
    size = [1] * n

    def find(x: int) -> int:
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x

    result = []
    for a, b in cables:
        ra, rb = find(a), find(b)
        if ra != rb:
            if size[ra] < size[rb]:
                ra, rb = rb, ra
            parent[rb] = ra
            size[ra] += size[rb]
            result.append(size[ra])
        else:
            result.append(size[ra])
    return result
```

### Worked check against the examples

- `n=5, [[0,1],[1,2],[3,4],[2,3]]`:
  - `[0,1]` → different roots, merge into size `2` → record `2`.
  - `[1,2]` → root of `1` (size 2) differs from root of `2` (size 1),
    merge into size `3` → record `3`.
  - `[3,4]` → different roots, merge into size `2` → record `2`.
  - `[2,3]` → root of `2`'s network (size 3) differs from root of `3`'s
    network (size 2), merge into size `5` → record `5`.
  - Result `[2, 3, 2, 5]`. ✓
- `n=3, [[0,1],[0,1]]`: first `[0,1]` merges into size `2`, recorded.
  Second `[0,1]` finds `0` and `1` already share a root, so no merge
  happens — the recorded size is still that root's size, `2`. Result
  `[2, 2]`. ✓
- `n=4, [[0,1],[2,3],[1,3]]`: `[0,1]` → size `2`; `[2,3]` → a *separate*
  network of size `2`; `[1,3]` finds root of `1` (size 2) differs from
  root of `3` (size 2), merges into size `4`. Result `[2, 2, 4]`. ✓

Edge cases: with zero cables the answer is simply an empty array,
regardless of `n`. A strictly increasing chain (`0-1`, `1-2`, `2-3`)
grows the same network by exactly one booster per cable, giving sizes
`2, 3, 4`, since each new cable always connects a fresh singleton to the
existing chain.

## Complexity

- **Time:** `O(m * α(n))`, where `m = cables.length` and `α` is the
  inverse Ackermann function (effectively constant) — every cable does
  two `find` calls and at most one union, each amortized `O(α(n))`.
- **Space:** `O(n)` for the `parent` and `size` arrays.

### Follow-up sketch

To also report, after each cable, how many distinct networks currently
have size `>= T`: maintain a running counter `countAtLeastT`. Whenever a
real merge happens (roots differed), the two old networks (sizes `s1`,
`s2`) disappear and one new network (size `s1 + s2`) appears, so update
the counter by checking, before mutating state, whether `s1 >= T` and/or
`s2 >= T` (decrement for each that was already counted) and whether the
new combined size `s1 + s2 >= T` (increment if so). This is `O(1)` extra
work per cable on top of the existing union-find operations, so the
overall bound stays `O((n + m) * α(n))` (the `O(n)` covers initializing
the counter once at the start, since with `T >= 2` no singleton counts
yet, and with `T <= 1` every one of the `n` singletons counts up front).
