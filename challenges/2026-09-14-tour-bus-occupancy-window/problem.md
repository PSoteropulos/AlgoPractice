# Tour Bus Occupancy Window

**Difficulty:** Medium
**Topic:** Two Pointers / Sliding Window

## Description

A sightseeing bus records how many passengers are aboard immediately after
each stop on its route, given as an integer array `occupancy` of length `n`
(`occupancy[i]` is the passenger count after the `i`-th stop).

The route planner wants to find the longest contiguous run of stops during
which occupancy stayed **steady**: the difference between the busiest stop
and the emptiest stop within that run must never exceed a given integer
`tolerance`.

A steady run only matters for reporting if the bus was actually well used at
some point during it — so the run must also contain at least one stop where
`occupancy[i] >= minPeak`. Runs that stay steady but never reach `minPeak`
(e.g. the bus idling nearly empty) don't count.

Return the length of the longest contiguous run of stops that satisfies
**both** conditions. If no run satisfies both, return `0`.

Formally: find the maximum length of a contiguous subarray
`occupancy[left..right]` such that:
1. `max(occupancy[left..right]) - min(occupancy[left..right]) <= tolerance`
2. `max(occupancy[left..right]) >= minPeak`

## Examples

### Example 1

```
Input: occupancy = [4, 6, 5, 7, 9, 8, 3], tolerance = 3, minPeak = 8
Output: 3
```
Explanation: The run `[7, 9, 8]` (stops at indices 3-5) has max 9, min 7, a
difference of 2 (<= 3), and includes 9 and 8, both >= 8. No longer run
satisfies both conditions — e.g. extending to index 6 (value 3) breaks the
tolerance, and extending to index 2 (value 5) also breaks it.

### Example 2

```
Input: occupancy = [2, 2, 2, 2], tolerance = 0, minPeak = 5
Output: 0
```
Explanation: Every run is perfectly steady (difference 0), but no stop ever
reaches an occupancy of 5, so no run qualifies.

### Example 3

```
Input: occupancy = [10, 10, 10, 10, 10], tolerance = 0, minPeak = 10
Output: 5
```
Explanation: The entire route is steady (difference 0) and every stop meets
the `minPeak` of 10, so the whole array is a valid run.

## Constraints

- `1 <= occupancy.length <= 10^5`
- `0 <= occupancy[i] <= 10^9`
- `0 <= tolerance <= 10^9`
- `0 <= minPeak <= 10^9`

## Follow-up

Can you solve it in `O(n)` time using two pointers together with a data
structure that supports maintaining the running max and min of the current
window in amortized `O(1)` per step? What would you change if `occupancy`
values could be updated one at a time after the initial answer was computed
(i.e. you had to answer the same query repeatedly as the array mutates)?
