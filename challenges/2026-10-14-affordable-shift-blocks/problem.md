# Affordable Shift Blocks

**Difficulty:** Easy
**Topic:** Two Pointers / Sliding Window

## Description

A staffing agency pays a temp worker a fixed amount for each of several
consecutive shifts. You are given an integer array `pay`, where `pay[i]` is the
pay for the `i`-th shift, and an integer `budget`.

A **block** is a non-empty run of consecutive shifts `pay[l..r]` (with
`0 <= l <= r < pay.length`). Two blocks are different if their start or end
positions differ, even if their pay values are identical.

Return the number of blocks whose **total pay is at most `budget`**.

Note that the answer can exceed the range of a 32-bit integer.

## Examples

### Example 1

**Input:** `pay = [2, 1, 3]`, `budget = 3`

**Output:** `4`

**Explanation:**
- `[2]` = 2, `[1]` = 1, `[3]` = 3 are all within budget.
- `[2, 1]` = 3 is within budget.
- `[1, 3]` = 4 and `[2, 1, 3]` = 6 exceed the budget.
- Total: 4 blocks.

### Example 2

**Input:** `pay = [4, 5]`, `budget = 3`

**Output:** `0`

**Explanation:** Every single shift already costs more than 3, so no block
qualifies.

### Example 3

**Input:** `pay = [1, 1, 1, 1]`, `budget = 2`

**Output:** `7`

**Explanation:**
- Four blocks of length 1 (total 1 each).
- Three blocks of length 2 (total 2 each).
- Blocks of length 3 or 4 total 3 or 4, which exceed the budget.
- Total: 4 + 3 = 7 blocks.

## Constraints

- `1 <= pay.length <= 10^5`
- `1 <= pay[i] <= 10^4`
- `1 <= budget <= 10^9`

## Follow-up

Can you solve it in `O(pay.length)` time and `O(1)` extra space? What
property of `pay` makes a linear-time approach valid, and what would break if
`pay` could contain zero or negative values?
