# Calm Reading Stretches

**Difficulty:** Medium
**Topic:** Two Pointers / Sliding Window (Monotonic Deques)

## Description

A weather station records one sensor reading per minute. You are given an
integer array `readings`, where `readings[i]` is the value recorded at minute
`i`, and a non-negative integer `tolerance`.

A **stretch** is a non-empty run of consecutive minutes, i.e. a contiguous
subarray of `readings`. A stretch is **calm** if the difference between its
largest and smallest reading is at most `tolerance`.

Return the number of calm stretches. Stretches are counted by position, so two
stretches with identical values at different positions are counted separately.

## Examples

**Example 1**

```
Input:  readings = [1,3,2,5], tolerance = 1
Output: 5
```
Explanation: the four single-minute stretches are always calm. Of the longer
ones, only `[3,2]` (difference 1) qualifies. `[1,3]`, `[2,5]`, `[1,3,2]`,
`[3,2,5]` and `[1,3,2,5]` all have a difference of at least 2. Total: 4 + 1 = 5.

**Example 2**

```
Input:  readings = [4,4,4], tolerance = 0
Output: 6
```
Explanation: every stretch has difference 0: three of length 1, two of length 2,
and one of length 3.

**Example 3**

```
Input:  readings = [2,5,3,4,8], tolerance = 2
Output: 8
```
Explanation: five single-minute stretches, plus `[5,3]` (diff 2), `[3,4]`
(diff 1) and `[5,3,4]` (diff 2). Anything touching `2` with a neighbour, or
touching `8`, exceeds the tolerance. Total: 5 + 3 = 8.

## Constraints

- `1 <= len(readings) <= 100000`
- `0 <= readings[i] <= 10^9`
- `0 <= tolerance <= 10^9`
- The answer can exceed the range of a 32-bit integer.

## Follow-up

A brute-force check of every stretch is `O(n^2)` or worse. Can you count in
`O(n)` total time? Think about why, once a stretch is calm, every sub-stretch of
it is calm too, and how to track the window's max and min as it slides.
