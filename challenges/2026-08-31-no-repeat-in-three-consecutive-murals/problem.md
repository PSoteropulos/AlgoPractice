# No Repeat in Three Consecutive Murals

**Difficulty:** Medium
**Topic:** Dynamic Programming

## Description

A city corridor has `n` wall panels in a row, numbered `0` to `n - 1`. A local
art collective wants to paint every panel using one of `k` mural themes,
numbered `0` to `k - 1` (with `k >= 3`, so a valid painting is always
possible).

Painting panel `i` with theme `j` costs `cost[i][j]`, a positive integer.
You are given `cost` as an `n x k` grid.

To keep the corridor visually varied, the rule is: **no theme may repeat
among any 3 consecutive panels.** Formally, for every pair of panels `i < j`
with `j - i <= 2`, panels `i` and `j` must be painted with different themes.
(For `n <= 2` this just means adjacent panels must differ, since there is no
group of 3 consecutive panels yet.)

Return the minimum total cost to paint all `n` panels while satisfying this
rule.

## Examples

### Example 1

```
n = 3, k = 3
cost = [[1, 2, 3],
        [3, 2, 1],
        [2, 1, 3]]
Output: 3
```

**Explanation:** With `n = 3` and `k = 3`, panels 0, 1, and 2 are all within
distance 2 of each other, so they must use three *distinct* themes — a full
permutation of `{0, 1, 2}`. The cheapest permutation is panel 0 → theme 0,
panel 1 → theme 2, panel 2 → theme 1, costing `1 + 1 + 1 = 3`.

### Example 2

```
n = 4, k = 3
cost = [[1, 5, 3],
        [2, 9, 4],
        [5, 1, 2],
        [3, 6, 4]]
Output: 9
```

**Explanation:** Panels 0–2 must use a permutation of the 3 themes, and
panel 3 must differ from panels 1 and 2. Since there are only 3 themes
total, panel 3 is forced to reuse whichever theme panel 0 used. The cheapest
choice is panel 0 → theme 0, panel 1 → theme 2, panel 2 → theme 1, panel 3 →
theme 0, costing `1 + 4 + 1 + 3 = 9`.

### Example 3

```
n = 1, k = 3
cost = [[5, 2, 9]]
Output: 2
```

**Explanation:** With only one panel there is no adjacency constraint at
all, so we simply pick the cheapest theme for it: theme 1, costing `2`.

## Constraints

- `1 <= n <= 2000`
- `3 <= k <= 50`
- `1 <= cost[i][j] <= 10^4`
- `cost` has exactly `n` rows and `k` columns.

## Follow-up

Suppose the rule generalized to "no theme may repeat among any `m`
consecutive panels" for a given `m <= k`. How would your approach change,
and how would the time/space complexity scale with `m` and `k`?
