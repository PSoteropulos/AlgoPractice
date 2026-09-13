# Merged Step-Count Timeline

**Difficulty:** Easy
**Topic:** Linked Lists

## Description

Two smartwatches, `A` and `B`, each recorded a timeline of step-count
checkpoints throughout the day as a singly linked list. Every node holds a
`timestamp` (minutes since midnight) and `steps` (the cumulative step
count recorded at that timestamp). Within a single watch's list, the
checkpoints are already given in strictly increasing order of `timestamp`
— a watch never logs two checkpoints at the same minute.

You want to combine both timelines into a single merged list, sorted by
non-decreasing `timestamp`, so you can review the whole day's activity in
one pass. The two watches occasionally happen to log a checkpoint in the
very same minute; when that happens, the checkpoint from watch `A` must
appear immediately before the checkpoint from watch `B` in the merged
list (so ties are broken in favor of `A`).

Write a function that takes the head nodes of watch `A`'s list and watch
`B`'s list and returns the head of the merged list. You must reuse the
existing nodes (re-link their `next` pointers) rather than allocating new
ones, and either input list may be empty.

## Examples

### Example 1

**Input:**
`A = (0, 0) -> (30, 1200) -> (60, 2500)`
`B = (15, 600) -> (45, 1900)`

**Output:**
`(0, 0) -> (15, 600) -> (30, 1200) -> (45, 1900) -> (60, 2500)`

**Explanation:** No two checkpoints share a timestamp here, so the
merged list is simply both timelines interleaved by increasing
timestamp: `0, 15, 30, 45, 60`.

### Example 2

**Input:**
`A = (10, 500) -> (20, 1000)`
`B = (10, 480) -> (25, 1100)`

**Output:**
`(10, 500) -> (10, 480) -> (20, 1000) -> (25, 1100)`

**Explanation:** Both watches log a checkpoint at minute `10`. Since ties
favor `A`, `A`'s checkpoint `(10, 500)` comes first, immediately followed
by `B`'s `(10, 480)`. After that, `20` (from `A`) comes before `25` (from
`B`).

### Example 3

**Input:**
`A = (empty list)`
`B = (5, 200) -> (10, 450)`

**Output:**
`(5, 200) -> (10, 450)`

**Explanation:** When one watch has no checkpoints at all, the merged
list is just the other watch's timeline, unchanged.

## Constraints

- `0 <= length of A, length of B <= 10^4`
- `0 <= timestamp <= 1440` for every node
- `0 <= steps <= 10^6` for every node
- Within `A` alone, and within `B` alone, timestamps are strictly
  increasing. Across `A` and `B`, the same timestamp may appear in both.

## Follow-up

Suppose instead of two smartwatches you had `k` of them, each contributing
one sorted timeline. How would you merge all `k` lists into one
sorted-by-timestamp list efficiently, keeping ties broken by the watches'
original input order (watch `0` before watch `1` before watch `2`, and so
on) whenever timestamps match? What data structure lets you pick the next
checkpoint across all `k` lists in `O(log k)` time instead of comparing
all `k` current heads directly on every step?
