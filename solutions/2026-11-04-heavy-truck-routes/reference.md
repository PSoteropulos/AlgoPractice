# Heavy Truck Routes — Reference Solution

## Approach

Answer the queries **offline** with union-find.

A bridge is usable for a query exactly when `cap >= load`. If we process
queries from the heaviest load to the lightest, the set of usable bridges only
ever grows. So:

1. Sort bridges by `cap` descending and queries by `load` descending (keeping
   each query's original index).
2. For each query in that order, union every not-yet-added bridge with
   `cap >= load`. Then the query is `true` iff `find(src) == find(dst)`.
3. Write each result back at the query's original index.

Union-find uses path compression (halving) and union by size, giving
near-constant amortised time per operation. A town reaches itself trivially
since `find(x) == find(x)`.

## Python

```python
from typing import List


def reachable_by_truck(n: int, bridges: List[List[int]], queries: List[List[int]]) -> List[bool]:
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

    edges = sorted(bridges, key=lambda e: -e[2])
    order = sorted(range(len(queries)), key=lambda j: -queries[j][2])
    answer = [False] * len(queries)
    e = 0
    for j in order:
        src, dst, load = queries[j]
        while e < len(edges) and edges[e][2] >= load:
            union(edges[e][0], edges[e][1])
            e += 1
        answer[j] = find(src) == find(dst)
    return answer
```

## Complexity

- Time: `O(E log E + Q log Q + (E + Q) * α(n))`.
- Space: `O(n + Q)` beyond the sorted copies of the inputs.
