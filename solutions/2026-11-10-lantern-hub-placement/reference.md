# Reference: Lantern Hub Placement

## Approach

This is the classic **rerooting** technique.

1. Root the tree at hut 0 and get a BFS order (iterative, so a path of 100000
   huts causes no stack problems).
2. Let `sub[v]` be the total weight in the subtree of `v` (accumulate in
   reverse BFS order). Let `W = sub[0]` be the total weight.
3. Compute `cost[0] = sum(weights[v] * depth[v])` directly.
4. Moving the hub from a parent `p` to its child `c` brings every lantern in
   `c`'s subtree one step closer (`-sub[c]`) and pushes everything else one
   step farther (`+(W - sub[c])`), so
   `cost[c] = cost[p] + W - 2 * sub[c]`. Fill this in BFS order.
5. Return the hut with the smallest `(cost, index)`.

## Code (Python)

```python
from collections import deque
from typing import List


def best_hub(n: int, edges: List[List[int]], weights: List[int]) -> List[int]:
    adj = [[] for _ in range(n)]
    for a, b in edges:
        adj[a].append(b)
        adj[b].append(a)
    parent = [-1] * n
    order = []
    seen = [False] * n
    seen[0] = True
    dq = deque([0])
    while dq:
        u = dq.popleft()
        order.append(u)
        for v in adj[u]:
            if not seen[v]:
                seen[v] = True
                parent[v] = u
                dq.append(v)
    sub = weights[:]
    depth = [0] * n
    for u in order[1:]:
        depth[u] = depth[parent[u]] + 1
    for u in reversed(order[1:]):
        sub[parent[u]] += sub[u]
    total = sub[0]
    cost = [0] * n
    cost[0] = sum(weights[u] * depth[u] for u in range(n))
    for u in order[1:]:
        cost[u] = cost[parent[u]] + total - 2 * sub[u]
    best = min(range(n), key=lambda i: (cost[i], i))
    return [best, cost[best]]
```

## Complexity

- Time: `O(n)`
- Space: `O(n)`
