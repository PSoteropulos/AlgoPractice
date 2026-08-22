# Longest Balanced Parity Subarray

**Difficulty:** Medium
**Topic:** Arrays / Prefix Sums

## Description

You are given an integer array `nums` and a non-negative integer `k`.

For any contiguous subarray, define its **balance** as the absolute difference
between the number of even values it contains and the number of odd values it
contains:

```
balance(subarray) = | count(even values) - count(odd values) |
```

Return the length of the **longest contiguous, non-empty subarray** of `nums`
whose balance is at most `k`. If no non-empty subarray has balance `<= k`,
return `0`.

Note that `0` counts as even.

## Examples

### Example 1

```
Input: nums = [1, 2, 3, 4, 5], k = 1
Output: 5
```
**Explanation:** The full array has 2 even values (2, 4) and 3 odd values
(1, 3, 5), so its balance is `|2 - 3| = 1`, which is `<= k`. No longer
subarray exists, so the answer is 5.

### Example 2

```
Input: nums = [2, 4, 6, 1, 3], k = 0
Output: 4
```
**Explanation:** The full array has 3 evens and 2 odds, balance `1 > 0`, so it
is not valid. The subarray `[4, 6, 1, 3]` has 2 evens and 2 odds, balance
`0 <= 0`, and length 4. No valid subarray of length 5 exists, so the answer
is 4.

### Example 3

```
Input: nums = [2, 4, 6, 8], k = 2
Output: 2
```
**Explanation:** Every value is even, so a subarray of length `L` has balance
exactly `L` (0 odds). We need `L <= k = 2`, so the longest valid subarray has
length 2 (any two elements). A subarray of length 3 would have balance 3,
which exceeds `k`.

## Constraints

- `1 <= nums.length <= 2000`
- `-10^9 <= nums[i] <= 10^9`
- `0 <= k <= nums.length`

## Follow-up

The straightforward approach runs in `O(n^2)` time, which is fine for the
constraints above. Can you find an `O(n log n)` (or better) solution? *Hint:
think about prefix sums where each element contributes `+1` for even and
`-1` for odd, and how the balance of a subarray relates to two prefix
values.*
