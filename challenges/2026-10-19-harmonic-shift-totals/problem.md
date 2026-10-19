# Harmonic Shift Totals

**Difficulty:** Medium
**Topic:** Hashing (Prefix Sums)

## Description

A power station logs the net change in output for each hour of a long run as an
integer array `deltas` (positive for a rise, negative for a drop, `0` for no
change). A *segment* is a contiguous, non-empty stretch of hours.

The engineers call a segment **harmonic** when both of the following hold:

- it covers **at least two** hours, and
- the sum of its deltas is divisible by `k` (a sum of `0` counts as divisible).

Return the number of harmonic segments. Two segments are different if they
start or end at different positions, even if their values are identical.

## Examples

### Example 1

**Input:** `deltas = [4,5,0,-2,-3,1]`, `k = 5`

**Output:** `5`

**Explanation:** The harmonic segments (by 0-indexed positions) are `[1..2]`
(`5, 0` sums to 5), `[1..4]` (`5, 0, -2, -3` sums to 0), `[2..4]`
(`0, -2, -3` sums to -5), `[3..4]` (`-2, -3` sums to -5) and `[0..5]` (the whole
array sums to 5). The single hours `5` and `0` are divisible by 5 but are too
short to count.

### Example 2

**Input:** `deltas = [2,2,2]`, `k = 2`

**Output:** `3`

**Explanation:** Every segment sum is even. The three single-hour segments are
excluded, leaving `[0..1]`, `[1..2]` and `[0..2]`.

### Example 3

**Input:** `deltas = [-7,3,4,-5,5]`, `k = 5`

**Output:** `4`

**Explanation:** The harmonic segments are `[0..2]` (sum 0), `[0..3]` (sum -5),
`[0..4]` (sum 0) and `[3..4]` (sum 0).

## Constraints

- `1 <= deltas.length <= 10^5`
- `-10^9 <= deltas[i] <= 10^9`
- `1 <= k <= 10^9`

The answer can exceed the range of a 32-bit integer.

## Follow-up

Can you solve it in `O(n)` time? What changes if the minimum segment length
becomes a parameter `m` instead of `2`?
