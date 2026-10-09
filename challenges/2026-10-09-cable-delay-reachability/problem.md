# Cable Delay Reachability

**Difficulty:** Medium
**Topic:** Union-Find

## Description

A campus network has `n` depots numbered `0` to `n - 1`. You are given a list
`cables`, where `cables[i] = [a, b, delay]` describes a two-way cable between
depots `a` and `b` with the given `delay`. Several cables may connect the same
pair of depots, and a cable may connect a depot to itself.

You are also given a list `queries`, where `queries[j] = [u, v, limit]` asks:
is there a route from depot `u` to depot `v` in which **every** cable used has
a delay **strictly less than** `limit`? A route of zero cables (when `u == v`)
always qualifies.

Return a boolean list `answer` of the same length as `queries`, where
`answer[j]` is the result for `queries[j]`. Queries are independent of each
other and may appear in any order.

## Examples

### Example 1

**Input:** `n = 5`, `cables = [[0,1,4],[1,2,6],[2,3,2],[3,4,9]]`,
`queries = [[0,2,7],[0,2,6],[0,4,10],[2,3,3],[3,3,1]]`

**Output:** `[true, false, true, true, true]`

**Explanation:**
- `[0,2,7]`: cables with delay 4 and 6 are both below 7, so `0-1-2` works.
- `[0,2,6]`: the cable `1-2` has delay 6, which is not strictly below 6.
- `[0,4,10]`: all delays (4, 6, 2, 9) are below 10.
- `[2,3,3]`: the direct cable has delay 2, below 3.
- `[3,3,1]`: same depot, so the empty route qualifies.

### Example 2

**Input:** `n = 4`, `cables = [[0,1,5],[0,1,1],[2,3,3]]`,
`queries = [[0,1,1],[0,1,2],[1,2,100],[2,3,4]]`

**Output:** `[false, true, false, true]`

**Explanation:**
- `[0,1,1]`: no cable has delay below 1.
- `[0,1,2]`: the second cable between 0 and 1 has delay 1, below 2.
- `[1,2,100]`: depots `{0,1}` and `{2,3}` are never connected.
- `[2,3,4]`: delay 3 is below 4.

### Example 3

**Input:** `n = 3`, `cables = []`,
`queries = [[1,1,1],[0,2,1000000000]]`

**Output:** `[true, false]`

**Explanation:** With no cables, only a depot reaching itself succeeds.

## Constraints

- `1 <= n <= 10^5`
- `0 <= cables.length <= 10^5`
- `1 <= queries.length <= 10^5`
- `0 <= a, b, u, v < n`
- `1 <= delay, limit <= 10^9`

## Follow-up

Suppose the queries arrive one at a time and you must answer each before
seeing the next (no sorting them offline). Can you still answer each query in
about `O(log n)` after preprocessing the cables?
