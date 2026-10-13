# Fewest Extra Tunnels

**Difficulty:** Hard
**Topic:** Graphs (bridges, 2-edge-connectivity)

## Description

An underground research station has `n` chambers numbered `0` to `n - 1`.
`tunnels[i] = [a, b]` is a two-way tunnel joining chambers `a` and `b`. The
station is **connected**: every chamber can reach every other chamber. Two
chambers may be joined by several parallel tunnels, but no tunnel joins a
chamber to itself.

A tunnel is **fragile** if its collapse alone would leave some pair of chambers
unable to reach each other. The safety board wants a station with no fragile
tunnels at all.

You may dig new two-way tunnels between any two **distinct** chambers,
including pairs that are already joined. Return the minimum number of new
tunnels needed so that, afterwards, the station has no fragile tunnel.

## Examples

**Example 1**

```
Input:  n = 5, tunnels = [[0,1],[0,2],[0,3],[0,4]]
Output: 2
```
Chamber 0 is a hub with four dead-end spokes; every tunnel is fragile. Dig
`1–2` and `3–4`: each spoke now lies on a cycle (`0-1-2-0` and `0-3-4-0`).
One tunnel cannot suffice, since it could cover at most two of the four spokes.

**Example 2**

```
Input:  n = 6, tunnels = [[0,1],[1,2],[2,0],[2,3],[3,4],[3,5]]
Output: 2
```
Chambers `{0,1,2}` form a loop, but `2–3`, `3–4` and `3–5` are fragile. The
three "ends" are the loop `{0,1,2}`, chamber 4 and chamber 5. Dig `4–0` and
`5–1`: now `2-3-4-0-…` and `2-3-5-1-…` give every tunnel a cycle. One tunnel
cannot protect all three ends.

**Example 3**

```
Input:  n = 4, tunnels = [[0,1],[1,2],[2,3],[3,0]]
Output: 0
```
The four chambers form a ring; no single collapse disconnects anything.

## Constraints

- `1 <= n <= 10^5`
- `n - 1 <= len(tunnels) <= 2 * 10^5`
- `tunnels[i].length == 2`, `0 <= a, b < n`, `a != b`
- The station is connected. Parallel tunnels are allowed.

## Follow-up

Solve it in `O(n + m)` time without recursion, so that a path of `10^5`
chambers does not overflow the call stack.
