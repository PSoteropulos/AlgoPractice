# Redundant Park Trails

**Difficulty:** Easy
**Topic:** Union-Find (Disjoint Set Union / Cycle Detection)

## Description

A new nature park has `n` clearings, numbered `0` to `n - 1`. At first there
are no trails at all. The park crew then builds trails one at a time, in the
order given by the array `trails`, where `trails[i] = [a, b]` is a two-way
trail between clearings `a` and `b`.

When trail `i` is built, the crew calls it **redundant** if, just before it
was built, a hiker could already walk from `a` to `b` using only trails built
earlier (trails `0` through `i - 1`). A trail whose two ends are the same
clearing (`a == b`) is always redundant, and so is a trail that duplicates one
already built.

Return the indices of all redundant trails, in increasing order. If no trail
is redundant, return an empty list.

Note that redundancy is judged at the moment each trail is built: the order of
`trails` matters, and a trail is never re-labelled later.

## Examples

**Example 1**

```
Input:  n = 4, trails = [[0,1],[1,2],[0,2],[3,3],[2,3]]
Output: [2,3]
```
Explanation:
- Trail 0 joins `0` and `1`, and trail 1 joins `1` and `2`, so `{0,1,2}` are
  now connected.
- Trail 2 (`0`–`2`) is redundant: the walk `0 -> 1 -> 2` already existed.
- Trail 3 (`3`–`3`) is a loop back to the same clearing, so it is redundant.
- Trail 4 (`2`–`3`) is the first trail to reach clearing `3`, so it is not
  redundant.

**Example 2**

```
Input:  n = 3, trails = [[0,1],[1,0],[0,1]]
Output: [1,2]
```
Explanation: Trail 0 connects `0` and `1`. Trails 1 and 2 join the same pair
of clearings again (the direction in which a pair is listed does not matter),
so both are redundant.

**Example 3**

```
Input:  n = 6, trails = [[0,1],[2,3],[4,5],[1,2],[3,4]]
Output: []
```
Explanation: Each trail links two clearings that were not yet reachable from
one another. After all five trails are built the park forms a single path
`0-1-2-3-4-5` and no trail was redundant.

## Constraints

- `1 <= n <= 10^5`
- `0 <= trails.length <= 2 * 10^5`
- `trails[i].length == 2`
- `0 <= trails[i][0], trails[i][1] < n`

## Follow-up

Without tracking indices, the **number** of redundant trails can be computed
from just `n`, `trails.length`, and the final number of connected groups of
clearings. Can you derive that formula — and explain why it holds no matter in
which order the trails are built?
