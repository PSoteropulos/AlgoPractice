# One Free Toll Road — Reference Solution

## Approach

This is a **layered Dijkstra** problem: the toll pass being spent or not is
an extra bit of state on top of "which city am I in," so instead of
searching over `n` states we search over `2n` states — `(city, passUsed)`.

1. Build a weighted undirected adjacency list from `roads`.
2. Track `dist[city][used]`, the cheapest cost to reach `city` having
   already spent the pass (`used = 1`) or not (`used = 0`). Initialize
   `dist[src][0] = 0` and everything else to infinity.
3. Run Dijkstra with a min-heap of `(cost, city, used)`. When relaxing an
   edge `(u, v, w)` from a popped state `(d, u, used)`:
   - **Pay normally:** try `d + w` for `(v, used)` — the pass state doesn't
     change.
   - **Spend the pass here** (only if `used == 0`): try `d + 0` for
     `(v, 1)` — this road is crossed for free, and the pass is now spent
     for the rest of the trip.
   Push any state whose distance improves.
4. The answer is `min(dist[dst][0], dist[dst][1])` — the best cost to
   reach `dst` whether or not the pass ended up being used. If both are
   still infinity, return `-1`.

```python
import heapq

def one_free_toll_road(n, roads, src, dst):
    adj = [[] for _ in range(n)]
    for u, v, w in roads:
        adj[u].append((v, w))
        adj[v].append((u, w))

    INF = float("inf")
    dist = [[INF, INF] for _ in range(n)]
    dist[src][0] = 0
    heap = [(0, src, 0)]

    while heap:
        d, u, used = heapq.heappop(heap)
        if d > dist[u][used]:
            continue
        for v, w in adj[u]:
            nd = d + w
            if nd < dist[v][used]:
                dist[v][used] = nd
                heapq.heappush(heap, (nd, v, used))
            if used == 0 and d < dist[v][1]:
                dist[v][1] = d
                heapq.heappush(heap, (d, v, 1))

    ans = min(dist[dst][0], dist[dst][1])
    return ans if ans < INF else -1
```

## Why this is correct

- Splitting each city into two states (`used = 0` and `used = 1`) turns
  the problem back into an ordinary non-negative-weight shortest-path
  search on a `2n`-node graph: from `(u, 0)` you can move to `(v, 0)` by
  paying `w`, or to `(v, 1)` by paying `0`; from `(u, 1)` you can only move
  to `(v, 1)` by paying `w` (the pass is already gone). Dijkstra is exactly
  correct on this expanded graph because all edge weights are
  non-negative.
- Once a state `(u, used)` is popped from the heap with its final
  (smallest) distance, every edge out of it is relaxed exactly once with
  that optimal cost, so both "spend the pass on this edge" and "don't"
  are considered at every point along every possible route — nothing is
  missed by only tracking one flat `dist[city]` array.
- Taking the minimum of `dist[dst][0]` and `dist[dst][1]` at the end
  correctly captures "use the pass at most once": the `used = 0` slot is
  exactly the best cost that never spends it, and `used = 1` is the best
  cost across every route and every choice of which single road to make
  free.

## Complexity

- **Time:** O((n + m) log n), where `m = roads.length`. The expanded
  graph has `2n` nodes and `O(m)` edges per layer (each original edge
  contributes at most one intra-layer and one cross-layer relaxation), so
  this is the same asymptotic cost as ordinary Dijkstra on a graph of
  this size.
- **Space:** O(n + m) for the adjacency list, the `2 × n` distance table,
  and the heap.
