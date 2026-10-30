# Matching Lantern Rows

**Difficulty:** Medium
**Topic:** Stacks / Queues (Monotonic Stack)

## Description

A festival street has `n` lanterns in a line. You are given an integer array
`heights`, where `heights[i]` is the height of the lantern at position `i`.

A **viewing row** is a contiguous segment of lanterns `heights[l..r]`
(with `l <= r`) that satisfies both rules:

1. The first and last lanterns of the segment have exactly the same height
   (`heights[l] == heights[r]`).
2. No lantern anywhere inside the segment is taller than that height.

A segment made of a single lantern always counts as a viewing row.

Return the total number of viewing rows. Segments are distinguished by their
positions `(l, r)`, not by their contents.

## Examples

**Example 1**

```
Input:  heights = [3, 1, 3]
Output: 4
```
Explanation: the three single lanterns count, plus the whole segment `[3, 1, 3]`
(ends are both 3 and the middle lantern, 1, is not taller). Total 4.

**Example 2**

```
Input:  heights = [1, 4, 3, 3, 2]
Output: 6
```
Explanation: five single lanterns, plus positions `(2, 3)` = `[3, 3]`. No other
segment has equal ends. Total 6.

**Example 3**

```
Input:  heights = [5, 1, 6, 5]
Output: 4
```
Explanation: the two 5s at positions 0 and 3 have the 6 between them, which is
taller than 5, so that segment is invalid. Only the 4 single lanterns count.

## Constraints

- `1 <= heights.length <= 100000`
- `1 <= heights[i] <= 10^9`
- The answer can exceed 32 bits; use a 64-bit integer where your language needs one.

## Follow-up

Can you solve it in a single pass with O(n) time? What changes if rule 2 is
relaxed so the interior must be strictly shorter than the ends?
