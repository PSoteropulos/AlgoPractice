# Tray Stack Consolidation

**Difficulty:** Easy
**Topic:** Heaps

## Description

A cafeteria closes for the night and every tray stack on the counter needs to
be consolidated into a single stack before the counter can be wiped down. You
are given the height of each individual tray stack.

You may combine any two stacks into one at a time. Combining a stack of
height `a` with a stack of height `b` produces a single stack of height
`a + b`, and costs `a + b` units of effort (the time it takes to lift and
carry the shorter stack over to the taller one). You repeat this until only
one stack remains.

Return the **minimum total effort** required to consolidate all the stacks
into one.

If there are zero or one stacks to begin with, no combining is needed and the
answer is `0`.

## Examples

**Example 1:**
```
Input: heights = [4, 3, 2, 6]
Output: 29
Explanation:
  Combine 2 and 3 -> cost 5, stacks are now [4, 6, 5]
  Combine 4 and 5 -> cost 9, stacks are now [6, 9]
  Combine 6 and 9 -> cost 15, stacks are now [15]
  Total effort = 5 + 9 + 15 = 29
```

**Example 2:**
```
Input: heights = [1, 8, 3, 5]
Output: 30
Explanation:
  Combine 1 and 3 -> cost 4, stacks are now [8, 5, 4]
  Combine 4 and 5 -> cost 9, stacks are now [8, 9]
  Combine 8 and 9 -> cost 17, stacks are now [17]
  Total effort = 4 + 9 + 17 = 30
```

**Example 3:**
```
Input: heights = [7]
Output: 0
Explanation: Only one stack exists, so no combining is needed.
```

## Constraints

- `0 <= heights.length <= 10^5`
- `1 <= heights[i] <= 10^9`
- The sum of all heights fits comfortably in a 64-bit integer.

## Follow-up

Suppose the cafeteria has a large enough cart that it can combine up to `k`
stacks at once in a single move (cost equal to the sum of all stacks
combined in that move). How would your approach change to minimize total
effort for a given `k`?
