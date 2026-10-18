# Varied Ferry Hops

**Difficulty:** Medium
**Topic:** Dynamic Programming

## Description

A ferry route has `n` docks in a line, numbered `0` to `n - 1`. You start at
dock `0` and must end at dock `n - 1`. Every time you leave dock `i` you pay
the departure fee `fees[i]`. Arriving at a dock is free, and you pay nothing at
the final dock because you never leave it.

Each trip (a "hop") moves you forward by exactly `1`, `2`, or `3` docks. You may
not overshoot the final dock, and the ferry's rules forbid two **consecutive**
hops of the same length (for example, a hop of 2 may not be followed
immediately by another hop of 2, although 2 then 1 then 2 is fine).

Return the minimum total fee needed to travel from dock `0` to dock `n - 1`.
If `n = 1` you are already there and the answer is `0`. (It can be shown that
for every `n >= 1` at least one valid route exists.)

## Examples

### Example 1

**Input:** `fees = [4,1,5,2,3]`

**Output:** `5`

**Explanation:** Hop 1 (dock 0 -> 1, pay 4), then hop 3 (dock 1 -> 4, pay 1).
The hop lengths differ, and the total is `4 + 1 = 5`. Every other valid route
costs at least 6, e.g. 3 then 1 (dock 0 -> 3 -> 4) costs `4 + 2 = 6`.

### Example 2

**Input:** `fees = [3,9,1,1]`

**Output:** `3`

**Explanation:** A single hop of length 3 goes from dock 0 straight to dock 3,
paying only `fees[0] = 3`.

### Example 3

**Input:** `fees = [1,1,1,1,1,1,1]`

**Output:** `3`

**Explanation:** The destination is 6 docks away. Two hops of different lengths
cover at most `3 + 2 = 5` docks, so two hops are not enough (and `3 + 3` is
forbidden). Three hops such as `3, 2, 1` work, costing `3`.

## Constraints

- `1 <= fees.length <= 10^5`
- `1 <= fees[i] <= 10^9`
- The total fee may exceed the range of a 32-bit integer.

## Follow-up

Can you use `O(1)` extra space instead of storing a table over all docks?
