# Plateau Peak Total

**Difficulty:** Easy
**Topic:** Arrays / Strings

## Description

A trail sensor records the elevation at each checkpoint along a path, giving
an integer array `h`. Consecutive checkpoints with equal elevation form a
**plateau**: a maximal run of equal values (a single checkpoint with different
neighbors on both sides is a plateau of length 1).

A plateau is a **peak plateau** if its elevation is strictly higher than the
elevation of the plateau immediately before it **and** strictly higher than
the plateau immediately after it. A plateau at either end of the array has
only one neighbor, and that missing neighbor imposes no condition. If the
whole array is a single plateau, it has no neighbors and counts as a peak
plateau.

Return the **total number of checkpoints** that lie inside peak plateaus.

## Examples

### Example 1

**Input:** `h = [1, 3, 3, 2, 2, 5, 4, 4, 4]`

**Output:** `3`

**Explanation:** The plateaus are `[1]`, `[3, 3]`, `[2, 2]`, `[5]`, `[4, 4, 4]`.
`[3, 3]` is higher than both `1` and `2`, and `[5]` is higher than both `2` and
`4`. The first plateau `[1]` is lower than `3`, and `[4, 4, 4]` is lower than
`5`. Peak plateaus contribute `2 + 1 = 3` checkpoints.

### Example 2

**Input:** `h = [7, 7, 7]`

**Output:** `3`

**Explanation:** There is a single plateau with no neighbors, so it is a peak
plateau containing 3 checkpoints.

### Example 3

**Input:** `h = [1, 2, 3, 4]`

**Output:** `1`

**Explanation:** Every plateau has length 1. Only the last one (`4`) is higher
than its only neighbor, so only it is a peak.

## Constraints

- `1 <= h.length <= 10^5`
- `-10^9 <= h[i] <= 10^9`

## Follow-up

Solve it in a single pass with O(1) extra space, without building a list of
plateaus. Then, how would you also return the longest peak plateau's start
index?
