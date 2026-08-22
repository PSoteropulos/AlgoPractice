# Longest Doubling Chain

**Difficulty:** Medium
**Topic:** Hashing

## Description

You are given an array of integers `nums`. A *doubling chain* is a sequence
of values `x, 2x, 4x, 8x, ...` (each term exactly double the previous one)
where **every value in the sequence must appear somewhere in `nums`** (the
positions don't matter, and duplicate entries in `nums` don't let you reuse
a value — the chain is built from the set of *distinct* values present).

The special case `x = 0` never extends: since `2 * 0 = 0`, a chain that
starts at `0` always has length exactly `1`, regardless of how many times
`0` appears in `nums`.

Return the length (number of terms) of the **longest** doubling chain that
can be formed using values from `nums`.

You must solve it in better than O(n²) time.

## Examples

**Example 1**

```
Input:  nums = [1, 2, 4, 8, 3, 10]
Output: 4
Explanation: The chain 1 -> 2 -> 4 -> 8 uses four distinct values that are
all present in nums, and 8 * 2 = 16 is not present, so it can't extend
further. No other value produces a longer chain (3 and 10 each start
chains of length 1, since 6 and 20 are absent).
```

**Example 2**

```
Input:  nums = [-2, -4, -8, -1]
Output: 4
Explanation: Doubling works the same way for negative numbers:
-1 -> -2 -> -4 -> -8 is a valid chain of length 4, since -1 * 2 = -2,
-2 * 2 = -4, and -4 * 2 = -8 are all present.
```

**Example 3**

```
Input:  nums = [0, 0, 5]
Output: 1
Explanation: 0 never extends a chain (its "double" is itself), so it
contributes a chain of length 1 no matter how many times it repeats. 5 is
odd and 10 is not present, so 5 also only contributes a chain of length 1.
The longest chain overall has length 1.
```

## Constraints

- `1 <= nums.length <= 10^5`
- `-10^9 <= nums[i] <= 10^9`

## Follow-up

Can you generalize your solution to take an integer `k` (instead of the
fixed multiplier `2`) and find the longest chain `x, k*x, k^2*x, ...`? What
changes if `k` can be `0` or `1`?
