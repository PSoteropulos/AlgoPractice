# Exact Alarm Windows

**Difficulty:** Medium
**Topic:** Bit Manipulation

## Description

A building's monitoring panel takes one reading per minute. Each reading is a
non-negative integer `nums[i]` used as a bitmask: bit `b` is set when alarm `b`
was active during that minute (a reading of `0` means the minute was quiet).

For a non-empty contiguous window of readings `nums[l..r]`, the window's
**alarm set** is the bitwise OR of every reading in it — that is, the set of
alarms that fired at least once during the window.

Given the readings `nums` and a bitmask `target`, return the number of windows
`(l, r)` with `0 <= l <= r < n` whose alarm set is **exactly** `target`: every
alarm in `target` fired at least once in the window, and no alarm outside
`target` fired at all.

The answer can exceed `2^31 - 1`, so return it as a 64-bit integer.

## Examples

**Example 1**

```
Input:  nums = [1, 2, 3, 4], target = 3
Output: 4
```
Explanation: The windows whose OR is exactly `3` (binary `011`) are
`[1, 2]`, `[1, 2, 3]`, `[2, 3]` and `[3]`. Any window containing the `4`
(binary `100`) has bit 2 set, and `[1]` / `[2]` are each missing one of the
two required bits.

**Example 2**

```
Input:  nums = [5, 5, 5], target = 5
Output: 6
```
Explanation: Every one of the `3 * 4 / 2 = 6` windows has OR equal to `5`.

**Example 3**

```
Input:  nums = [0, 2, 0, 1], target = 2
Output: 4
```
Explanation: Quiet minutes (`0`) never change the OR. The qualifying windows
are `[0, 2]`, `[0, 2, 0]`, `[2]` and `[2, 0]`. Any window reaching the final
`1` picks up bit 0, which is not in `target`.

## Constraints

- `1 <= nums.length <= 10^5`
- `0 <= nums[i] <= 10^9`
- `0 <= target <= 10^9`

## Follow-up

The OR of a window can only gain bits as the window grows to the left. Use that
to solve the problem in `O(n log M)` time, where `M` is the largest value in
`nums`. Could you adapt the idea to count windows whose bitwise **AND** is
exactly `target`?
