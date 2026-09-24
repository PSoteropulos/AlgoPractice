# Longest Balanced Staffing Window

**Difficulty:** Medium
**Topic:** Hashing

## Description

A warehouse logs one staffing change per minute during a shift. Each entry
in the array `changes` is an integer: a positive value means that many
workers clocked **in** during that minute, a negative value means that
many workers clocked **out**, and `0` means no change that minute.

A **balanced window** is a contiguous run of one or more minutes whose
values sum to exactly `0` — meaning the staff count at the end of the
window is identical to the staff count right before the window began.

Return the length of the **longest balanced window** in `changes`. If no
contiguous run sums to exactly `0`, return `0`.

## Examples

### Example 1

```
Input: changes = [3, -3, 4, -2, 2, -4]
Output: 6
```
**Explanation:** The entire array sums to `3 - 3 + 4 - 2 + 2 - 4 = 0`, so
the whole 6-minute shift is a balanced window. (The middle stretch
`[-2, 2]` is also balanced, but at length 2 it is shorter.)

### Example 2

```
Input: changes = [1, -1, 1, -1, 5]
Output: 4
```
**Explanation:** The first four minutes sum to `1 - 1 + 1 - 1 = 0`, giving
a balanced window of length 4. Including the final `5` breaks the balance,
and no longer balanced window exists.

### Example 3

```
Input: changes = [2, 3, -1]
Output: 0
```
**Explanation:** Every contiguous run — `[2]`, `[3]`, `[-1]`, `[2,3]`,
`[3,-1]`, `[2,3,-1]` — sums to a nonzero value, so no balanced window
exists and the answer is `0`.

## Constraints

- `1 <= changes.length <= 10^5`
- `-10^4 <= changes[i] <= 10^4`
- The running total of staff never needs to be validated as non-negative
  — treat `changes` as a plain integer array with no other invariants.

## Follow-up

Extend your solution to also return **one** longest balanced window as an
inclusive `[startIndex, endIndex]` pair (in addition to its length). What
bookkeeping does your hash map need beyond just tracking which prefix
sums have been seen?
