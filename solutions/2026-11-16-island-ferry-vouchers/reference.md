# Island Ferry Vouchers — Reference Solution

## Approach

### 1. Leaving late never gets you there earlier

For one ride on a route with interval `p` and duration `d`, if you're on the
island at time `t`:

- scheduled ferry: you arrive at `ceil(t / p) * p + d`
- chartered (voucher): you arrive at `t + d`

Both are **non-decreasing in `t`**. Being on an island earlier can never make
you arrive later. This is the *FIFO* property of time-dependent graphs. It
means the earliest arrival at each place is all you need to track, so
Dijkstra's greedy "settle the smallest time first" rule still works, even
though edge costs depend on when you take them. It also means waiting on an
island is only ever useful for catching the next scheduled ferry, and the
`ceil` formula already covers that.

### 2. Vouchers are part of the state

How many vouchers you've used changes what you can do next, so a single
earliest time per island isn't enough. Arriving at island 5 at time 40 with
3 vouchers left can beat arriving at time 35 with none. Expand each island
into `k + 1` states `(island, used)` and run Dijkstra on that layered graph.
From `(u, used)` at time `t`, each route `u — v` gives:

- `(v, used)` at time `ceil(t / p) * p + d` (scheduled ride)
- `(v, used + 1)` at time `t + d`, if `used < k` (chartered ride)

The answer is the first time any state `(n - 1, *)` is popped from the
priority queue. Dijkstra pops states in order of time, so this is the
minimum over every voucher count. If the queue runs out first, return `-1`.

Why is greedy voucher use wrong? Take the chain in the self-checks:
`0 →(every 1) 1 →(every 9) 2 →(every 9) 3` with a slow direct `1 → 3`
(every 1). With one voucher, you can skip the first wait on the chain, but
you still hit the second one, so the direct route (time 6) wins. With two
vouchers, you can skip both waits and arrive at time 3. Because the voucher
count is part of the state, Dijkstra tries every placement without
enumerating them.

```python
import heapq
from typing import List


def earliest_arrival(n: int, ferries: List[List[int]], k: int) -> int:
    adj = [[] for _ in range(n)]
    for u, v, d, p in ferries:
        adj[u].append((v, d, p))
        adj[v].append((u, d, p))

    INF = float("inf")
    # dist[u][used] = earliest known time at island u having spent `used` vouchers
    dist = [[INF] * (k + 1) for _ in range(n)]
    dist[0][0] = 0
    pq = [(0, 0, 0)]  # (time, island, used)

    while pq:
        t, u, used = heapq.heappop(pq)
        if t > dist[u][used]:
            continue                      # stale entry
        if u == n - 1:
            return t                      # first pop of the target is optimal

        for v, d, p in adj[u]:
            # Scheduled ferry: wait for the next multiple of p.
            arrive = -(-t // p) * p + d
            if arrive < dist[v][used]:
                dist[v][used] = arrive
                heapq.heappush(pq, (arrive, v, used))
            # Charter: leave right now, spend one voucher.
            if used < k and t + d < dist[v][used + 1]:
                dist[v][used + 1] = t + d
                heapq.heappush(pq, (t + d, v, used + 1))

    return -1
```

## Pitfalls

- **Plain BFS/Dijkstra on `duration` alone** ignores waiting and gets
  Example 1 wrong. Durations alone rate `0 → 1 → 3` and `0 → 2 → 3`
  the same (5 each). With waits, they actually take 7 and 11, because the
  `2–3` ferry only leaves every 10 units.
- **One earliest time per island** (no voucher dimension) throws away slower
  arrivals that still have vouchers left, and those can win later.
- **Applying vouchers greedily** to the first long wait isn't optimal. See
  the two-wait chain above.
- `ceil(t / p)` with integers: use `-(-t // p)` in Python or
  `(t + p - 1) / p` in C-family languages.

## Complexity

Let `V = n * (k + 1)` states and `E = 2 * |ferries| * (k + 1) * 2`
relaxations (two directions, and a scheduled plus a charter option each).

- **Time:** `O((V + E) log V)`, about `O((n + m) * k * log(n * k))` for
  `m = |ferries|`. With the given limits that's roughly `10^6` heap
  operations at most.
- **Space:** `O(n * k + m)` for the distance table, adjacency list and heap.

## Follow-up note

Offsets (`offset + j * interval`) keep the next-departure function
non-decreasing, so the same Dijkstra works if you replace the `ceil` step
with "the smallest departure `>= t`". Dijkstra breaks when the FIFO property
fails. One example is a route where a later departure arrives *earlier*
(an express ferry leaving after a slow one). Then you'd have to model
departures as separate time-expanded events, or allow states to be
re-settled.
