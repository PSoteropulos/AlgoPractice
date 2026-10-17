# Next Higher Tide Gauge

**Difficulty:** Easy
**Topic:** Stacks / Queues

## Description

A harbour master records the peak water level of each day in an integer array
`levels`, where `levels[i]` is the peak level (in centimetres) on day `i`.

For every day `i`, work out how many days you must wait until a day with a
**strictly higher** peak level than `levels[i]` occurs. Formally, the answer for
day `i` is `j - i`, where `j` is the smallest index with `j > i` and
`levels[j] > levels[i]`. If no such day exists, the answer for day `i` is `0`.

Return an array `waits` of the same length as `levels`, where `waits[i]` is the
answer for day `i`.

## Examples

### Example 1

**Input:** `levels = [3,1,4,1,5]`

**Output:** `[2,1,2,1,0]`

**Explanation:** Day 0 (level 3) waits until day 2 (level 4): 2 days. Day 1
(level 1) waits until day 2: 1 day. Day 2 (level 4) waits until day 4
(level 5): 2 days. Day 3 (level 1) waits until day 4: 1 day. Day 4 is the
highest and never has a higher day after it: `0`.

### Example 2

**Input:** `levels = [5,5,5]`

**Output:** `[0,0,0]`

**Explanation:** Equal levels do not count; a later day must be strictly higher.

### Example 3

**Input:** `levels = [9,7,5,6]`

**Output:** `[0,0,1,0]`

**Explanation:** Only day 2 (level 5) is followed by a higher day (day 3,
level 6). Days 0 and 1 are never exceeded later, and day 3 is the last day.

## Constraints

- `1 <= levels.length <= 10^5`
- `0 <= levels[i] <= 10^9`

## Follow-up

Can you solve it in `O(n)` time? Think about which earlier days are still
"waiting" for a higher level, and in what order they get resolved.
