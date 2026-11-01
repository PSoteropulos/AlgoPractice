# Rival Table Assignments

**Difficulty:** Medium
**Topic:** Graphs (Bipartite Check / Connected Components)

## Description

You are seating `n` guests, numbered `0` to `n - 1`, at two tables labeled
**A** and **B**. You are given a list `rivals`, where each entry `[a, b]` means
guests `a` and `b` are rivals and must **not** sit at the same table. The same
pair may be listed more than once, and `a != b` always holds.

Every guest sits at exactly one of the two tables, and either table may end up
empty. Two seatings are different if at least one guest sits at a different
table.

Return the number of valid seatings, modulo `1_000_000_007`. If no valid
seating exists, return `0`.

## Examples

**Example 1**

```
Input:  n = 4, rivals = [[0, 1], [1, 2]]
Output: 4
```
Explanation: guests 0, 1, 2 form a chain, so guest 1 must be at the opposite
table from guests 0 and 2: 2 choices (which table guest 1 uses). Guest 3 has no
rivals and may use either table: 2 choices. Total 2 * 2 = 4.

**Example 2**

```
Input:  n = 3, rivals = [[0, 1], [1, 2], [2, 0]]
Output: 0
```
Explanation: the three guests are mutual rivals, but only two tables exist, so
two of them must share one.

**Example 3**

```
Input:  n = 5, rivals = []
Output: 32
```
Explanation: with no restrictions each of the 5 guests independently picks a
table: 2^5 = 32.

## Constraints

- `1 <= n <= 100000`
- `0 <= rivals.length <= 200000`
- `rivals[i].length == 2`, `0 <= rivals[i][0], rivals[i][1] < n`, `rivals[i][0] != rivals[i][1]`
- Prefer an iterative traversal; the rivalry graph can form a path of 100000 guests.

## Follow-up

Instead of counting seatings, return the minimum possible size of the larger
table over all valid seatings (or `-1` if impossible). What extra step is needed
once you know each component's two sides?
