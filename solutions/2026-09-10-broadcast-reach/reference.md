# Reference Solution: Broadcast Reach

## Approach

This is a direct application of graph traversal (BFS or DFS) on a directed
graph:

1. Build an adjacency list `adj` of size `n`, where `adj[u]` holds every
   tower `v` such that `[u, v]` is an edge. Duplicate edges are naturally
   harmless here — they just produce a duplicate entry in `adj[u]`, which
   the visited check below simply skips over on later encounters.
2. Run a BFS (or DFS) starting from `start`, marking `start` itself as
   visited before the loop begins (it always counts as reached).
3. For each node popped from the queue, walk its outgoing edges; for every
   neighbor not yet visited, mark it visited, increment a running count, and
   push it onto the queue.
4. Once the queue/stack is empty, the running count is the total number of
   distinct towers reached, because a `visited` array by construction
   prevents cycles from causing infinite loops or double-counting — a node
   is only enqueued and counted the first time it is discovered.

```python
from typing import List


def broadcast_reach(n: int, edges: List[List[int]], start: int) -> int:
    adj: List[List[int]] = [[] for _ in range(n)]
    for u, v in edges:
        adj[u].append(v)

    visited = [False] * n
    visited[start] = True
    queue = [start]
    count = 1
    while queue:
        node = queue.pop()
        for nxt in adj[node]:
            if not visited[nxt]:
                visited[nxt] = True
                count += 1
                queue.append(nxt)
    return count
```

### Worked check against the examples

- `n=6, edges=[[0,1],[0,2],[1,3],[2,3],[3,4]], start=0` → BFS/DFS from `0`
  discovers `1` and `2` directly, then `3` (reachable from both `1` and
  `2`, counted once), then `4` (from `3`). Tower `5` has no incoming edge in
  this component at all, so it's never enqueued. Reached: `{0,1,2,3,4}`,
  count `5`. ✓
- `n=4, edges=[[1,2],[2,3]], start=0` → `adj[0]` is empty, so the traversal
  never leaves `0`. Only `start` itself is counted: `1`. ✓
- `n=3, edges=[[0,1],[1,2],[2,0]], start=1` → from `1`, reach `2`, then `0`
  (from `2`), then the edge `[2,0]`... wait, from `0` the edge `[0,1]` points
  back to `1`, which is already visited, so it's skipped rather than
  re-counted or looped on forever. Reached: `{0,1,2}`, count `3`. ✓

Edge cases: with no edges at all (`n=1, edges=[]`), the traversal queue
starts and ends with just `start`, giving count `1`. With duplicate edges
(`[[0,1],[0,1],[1,2]]`), `adj[0]` contains `1` twice, but the second time
`1` is visited it's already marked, so it contributes nothing extra —
duplicates never inflate the count.

## Complexity

- **Time:** `O(n + m)`, where `m = edges.length` — building the adjacency
  list is `O(m)`, and the traversal visits each node at most once and each
  edge at most once.
- **Space:** `O(n + m)` for the adjacency list plus `O(n)` for the visited
  array and queue.

### Follow-up sketch

For many reachability queries from different starting towers, first
compute the graph's **strongly connected components (SCCs)** (e.g. via
Tarjan's or Kosaraju's algorithm, both `O(n + m)`), then condense the graph
into its **condensation DAG**, where each SCC becomes a single node. All
towers within the same SCC have *identical* reach sets, since each can
reach every other member of its own SCC and from there onward to the same
set of downstream SCCs — so the reach count only needs to be computed once
per SCC (e.g. via a topological-order DP over the condensation DAG that
accumulates downstream SCC sizes), and then every tower within that SCC
can answer its query in `O(1)` by looking up its SCC's precomputed reach
count. This turns `q` queries into a one-time `O(n + m)` preprocessing step
plus `O(1)` per query, instead of an `O(n + m)` traversal per query.
