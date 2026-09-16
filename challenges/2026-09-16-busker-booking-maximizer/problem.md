# Busker Booking Maximizer

**Difficulty:** Medium
**Topic:** Dynamic Programming

## Description

A city festival lets a single street performer ("busker") reserve time
slots on one shared stage. Each available slot is described by three
integers `start`, `end`, and `donation`: the slot runs from time `start` up
to (but not including) time `end`, and performing it earns `donation` in
tips.

The busker can only be on stage for one slot at a time. Two slots **conflict**
if their time ranges overlap by any positive amount — formally, slots
`(start1, end1, _)` and `(start2, end2, _)` conflict exactly when
`start1 < end2` and `start2 < end1`. Slots that merely touch (one slot's
`end` equals another's `start`) do **not** conflict, since the busker can
pack up and start the next performance immediately.

Given a list of `n` slots, choose a subset of mutually non-conflicting
slots that maximizes the total donations earned. Return that maximum total.

## Examples

### Example 1

```
Input: slots = [[0,3,5], [2,5,6], [4,7,5], [6,9,4]]
Output: 10
```
Explanation: One optimal choice is slot `[0,3,5]` plus slot `[4,7,5]`
(they don't conflict since `3 <= 4`), earning `5 + 5 = 10`. Another
equally good choice is `[2,5,6]` plus `[6,9,4]` (they don't conflict since
`5 <= 6`), earning `6 + 4 = 10`. No subset earns more than `10`.

### Example 2

```
Input: slots = [[1,4,3]]
Output: 3
```
Explanation: There is only one slot, so the best (and only) choice is to
take it.

### Example 3

```
Input: slots = [[0,2,5], [0,2,10], [1,3,3]]
Output: 10
```
Explanation: Every pair of slots conflicts with every other one (the first
two share the exact same range, and the third overlaps both), so the
busker can take at most one slot. The best single slot pays `10`.

## Constraints

- `1 <= slots.length <= 2000`
- `0 <= start_i < end_i <= 10^9`
- `1 <= donation_i <= 10^4`

## Follow-up

Beyond returning the maximum total, can you also reconstruct **one** actual
subset of slots that achieves it, in the same time complexity as computing
the total?
