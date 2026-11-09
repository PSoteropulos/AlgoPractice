# Triple-Balanced Delivery Run

**Difficulty:** Medium
**Topic:** Hashing

## Description

A courier company logs every parcel a driver handles during a shift as a string
`log`. Each character is one of `'A'`, `'B'`, or `'C'`, naming the parcel's
category, in the order the parcels were handled.

A stretch of the shift is called **triple-balanced** if it is a non-empty
contiguous piece of `log` in which the number of `'A'` parcels, the number of
`'B'` parcels, and the number of `'C'` parcels are all exactly equal.

Return the length of the **longest** triple-balanced stretch. If no stretch is
triple-balanced, return `0`.

## Examples

**Example 1**

```
Input:  log = "AAABCCB"
Output: 6
```
Explanation: The whole log has 3 A's, 2 B's and 2 C's, so it is not balanced.
Dropping the first character leaves `"AABCCB"` with 2 A's, 2 B's and 2 C's, which
is balanced and has length 6.

**Example 2**

```
Input:  log = "AABBAC"
Output: 3
```
Explanation: The stretch `"BAC"` (positions 3 to 5, zero-indexed) has one of each
category. No stretch of length 6 is balanced (the whole log has 3 A's, 2 B's, 1 C),
and none of the other length-3 stretches (`"AAB"`, `"ABB"`, `"BBA"`) is balanced.

**Example 3**

```
Input:  log = "AAAB"
Output: 0
```
Explanation: There is no `'C'` anywhere, and a stretch with zero C's can only be
balanced if it also has zero A's and zero B's, which would make it empty.

## Constraints

- `1 <= len(log) <= 200000`
- `log` consists only of the characters `'A'`, `'B'`, and `'C'`.

## Follow-up

Can you solve it in a single pass with `O(n)` expected time? How would you
generalize the idea to `k` categories?
