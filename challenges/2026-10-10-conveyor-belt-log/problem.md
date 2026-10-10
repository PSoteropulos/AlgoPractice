# Conveyor Belt Log

**Difficulty:** Easy
**Topic:** Stacks / Queues

## Description

A warehouse conveyor belt starts out empty. You are given an integer array
`events` describing what happens to the belt, in order. Packages sit on the belt
in the order they were placed: the **front** holds the oldest package and the
**back** holds the newest.

Each event `e` is one of:

- `e > 0`: a package of weight `e` is placed at the **back** of the belt.
- `e == 0`: a worker removes the package at the **back** of the belt (the most
  recently placed one that is still there). If the belt is empty, nothing happens.
- `e < 0`: the dispatcher ships out `-e` packages from the **front** of the belt,
  oldest first. If the belt holds fewer than `-e` packages, it ships all of them.

Return the weights of the packages still on the belt after all events, listed
from front to back. Return an empty list if the belt is empty.

## Examples

### Example 1

**Input:** `events = [5, 3, 0, 4, -1, 7]`

**Output:** `[4, 7]`

**Explanation:**
- Place 5, 3 → `[5, 3]`.
- `0` removes the back → `[5]`.
- Place 4 → `[5, 4]`.
- `-1` ships the front package → `[4]`.
- Place 7 → `[4, 7]`.

### Example 2

**Input:** `events = [2, 6, 1, -5, 9, 0, 0]`

**Output:** `[]`

**Explanation:**
- Place 2, 6, 1 → `[2, 6, 1]`.
- `-5` ships up to 5 packages; only 3 exist → `[]`.
- Place 9 → `[9]`.
- The first `0` removes 9 → `[]`; the second `0` does nothing on an empty belt.

### Example 3

**Input:** `events = [3, 8, 2, -1, 0, -2, 6]`

**Output:** `[6]`

**Explanation:**
- Place 3, 8, 2 → `[3, 8, 2]`.
- `-1` ships 3 → `[8, 2]`.
- `0` removes 2 → `[8]`.
- `-2` ships up to 2 packages; only 8 remains → `[]`.
- Place 6 → `[6]`.

## Constraints

- `1 <= events.length <= 10^5`
- `-10^5 <= events[i] <= 10^5`

## Follow-up

Can you make the total work `O(events.length)` even when many events are large
negative numbers? (Hint: how many packages can ever be shipped in total?)
