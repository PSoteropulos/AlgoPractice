# Lantern Hub Placement

**Difficulty:** Hard
**Topic:** Trees (Rerooting DP)

## Description

A village's footpaths form a tree: there are `n` huts, numbered `0` to `n - 1`,
connected by `n - 1` two-way paths (every hut can reach every other hut, and
there are no loops). Each path has length `1`.

Hut `i` burns `weights[i]` lanterns per night. You will install a single supply
**hub** in one of the huts. Delivering the lanterns of hut `v` to the hub costs
`weights[v] * dist(hub, v)`, where `dist` is the number of paths on the unique
route between the two huts. (A hut that holds the hub itself pays nothing.)

The **total cost** of a hub location is the sum of this delivery cost over all
huts. You are given `n`, `edges` (where `edges[j] = [a, b]` means huts `a` and
`b` are joined by a path; the pairs may appear in any order) and `weights`.

Return `[hub, cost]`: the hut that gives the **minimum total cost**, and that
minimum cost. If several huts tie for the minimum cost, return the one with the
smallest index.

## Examples

**Example 1**

```
Input:  n = 5, edges = [[0,1],[0,2],[2,3],[2,4]], weights = [1,2,3,4,5]
Output: [2, 14]
```
Explanation: with the hub at hut 2, hut 0 is 1 away (cost 1), hut 1 is 2 away
(cost 4), hut 3 is 1 away (cost 4) and hut 4 is 1 away (cost 5): total 14.
Hub at hut 0 costs `0 + 2*1 + 3*1 + 4*2 + 5*2 = 23`, hut 1 costs `1*1 + 3*2 + 4*3 + 5*3
= 34`, hut 3 costs `1*2 + 2*3 + 3*1 + 5*2 = 21`, hut 4 costs `1*2 + 2*3 + 3*1 +
4*2 = 19`. Hut 2 is the cheapest.

**Example 2**

```
Input:  n = 4, edges = [[0,1],[1,2],[2,3]], weights = [1,0,0,1]
Output: [0, 3]
```
Explanation: the huts form a line. Every hub choice costs exactly 3 (for
example hub 1: `1*1 + 1*2 = 3`; hub 0: `1*3 = 3`), so the smallest index, 0,
is returned.

**Example 3**

```
Input:  n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[3,5]], weights = [0,0,0,0,0,0]
Output: [0, 0]
```
Explanation: no hut burns any lanterns, so every hub costs 0; return hut 0.

## Constraints

- `1 <= n <= 100000`
- `edges.length == n - 1`, and `edges` describes a valid tree
- `0 <= weights[i] <= 10000`
- The cost can reach about `10^14`; use 64-bit integers.
- The tree can be a long path, so deep recursion may overflow the stack in some
  languages.

## Follow-up

Can you do it in `O(n)` time with an iterative traversal (no recursion)?
