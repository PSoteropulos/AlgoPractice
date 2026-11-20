# Strongest Median Streak

**Difficulty:** Hard
**Topic:** Binary Search (binary search on the answer, prefix sums)

## Description

A food festival records a crowd-energy score for each hour it runs. The
scores are given as an integer array `nums`, where `nums[i]` is the score for
hour `i`.

The organizers want to feature one **streak**: a contiguous block of hours
`nums[l..r]` that is **at least `k` hours long** (`r - l + 1 >= k`). A
streak's **strength** is its median:

- Sort the streak's scores in non-decreasing order. Call its length `len`.
- The median is the element at position `ceil(len / 2)`, counting from 1.

For an odd length, that's the middle element. For an even length, it's the
**smaller** of the two middle elements. For example, the median of
`[4, 8]` is `4`, and the median of `[1, 9, 2, 9]` (sorted `[1, 2, 9, 9]`) is
`2`.

Return the **greatest strength** of any streak with length at least `k`.

## Examples

**Example 1**

```
Input:  nums = [1, 2, 3, 2, 1], k = 3
Output: 2
```
Explanation: Every allowed streak has median `2`. For example, `[1, 2, 3]`
sorts to `[1, 2, 3]`, `[1, 2, 3, 2]` sorts to `[1, 2, 2, 3]` (position 2 is
`2`), and the whole array sorts to `[1, 1, 2, 2, 3]`. No streak of length 3
or more can have a median of `3`, since `3` appears only once. The answer is
**2**.

**Example 2**

```
Input:  nums = [5, 1, 8, 7, 2, 9], k = 2
Output: 7
```
Explanation: The streak `[8, 7]` sorts to `[7, 8]`, and its median is the
smaller middle, `7`. For a median of `8` or more, more than half of the
streak's scores would have to be at least `8`. The only such scores are `8`
and `9`, and they are not next to each other, so no streak of length 2 or
more qualifies. The answer is **7**.

**Example 3**

```
Input:  nums = [3, 9, 1, 9, 1, 9, 2], k = 4
Output: 9
```
Explanation: Every streak of exactly 4 hours has a median of at most `3`
(for example, `[3, 9, 1, 9]` sorts to `[1, 3, 9, 9]`, giving `3`). But longer
streaks are allowed too. The 5-hour streak `[9, 1, 9, 1, 9]` sorts to
`[1, 1, 9, 9, 9]`, giving a median of `9`. The answer is **9**.

## Constraints

- `1 <= k <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^9`

## Follow-up

Checking a single candidate median in `O(n)` is the key step. Can you get
the whole solution to `O(n log n)`? And what changes if the median of an
even-length streak is the **larger** of the two middle elements instead?
