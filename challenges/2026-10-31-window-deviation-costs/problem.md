# Window Deviation Costs

**Difficulty:** Hard
**Topic:** Heaps (Two Heaps, Sliding Window Median)

## Description

A weather station records an integer reading every minute and stores them in an
array `nums`. You are also given a window length `k`.

For any window of `k` consecutive readings, its **deviation cost** is the
smallest possible value of

```
|x1 - t| + |x2 - t| + ... + |xk - t|
```

where `x1..xk` are the readings in the window and `t` may be **any integer**
you choose (it does not have to be one of the readings).

Return an array of length `nums.length - k + 1` where entry `i` is the
deviation cost of the window `nums[i .. i + k - 1]`.

## Examples

**Example 1**

```
Input:  nums = [1, 3, 2, 6, 4], k = 3
Output: [2, 4, 4]
```
Explanation:
- `[1, 3, 2]`: best `t = 2`, cost `1 + 1 + 0 = 2`.
- `[3, 2, 6]`: best `t = 3`, cost `0 + 1 + 3 = 4`.
- `[2, 6, 4]`: best `t = 4`, cost `2 + 2 + 0 = 4`.

**Example 2**

```
Input:  nums = [5, 5, 5, 5], k = 2
Output: [0, 0, 0]
```
Explanation: every window holds two equal readings, so choosing `t = 5` gives 0.

**Example 3**

```
Input:  nums = [1, 10, 4, 7], k = 4
Output: [12]
```
Explanation: the only window sorted is `[1, 4, 7, 10]`. Any `t` from 4 to 7 is
optimal; with `t = 4` the cost is `3 + 0 + 3 + 6 = 12`.

## Constraints

- `1 <= k <= nums.length <= 100000`
- `-10^9 <= nums[i] <= 10^9`
- Costs can exceed 32 bits; use a 64-bit integer where your language needs one.

## Follow-up

Can you do it in `O(n log k)` time? What if you had to answer the same query
for a window length that changes from query to query?
