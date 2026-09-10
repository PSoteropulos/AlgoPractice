# Broadcast Reach

**Difficulty:** Easy
**Topic:** Graphs

## Description

A relay network has `n` towers, labeled `0` to `n - 1`. Some towers can
broadcast directly to other towers: this is described as a list of directed
`edges`, where `edges[i] = [u, v]` means tower `u` can send a broadcast
directly to tower `v` (but not necessarily the reverse — the link is
one-way).

A broadcast starts at a given tower `start`. Any tower that receives the
broadcast immediately re-broadcasts it along all of its own outgoing links.
This continues until no new tower receives it. A tower is considered
"reached" if it receives the broadcast, and `start` itself always counts as
reached (it originates the broadcast).

Given `n`, `edges`, and `start`, return the total number of distinct towers
that are reached, including `start`.

Notes:

- The graph may contain cycles — a broadcast can loop back to a tower that
  already received it, but that tower is only counted once.
- `edges` may contain duplicate pairs; treat duplicates as a single link.
- There are no self-loops (`u != v` for every edge).
- Not every tower needs to be reachable — towers with no incoming path from
  `start` are simply not counted.

## Examples

### Example 1

**Input:** `n = 6`, `edges = [[0,1],[0,2],[1,3],[2,3],[3,4]]`, `start = 0`

**Output:** `5`

**Explanation:** From `0` the broadcast reaches `1` and `2`, then `3` (from
either `1` or `2`), then `4` (from `3`). Tower `5` has no incoming link from
this reachable set, so it is never reached. Reached set: `{0,1,2,3,4}`, size
`5`.

### Example 2

**Input:** `n = 4`, `edges = [[1,2],[2,3]]`, `start = 0`

**Output:** `1`

**Explanation:** Tower `0` has no outgoing links at all, so the broadcast
never leaves it. Only `start` itself is reached: `{0}`.

### Example 3

**Input:** `n = 3`, `edges = [[0,1],[1,2],[2,0]]`, `start = 1`

**Output:** `3`

**Explanation:** The towers form a directed cycle. Starting at `1`, the
broadcast reaches `2`, then `0` (from `2`), then would reach `1` again from
`0`, but `1` was already reached, so it is not double-counted. Reached set:
`{0,1,2}`, size `3`.

## Constraints

- `1 <= n <= 10^4`
- `0 <= edges.length <= 2 * 10^4`
- `edges[i].length == 2`
- `0 <= u, v < n` and `u != v` for every `[u, v]` in `edges`
- `0 <= start < n`
- `edges` may contain duplicate pairs.

## Follow-up

Suppose instead of a single `start`, you were given `q` independent queries,
each asking for the reach count from a different starting tower, and
`q` could be as large as `n`. How would you avoid recomputing a fresh
traversal from scratch for every query? (Hint: think about what structure
the towers within a single directed cycle — or more generally, a strongly
connected component — share with each other.)
