# Fewest Extra Tunnels — Reference Solution

## Approach

1. **Find the fragile tunnels (bridges)** with an iterative lowlink DFS.
   Track each tunnel by its *id*, not by its endpoint, so that a parallel
   tunnel back to the parent counts as a back edge (and the pair is not a
   bridge). A tree edge `p -> v` is a bridge iff `low[v] > tin[p]`.
2. **Contract each 2-edge-connected component** (flood fill over non-bridge
   tunnels). The components joined by bridges form a tree (the *bridge tree*).
3. **Count leaves** of that tree (components incident to exactly one bridge).
   Call it `L`. The answer is `ceil(L / 2)`, or `0` if there are no bridges.

Why `ceil(L / 2)`: every leaf needs at least one new tunnel endpoint, and a
tunnel has two endpoints, giving the lower bound. Pairing leaves up (far
apart ones first, a leftover leaf joined to anything) covers every tree edge
with a cycle, so the bound is achieved. It was also cross-checked against a
brute-force search on random small graphs.

## Complexity

- Time: O(n + m)
- Space: O(n + m)

## Code (Python)

```python
from typing import List


def min_extra_tunnels(n: int, tunnels: List[List[int]]) -> int:
    adj = [[] for _ in range(n)]
    for i, (a, b) in enumerate(tunnels):
        adj[a].append((b, i))
        adj[b].append((a, i))
    tin = [-1] * n
    low = [0] * n
    tin[0] = low[0] = 0
    timer = 1
    stack = [[0, -1, 0]]  # frames: [node, parent edge id, next adjacency index]
    bridges = []
    while stack:
        fr = stack[-1]
        v, pe, idx = fr
        if idx < len(adj[v]):
            fr[2] += 1
            u, eid = adj[v][idx]
            if eid == pe:
                continue
            if tin[u] == -1:
                tin[u] = low[u] = timer
                timer += 1
                stack.append([u, eid, 0])
            else:
                low[v] = min(low[v], tin[u])
        else:
            stack.pop()
            if stack:
                p = stack[-1][0]
                low[p] = min(low[p], low[v])
                if low[v] > tin[p]:
                    bridges.append(pe)
    if not bridges:
        return 0
    # label 2-edge-connected components by flood fill over non-bridge edges
    is_bridge = [False] * len(tunnels)
    for e in bridges:
        is_bridge[e] = True
    comp = [-1] * n
    c = 0
    for s in range(n):
        if comp[s] != -1:
            continue
        comp[s] = c
        st = [s]
        while st:
            v = st.pop()
            for u, eid in adj[v]:
                if not is_bridge[eid] and comp[u] == -1:
                    comp[u] = c
                    st.append(u)
        c += 1
    deg = [0] * c
    for e in bridges:
        a, b = tunnels[e]
        deg[comp[a]] += 1
        deg[comp[b]] += 1
    leaves = sum(1 for d in deg if d == 1)
    return (leaves + 1) // 2
```
