# Relay Hop Budget

**Difficulty:** Hard
**Topic:** Graphs

## Description

A satellite network has `n` ground stations, labeled `0` to `n - 1`.
Mission control gives you a list of directed relay links: each link is
`[u, v, cost]`, meaning a signal can be forwarded directly from station
`u` to station `v`, consuming `cost` units of power. The same ordered
pair of stations may appear more than once in the list (redundant
hardware installed at different times), and each occurrence is a
distinct option with its own cost.

Every relay hop degrades signal integrity, so mission control caps any
single transmission at `maxHops` links — a signal may pass through at
most `maxHops` relays on its way from the source station to the
destination station.

Given `n`, the list of links `edges`, a source station `src`, a
destination station `dst`, and the hop budget `maxHops`, return the
**minimum total power cost** to relay a signal from `src` to `dst` using
no more than `maxHops` links. If no route from `src` to `dst` exists
within the hop budget, return `-1`.

## Examples

### Example 1

```
Input: n = 4, edges = [[0,1,100],[1,2,100],[0,2,500],[2,3,100],[1,3,300]],
       src = 0, dst = 3, maxHops = 2
Output: 400
```
**Explanation:** With at most 2 hops, the options reaching station 3 are
`0 -> 1 -> 3` (cost `100 + 300 = 400`) and `0 -> 2 -> 3`
(cost `500 + 100 = 600`). The cheaper is `400`.

### Example 2

```
Input: n = 4, edges = [[0,1,100],[1,2,100],[0,2,500],[2,3,100],[1,3,300]],
       src = 0, dst = 3, maxHops = 1
Output: -1
```
**Explanation:** There is no direct link `0 -> 3`, and with `maxHops = 1`
no multi-hop route is allowed either, so station 3 is unreachable.

### Example 3

```
Input: n = 4, edges = [[0,1,100],[1,2,100],[0,2,500],[2,3,100],[1,3,300]],
       src = 0, dst = 3, maxHops = 3
Output: 300
```
**Explanation:** With a bigger hop budget, `0 -> 1 -> 2 -> 3` becomes
available, costing `100 + 100 + 100 = 300` — cheaper than either
2-hop route from Example 1, so the larger budget lowers the answer.

## Constraints

- `2 <= n <= 500`
- `0 <= edges.length <= 5000`
- `edges[i] = [u, v, cost]` with `0 <= u, v < n`, `u != v`, and
  `1 <= cost <= 10^4`
- The same ordered pair `(u, v)` may appear in `edges` more than once.
- `0 <= src, dst < n` and `src != dst`
- `0 <= maxHops <= n - 1`

## Follow-up

Suppose some links are bandwidth rebates with a **negative** cost
(using them refunds power), and it's guaranteed the network has no
negative-cost cycle reachable from `src` within the hop budget. Does
your algorithm still return the correct minimum cost without any
changes? Explain why or why not, and identify which part of your
approach relies on (or is unaffected by) all costs being non-negative.
