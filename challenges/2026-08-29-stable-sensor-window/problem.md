# Stable Sensor Window

**Difficulty:** Medium
**Topic:** Two Pointers / Sliding Window

## Description

A weather station records one integer temperature reading per minute in an
array `readings`, where `readings[i]` is the reading taken at minute `i`
(readings can be negative). The station also has a fixed `tolerance` value.

A contiguous span of minutes `[left, right]` is called **stable** if the
difference between the highest and the lowest reading recorded during that
span is at most `tolerance`, i.e. `max(readings[left..right]) -
min(readings[left..right]) <= tolerance`.

Given `readings` and `tolerance`, return the length (number of minutes) of
the longest stable span. If `readings` is empty, return `0`.

## Examples

**Example 1**

```
Input:  readings = [4, 8, 5, 1, 7, 9], tolerance = 4
Output: 3
```

Explanation: The span `[4, 8, 5]` (minutes 0-2) has max `8` and min `4`,
a difference of `4`, which is within tolerance, giving length `3`. Every
longer span contains either the `1` or the `9`, which pushes the
max-min gap above `4` when combined with the rest of the array (for
example `[8, 5, 1]` has a gap of `7`, and `[7, 9]` combined with anything
before it also breaks the bound).

**Example 2**

```
Input:  readings = [5, 2, 2, 3, 9, 1], tolerance = 3
Output: 4
```

Explanation: The span `[5, 2, 2, 3]` (minutes 0-3) has max `5` and min `2`,
a difference of `3`, which is within tolerance, giving length `4`. Extending
it to include the `9` at minute 4 would make the gap `7`, which is too
large, and no other span in the array reaches length `4` while staying
within tolerance.

**Example 3**

```
Input:  readings = [3, 3, 3, 3, 3, 3], tolerance = 0
Output: 6
```

Explanation: Every reading is identical, so the max-min gap of the entire
array is `0`, which satisfies a tolerance of `0`. The whole array is one
stable span.

## Constraints

- `0 <= readings.length <= 10^5`
- `-10^4 <= readings[i] <= 10^4`
- `0 <= tolerance <= 2 * 10^4`

## Follow-up

A brute-force approach checks every span and recomputes its max and min
from scratch, which costs `O(n^2)` (or `O(n^2 log n)` if you sort each
span). Design an algorithm that runs in `O(n)` time overall — as the right
end of the window advances one step at a time, you should never have to
re-scan an entire span to find its current max or min. (Hint: maintain two
monotonic deques of indices — one that always yields the max of the
current window at its front, one that always yields the min — and shrink
the window from the left only when the gap between those two fronts
exceeds `tolerance`.)
