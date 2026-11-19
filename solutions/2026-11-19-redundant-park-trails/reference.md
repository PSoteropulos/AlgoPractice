# Redundant Park Trails — Reference Solution

## Approach

Process the trails in the order they are built and keep track of which
clearings are already connected to each other. A **union-find** (disjoint set
union) structure does exactly that: every connected group of clearings has one
representative ("root"), and `find(x)` returns the root of `x`'s group.

For trail `i = [a, b]`:

- If `find(a) == find(b)`, a walk from `a` to `b` already exists using earlier
  trails, so trail `i` is **redundant** — record `i`. This also covers loops
  (`a == b`) and duplicate trails automatically, with no special cases.
- Otherwise the trail joins two separate groups: merge them with `union`.

Because the trails are scanned in index order, the recorded indices come out
already sorted.

Two standard optimizations keep each operation nearly `O(1)`:

- **Path compression** (here the "halving" variant): while walking up to the
  root, point each visited node at its grandparent. It is iterative, so there
  is no recursion-depth problem on long paths.
- **Union by size:** attach the smaller group under the larger one so trees
  stay shallow.

Common pitfalls:

- Comparing `a` and `b` directly instead of their roots — that only catches
  loops, not cycles like `0-1, 1-2, 0-2`.
- Building the whole graph first and then searching: redundancy depends on
  *when* each trail was built, so only earlier trails may count.
- A recursive `find` without union by size can hit Python's recursion limit
  on a long chain of 10^5 clearings.

## Python

```python
from typing import List


def redundant_trails(n: int, trails: List[List[int]]) -> List[int]:
    parent = list(range(n))
    size = [1] * n

    def find(x: int) -> int:
        while parent[x] != x:
            parent[x] = parent[parent[x]]  # path halving
            x = parent[x]
        return x

    redundant = []
    for i, (a, b) in enumerate(trails):
        ra, rb = find(a), find(b)
        if ra == rb:
            redundant.append(i)
            continue
        if size[ra] < size[rb]:
            ra, rb = rb, ra
        parent[rb] = ra  # attach smaller group under larger
        size[ra] += size[rb]
    return redundant
```

## Complexity

- **Time:** `O(n + m · α(n))`, where `m = trails.length` and `α` is the
  inverse Ackermann function (at most 4 for any realistic input) — effectively
  linear.
- **Space:** `O(n)` for the `parent` and `size` arrays, plus the output list.

## Follow-up

Every non-redundant trail merges two groups, reducing the number of groups by
exactly one. Starting from `n` groups and ending with `c` groups, exactly
`n - c` trails were non-redundant, so the number of redundant trails is
`m - (n - c)`. The final grouping `c` depends only on the *set* of trails, not
their order, so the count is the same for every build order — even though
*which* trails are redundant can change.
