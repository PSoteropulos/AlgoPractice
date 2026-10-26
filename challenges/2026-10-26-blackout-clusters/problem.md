# Blackout Clusters

**Difficulty:** Hard
**Topic:** Union-Find

## Description

A regional power grid has `n` towers numbered `0` to `n - 1`. Tower `i`
carries a load of `weights[i]` megawatts. Power lines are given as
`edges`, where each `edges[j] = [a, b]` is an undirected line joining towers
`a` and `b`. Duplicate lines may appear; there are no self-loops.

During a storm, every tower is shut down exactly once, one at a time, in the
sequence given by `order` (a permutation of `0..n-1`). When a tower is shut
down, it and all lines attached to it stop working.

A **cluster** is a maximal group of still-running towers that are connected
to each other through lines between running towers. The **cluster load** is
the sum of the weights of its towers.

Return an array `answer` of length `n`, where `answer[i]` is the largest
cluster load among the towers still running right after `order[0..i]` have
all been shut down. If no tower is left running, `answer[i]` is `0`.

## Examples

**Example 1**

```
Input:  weights = [4, 1, 3, 2], edges = [[0,1],[1,2],[2,3]], order = [1, 2, 0, 3]
Output: [5, 4, 2, 0]
```

Explanation: The grid is a path `0-1-2-3`.
- Shut down 1: clusters are `{0}` (load 4) and `{2,3}` (load 5) -> `5`.
- Shut down 2: clusters are `{0}` (4) and `{3}` (2) -> `4`.
- Shut down 0: only `{3}` (2) remains -> `2`.
- Shut down 3: nothing is running -> `0`.

**Example 2**

```
Input:  weights = [5, 5, 5], edges = [[0,1],[1,2],[0,2]], order = [0, 1, 2]
Output: [10, 5, 0]
```

Explanation: The three towers form a triangle. After shutting down 0, towers
1 and 2 are still joined (load 10). After shutting down 1, only tower 2
remains (5). After shutting down 2, nothing remains.

**Example 3**

```
Input:  weights = [2, 7, 1, 3, 6], edges = [[0,1],[1,2],[3,4]], order = [4, 0, 2, 1, 3]
Output: [10, 8, 7, 3, 0]
```

Explanation: Initially there are two clusters: `{0,1,2}` (load 10) and
`{3,4}` (load 9).
- Shut down 4: `{0,1,2}` (10) and `{3}` (3) -> `10`.
- Shut down 0: `{1,2}` (8) and `{3}` (3) -> `8`.
- Shut down 2: `{1}` (7) and `{3}` (3) -> `7`.
- Shut down 1: only `{3}` (3) -> `3`.
- Shut down 3: -> `0`.

## Constraints

- `1 <= n <= 10^5`
- `0 <= edges.length <= 2 * 10^5`
- `0 <= edges[j][0], edges[j][1] < n`, `edges[j][0] != edges[j][1]`
- `1 <= weights[i] <= 10^9`
- `order` is a permutation of `0..n-1`
- Cluster loads can exceed 32-bit range; use 64-bit integers where needed.

## Follow-up

Suppose instead each query asked for the **number** of clusters whose load is
at least a given threshold `T` after each shutdown. Can you still answer all
`n` steps in near-linear time? What would you need to maintain as clusters
merge?
