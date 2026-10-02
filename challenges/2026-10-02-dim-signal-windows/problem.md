# Dim Signal Windows

**Difficulty:** Medium
**Topic:** Bit Manipulation (with Hashing / Prefix XOR)

## Description

A radio telescope records a stream of readings in the array `nums`. Each
reading is a non-negative integer whose binary digits mark which of 30
frequency channels were active in that instant (bit `c` set means channel
`c` was active).

A *window* is a non-empty contiguous run of readings. Combining a window's
readings with bitwise XOR gives its *signature*. A window is called
**dim** if its signature has **at most one** bit set — that is, the
signature is `0` or an exact power of two.

Return the number of dim windows. Windows at different positions count
separately, even if they contain identical values.

## Examples

### Example 1

**Input:** `nums = [1, 2, 3]`

**Output:** `4`

**Explanation:** The six windows and their signatures are `[1] -> 1`,
`[2] -> 2`, `[3] -> 3`, `[1,2] -> 3`, `[2,3] -> 1`, `[1,2,3] -> 0`.
Signature `3` (binary `11`) has two bits set, so `[3]` and `[1,2]` are not
dim. The other four windows are.

### Example 2

**Input:** `nums = [5, 5, 5]`

**Output:** `2`

**Explanation:** Single readings and the full window have signature `5`
(binary `101`), which is not dim. Only the two windows `[5,5]` (starting at
index 0 and at index 1) have signature `0`.

### Example 3

**Input:** `nums = [0, 0]`

**Output:** `3`

**Explanation:** Every window has signature `0`: `[0]`, `[0]`, `[0,0]`.

## Constraints

- `1 <= len(nums) <= 2 * 10^5`
- `0 <= nums[i] < 2^30`
- The answer can exceed the 32-bit range; use 64-bit integers where your
  language needs them.

## Follow-up

Your solution probably does about 31 lookups per element. Can you explain
why that count does not depend on the array length? How would the approach
change if "dim" meant "at most two bits set"?
