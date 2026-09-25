# Reference Solution: Relay Hop Budget

## Approach

This is a **bounded Bellman-Ford** (a hop-limited shortest-path relaxation),
the same pattern behind "cheapest flights within K stops."

Plain Dijkstra doesn't fit here because it optimizes for cheapest cost
*regardless* of hop count — it has no notion of "at most `maxHops` edges."
Instead, track the best cost to reach every station using **exactly** `h`
hops, for `h` from `0` up to `maxHops`, and take the best over all `h` in
that range (equivalently, keep carrying forward each station's best cost
so far so "fewer than `maxHops` hops" is automatically covered).

1. `dist[v]` = minimum cost to reach station `v` using the hops processed
   so far. Initialize `dist[src] = 0` and everything else to infinity.
2. Repeat `maxHops` times ("one more hop allowed"):
   - Start `newDist` as a **copy** of `dist` (a station keeps its best
     cost from using *fewer* hops if that's already optimal — you are
     never forced to spend the whole budget).
   - For every link `(u, v, cost)`, if `dist[u] + cost < newDist[v]`,
     update `newDist[v] = dist[u] + cost`.
   - Set `dist = newDist` and move to the next hop.

   Crucially, relaxation in each round reads only the *previous* round's
   `dist` (not `newDist`), so a single round only ever extends a path by
   exactly one more edge — this is what enforces the hop cap. (Plain
   Bellman-Ford relaxes in place and lets a value ripple through several
   edges within one round; that would let a "round" silently use more than
   one hop and break the budget.)
3. After `maxHops` rounds, `dist[dst]` is the answer, or `-1` if it's still
   infinity.

```python
def min_relay_cost(n, edges, src, dst, max_hops):
    INF = float("inf")
    dist = [INF] * n
    dist[src] = 0
    for _ in range(max_hops):
        new_dist = dist[:]
        for u, v, cost in edges:
            if dist[u] + cost < new_dist[v]:
                new_dist[v] = dist[u] + cost
        dist = new_dist
    return dist[dst] if dist[dst] != INF else -1
```

### Worked check against the examples

Using `edges = [[0,1,100],[1,2,100],[0,2,500],[2,3,100],[1,3,300]]`,
`src = 0`:

- **Round 1** (1 hop used): `dist = [0, 100, 500, inf]` — only stations
  directly reachable from `0` get updated (`1` via cost `100`, `2` via
  cost `500`).
- **Round 2** (2 hops used): `dist = [0, 100, 200, 400]` — station `2`
  improves to `100 + 100 = 200` via `0 -> 1 -> 2`; station `3` becomes
  reachable at `100 + 300 = 400` via `0 -> 1 -> 3` (cheaper than
  `500 + 100 = 600` via `0 -> 2 -> 3`).
- **Round 3** (3 hops used): `dist = [0, 100, 200, 300]` — station `3`
  improves again to `200 + 100 = 300` via `0 -> 1 -> 2 -> 3`.

So:
- `maxHops = 2` → `dist[3]` after round 2 = `400` ✓ (Example 1)
- `maxHops = 1` → `dist[3]` after round 1 = `inf` → `-1` ✓ (Example 2)
- `maxHops = 3` → `dist[3]` after round 3 = `300` ✓ (Example 3)

This also shows the answer only ever improves (or stays the same) as
`maxHops` grows, matching the intuition that a bigger hop budget can only
unlock cheaper routes, never remove existing ones.

## Complexity

- **Time:** `O(maxHops * E)`, where `E = edges.length` — each of the
  `maxHops` rounds scans every edge once.
- **Space:** `O(n)` for the two `dist` / `newDist` arrays (aside from the
  input itself).

### Follow-up sketch

Yes — the algorithm is unaffected by negative edge costs as long as the
hop budget never lets a signal loop around a negative-cost cycle (which
the problem's guarantee rules out). Nothing in the relaxation step
(`if dist[u] + cost < newDist[v]`) assumes `cost >= 0`; that assumption
only matters for algorithms like Dijkstra that greedily finalize a
station's distance the first time they visit it (assuming no cheaper
route could ever appear later). This bounded Bellman-Ford never
"finalizes" anything early — every station's distance stays open to
improvement in every remaining round — so it handles negative costs
correctly by construction, provided the round count (`maxHops`) stays
small enough that a negative cycle can't be traversed enough times to
drive the cost toward `-infinity`.
