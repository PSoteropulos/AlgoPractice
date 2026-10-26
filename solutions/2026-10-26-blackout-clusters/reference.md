# Blackout Clusters — Reference Solution

## Approach

Handling shutdowns forward would require *splitting* clusters, which
union-find cannot do. Reverse time instead: shutting towers down in `order`
is the same as switching them **on** in reverse order, and switching a tower
on only ever *merges* clusters.

1. Build an adjacency list and a union-find where each root stores its
   cluster's total load (`load`, 64-bit safe).
2. Walk `i` from `n - 1` down to `0`. Before reviving `order[i]`, the running
   towers are exactly those still up after the first `i + 1` shutdowns, so
   `answer[i] = best` (the largest load seen so far; `0` at the start).
3. Revive `order[i]`, then union it with every already-revived neighbor,
   adding the merged loads.
4. Update `best` with the load of the revived tower's cluster. Only this
   cluster can have grown, so no other cluster needs checking.

```python
from typing import List


def max_cluster_after_shutdowns(weights: List[int], edges: List[List[int]], order: List[int]) -> List[int]:
    n = len(weights)
    adj = [[] for _ in range(n)]
    for a, b in edges:
        adj[a].append(b)
        adj[b].append(a)

    parent = list(range(n))
    load = weights[:]
    alive = [False] * n

    def find(x: int) -> int:
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x

    answer = [0] * n
    best = 0
    # Process shutdowns backwards: turn towers back on and merge.
    for i in range(n - 1, -1, -1):
        answer[i] = best
        t = order[i]
        alive[t] = True
        for nb in adj[t]:
            if alive[nb]:
                ra, rb = find(t), find(nb)
                if ra != rb:
                    parent[ra] = rb
                    load[rb] += load[ra]
        best = max(best, load[find(t)])
    return answer

```

Checked against all examples in `problem.md`, the extra edge cases in the
stubs, and 500 random small graphs compared with a brute-force simulation.

## Complexity

- **Time:** O((n + m) · α(n)), where `m = len(edges)` and α is the inverse
  Ackermann function (path compression is used).
- **Space:** O(n + m) for the adjacency list and union-find arrays.
