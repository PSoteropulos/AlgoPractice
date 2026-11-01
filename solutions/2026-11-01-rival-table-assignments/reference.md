# Rival Table Assignments — Reference Solution

## Approach

Seating guests at two tables with no rivals together is exactly a 2-coloring of
the rivalry graph. Within a connected component, fixing one guest's table
forces every other guest's table (rivals alternate), so a component is either
inconsistent (contains an odd cycle → answer `0`) or has exactly **2** valid
colorings (swap the tables). Components are independent, so the answer is
`2^c` modulo `1_000_000_007`, where `c` is the number of connected components
(isolated guests count as components).

Use an iterative BFS with a color array to avoid recursion limits on a
100000-guest path. Whenever an edge joins two same-colored guests, return `0`.

## Python

```python
from collections import deque
from typing import List

MOD = 1_000_000_007


def count_seatings(n: int, rivals: List[List[int]]) -> int:
    adj = [[] for _ in range(n)]
    for a, b in rivals:
        adj[a].append(b)
        adj[b].append(a)
    color = [-1] * n
    comps = 0
    for s in range(n):
        if color[s] != -1:
            continue
        comps += 1
        color[s] = 0
        q = deque([s])
        while q:
            u = q.popleft()
            for v in adj[u]:
                if color[v] == -1:
                    color[v] = color[u] ^ 1
                    q.append(v)
                elif color[v] == color[u]:
                    return 0
    return pow(2, comps, MOD)
```

## Complexity

- Time: O(n + m), where m = `len(rivals)`.
- Space: O(n + m) for the adjacency list and color array.

## Follow-up hint

Track the sizes (x, y) of the two color classes per component; each component
contributes either x to A and y to B or vice versa. Choosing orientations to
minimize the larger table is a subset-sum / partition problem over the
components' differences.
