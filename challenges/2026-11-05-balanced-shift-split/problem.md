# Balanced Shift Split

**Difficulty:** Hard
**Topic:** Dynamic Programming (Partition DP / Divide-and-Conquer Optimization)

## Description

A warehouse receives `n` crates in a fixed order. You are given `weights`,
where `weights[i]` is the weight of the `i`-th crate. The crates must be
handled by exactly `k` work shifts. Each shift handles one **non-empty,
contiguous block** of crates, and together the `k` blocks cover every crate
exactly once, in order.

The strain of a shift is the **square of the total weight** of the crates it
handles. For example, a shift handling crates of weight `2` and `3` has strain
`(2 + 3)^2 = 25`.

Return the minimum possible total strain (the sum over all `k` shifts) over all
valid ways to split the crates.

## Examples

**Example 1**

```
Input:  weights = [1,2,3,4], k = 2
Output: 52
```
Explanation: the three possible splits cost `1^2 + 9^2 = 82`,
`3^2 + 7^2 = 58`, and `6^2 + 4^2 = 52`. The last one is the cheapest.

**Example 2**

```
Input:  weights = [3,1,4,1,5], k = 3
Output: 66
```
Explanation: splitting into `[3,1] | [4,1] | [5]` costs `16 + 25 + 25 = 66`.
Alternatives such as `[3,1] | [4] | [1,5]` (68) or `[3] | [1,4] | [1,5]` (70)
are worse.

**Example 3**

```
Input:  weights = [0,0,5], k = 3
Output: 25
```
Explanation: every crate gets its own shift: `0 + 0 + 25 = 25`. Blocks must be
non-empty, so no cheaper arrangement exists.

## Constraints

- `1 <= k <= len(weights) <= 20000`
- `k <= 100`
- `0 <= weights[i] <= 1000`
- The answer fits in a signed 64-bit integer.

## Follow-up

The straightforward DP `dp[j][i] = min over p of dp[j-1][p] + (pre[i]-pre[p])^2`
takes `O(k * n^2)`, too slow here. The best split point for `dp[j][i]` never
moves left as `i` grows. Can you exploit that to reach `O(k * n log n)`? Can you
get `O(n * k)` or better with a convex hull trick?
