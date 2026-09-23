# Booster Network Merge Sizes

**Difficulty:** Medium
**Topic:** Union-Find (Disjoint Set Union)

## Description

A telecom crew is wiring up `n` signal boosters, numbered `0` through
`n - 1`. Initially every booster is its own isolated network (a network of
size `1`).

You are given `cables`, a list of `[a, b]` pairs, processed **in order**.
Installing a cable `[a, b]` permanently joins whichever network currently
contains booster `a` with whichever network currently contains booster `b`
(if they're already in the same network, the cable is redundant and
changes nothing).

After installing **each** cable, record the size (number of boosters) of
the network that now contains both `a` and `b`.

Return an array of length `cables.length`, where the `i`-th entry is the
network size recorded right after installing `cables[i]`.

Function signature: `booster_network_merge_sizes(n: int, cables: List[List[int]]) -> List[int]`

## Examples

### Example 1

```
Input:  n = 5, cables = [[0, 1], [1, 2], [3, 4], [2, 3]]
Output: [2, 3, 2, 5]
```

**Explanation:**
- `[0, 1]`: merges `{0}` and `{1}` into `{0, 1}` → size `2`.
- `[1, 2]`: merges `{0, 1}` and `{2}` into `{0, 1, 2}` → size `3`.
- `[3, 4]`: merges `{3}` and `{4}` into `{3, 4}` → size `2`.
- `[2, 3]`: merges `{0, 1, 2}` and `{3, 4}` into `{0, 1, 2, 3, 4}` → size `5`.

### Example 2

```
Input:  n = 3, cables = [[0, 1], [0, 1]]
Output: [2, 2]
```

**Explanation:** The first `[0, 1]` merges `{0}` and `{1}` into a
network of size `2`. The second `[0, 1]` is redundant — `0` and `1` are
already in the same network — so no merge happens, and the recorded size
is still that network's current size, `2`.

### Example 3

```
Input:  n = 4, cables = [[0, 1], [2, 3], [1, 3]]
Output: [2, 2, 4]
```

**Explanation:** `[0, 1]` → `{0, 1}` (size `2`). `[2, 3]` → `{2, 3}`
(size `2`, a separate network). `[1, 3]` merges the two existing
networks `{0, 1}` and `{2, 3}` into `{0, 1, 2, 3}` → size `4`.

## Constraints

- `1 <= n <= 10^5`
- `0 <= cables.length <= 2 * 10^5`
- `cables[i].length == 2`
- `0 <= cables[i][0], cables[i][1] < n`
- `cables[i][0] != cables[i][1]`

## Follow-up

Suppose you're also given a fixed threshold `T` up front. Can you extend
your solution to additionally return, after each cable installation, the
**number of distinct networks whose current size is `>= T`** — still
without exceeding `O((n + cables.length) * α(n))` total time (`α` being
the inverse Ackermann function)?
