# No-Repeat Stepping Stones

**Difficulty:** Medium
**Topic:** Dynamic Programming

## Description

A row of stepping stones crosses a pond. Stone `i` (0-indexed) has a
**toll** of `cost[i]` coins, paid every time you land on it. You begin
standing on stone `0` (no toll is charged for the starting stone) and want
to reach the last stone, `n - 1`, where `n = len(cost)`.

Each move is a forward jump of **exactly 1, 2, or 3 stones**. You may not
jump past the last stone. Your legs tire easily, so there is one rule: **you
may not make two consecutive jumps of the same length** (for example, a
jump of 2 may not be immediately followed by another jump of 2, but a 2
followed by a 1 or a 3 is fine).

Return the **minimum total toll** needed to reach stone `n - 1`. If you are
already standing on the last stone (`n == 1`), the answer is `0`. It can be
shown that a valid route always exists.

## Examples

**Example 1**

```
Input:  cost = [0, 5, 1, 4, 2]
Output: 6
```

Explanation: jump 3 (stone 0 -> 3, toll 4), then jump 1 (stone 3 -> 4, toll
2): total 6. Other routes cost more, e.g. 0 -> 1 -> 4 (jumps 1, 3) costs
5 + 2 = 7, and 0 -> 2 -> 4 is illegal because it uses jump 2 twice in a row.

**Example 2**

```
Input:  cost = [0, 1, 1, 1, 1, 1, 1]
Output: 3
```

Explanation: six stones must be crossed. Two jumps cannot do it (the longest
legal pair is 3 + 2 = 5), so at least three landings are needed, e.g. jumps
3, 2, 1 along stones 0 -> 3 -> 5 -> 6, paying 1 + 1 + 1 = 3.

**Example 3**

```
Input:  cost = [0, 9, 1, 1, 9, 1]
Output: 2
```

Explanation: jump 3 (0 -> 3, toll 1), then jump 2 (3 -> 5, toll 1): total 2.

## Constraints

- `1 <= cost.length <= 10^5`
- `0 <= cost[i] <= 10^4`

## Follow-up

The state you need from the past is tiny. Can you solve it in `O(n)` time
and `O(1)` extra space? What if the allowed jump lengths were `1..k`
instead of `1..3`?
