# One Free Toll Road

**Difficulty:** Hard
**Topic:** Graphs (weighted shortest path)

## Description

A road network connects `n` cities, labeled `0` to `n - 1`. You are given
`roads`, a list of `[u, v, w]` triples, each describing a two-way road
between cities `u` and `v` with a non-negative toll cost `w`. There can be
more than one road between the same pair of cities.

You start in city `src` and want to reach city `dst`. You also hold a
**single toll pass**: at most once during your entire trip, you may choose
to cross one specific road you are currently traveling on without paying
its toll. Using the pass is optional, applies to exactly one road traversal
if used at all, and once spent it cannot be used again for the rest of the
trip. Every other road you cross must be paid for at its listed cost.

Return the minimum total cost of a trip from `src` to `dst`. If `dst`
cannot be reached from `src` (even using the pass), return `-1`.

## Examples

**Example 1**

```
Input:  n = 4, roads = [[0,1,3],[1,2,3],[2,3,3],[0,2,8]], src = 0, dst = 3
Output: 3
```

Explanation: Two routes exist from `0` to `3`: `0-1-2-3` (cost `3+3+3=9`)
and `0-2-3` (cost `8+3=11`). Taking `0-2-3` and using the toll pass on the
`0-2` road (cost `8`) makes that crossing free, for a total of `0 + 3 = 3`.
No other route-and-pass combination beats this (e.g. using the pass on any
single road of `0-1-2-3` only brings it down to `9 - 3 = 6`), so `3` is the
minimum.

**Example 2**

```
Input:  n = 4, roads = [[0,1,3],[1,2,3],[2,3,3],[0,2,8]], src = 0, dst = 2
Output: 0
```

Explanation: Taking the direct `0-2` road and using the toll pass on it
costs `0`. The alternative route `0-1-2` costs `3 + 3 = 6` normally, and at
best `6 - 3 = 3` with the pass applied to one of its roads — worse than
`0`, so the minimum overall is `0`.

**Example 3**

```
Input:  n = 5, roads = [[0,1,2],[2,3,4]], src = 0, dst = 4
Output: -1
```

Explanation: City `4` has no roads at all, so it is unreachable from `0`
regardless of how the toll pass is used.

## Constraints

- `1 <= n <= 10^4`
- `0 <= roads.length <= 2 * 10^4`
- `roads[i] = [u, v, w]` with `0 <= u, v < n`, `u != v`, `0 <= w <= 10^4`
- `0 <= src, dst < n`
- If `src == dst`, the answer is always `0`.

## Follow-up

The approach above effectively runs a shortest-path search over `2n`
states — each city paired with whether the pass has been spent yet. Can
you extend the idea to `k` free crossings instead of just one, using
`O(k)` states per city, without materializing the full expanded graph up
front? What is the resulting time complexity in terms of `n`, the number
of roads `m`, and `k`?
