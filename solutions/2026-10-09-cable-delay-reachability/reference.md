# Cable Delay Reachability — Reference Solution

## Approach

A route only uses cables with delay `< limit`, so for a given limit the
reachable depots are exactly the connected components of the graph restricted
to those cables. Answer the queries **offline**: sort cables by delay and
sort query indices by `limit`. Sweep the queries in increasing `limit`; before
answering a query, union every not-yet-added cable whose delay is strictly
less than its limit. Then the answer is `find(u) == find(v)` (which is also
true when `u == v`). Results are written back at each query's original index.
Union-Find with path compression and union by size keeps operations
near-constant.

## Complexity

- Time: O((C + Q) log(C + Q)) for sorting, plus O((C + Q) α(n)) for the
  union-find work, where `C` is the number of cables and `Q` the number of queries.
- Space: O(n + Q).

Follow-up: build the minimum spanning forest (Kruskal) and answer each query
online with the max edge on the tree path, e.g. via binary lifting, or a
Kruskal reconstruction tree.

## Code (Python)

```python
def can_reach_all(n, cables, queries):
    parent = list(range(n))
    size = [1] * n

    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x

    def union(a, b):
        ra, rb = find(a), find(b)
        if ra == rb:
            return
        if size[ra] < size[rb]:
            ra, rb = rb, ra
        parent[rb] = ra
        size[ra] += size[rb]

    edges = sorted(cables, key=lambda c: c[2])
    order = sorted(range(len(queries)), key=lambda j: queries[j][2])
    answer = [False] * len(queries)
    i = 0
    for j in order:
        u, v, limit = queries[j]
        while i < len(edges) and edges[i][2] < limit:
            union(edges[i][0], edges[i][1])
            i += 1
        answer[j] = find(u) == find(v)
    return answer
```
