# Mixer Friend Circles

**Difficulty:** Easy
**Topic:** Union-Find

## Description

`n` attendees, numbered `0` to `n - 1`, are mingling at a networking mixer.
Every attendee starts the night alone (in a "circle" of just themselves).
Throughout the evening, the host makes a series of introductions. You are
given a list `introductions`, where `introductions[i] = [a, b]` means
attendee `a` and attendee `b` are introduced to each other.

Being introduced links two attendees into the same **friend circle** for the
rest of the night, and friend circles merge transitively: if `a` and `b` are
introduced, and later `b` and `c` are introduced, then `a`, `b`, and `c` all
end up in one circle together, even though `a` and `c` were never introduced
directly. An introduction between two attendees who are already in the same
circle has no further effect.

At the end of the night, return an array `[largestCircleSize, soloCount]`,
where `largestCircleSize` is the number of attendees in the biggest friend
circle, and `soloCount` is the number of attendees who are still alone in a
circle of size `1` (i.e. they were never part of any introduction, directly
or transitively).

## Examples

### Example 1

```
Input:  n = 5, introductions = [[0,1],[1,2],[3,4]]
Output: [3, 0]
```

**Explanation:** `0`, `1`, and `2` end up in one circle (via `[0,1]` and
`[1,2]`), and `3` and `4` end up in another circle (via `[3,4]`). Every
attendee is in some circle, so `soloCount = 0`, and the largest circle has
`3` people.

### Example 2

```
Input:  n = 6, introductions = [[0,1],[2,3]]
Output: [2, 2]
```

**Explanation:** `{0,1}` and `{2,3}` each form a circle of size `2`.
Attendees `4` and `5` were never introduced to anyone, so they remain solo,
giving `soloCount = 2`. The largest circle size is `2`.

### Example 3

```
Input:  n = 1, introductions = []
Output: [1, 1]
```

**Explanation:** With only one attendee and no introductions, that attendee
is their own circle of size `1`, and they are also solo (never introduced to
anyone), so both values are `1`.

## Constraints

- `1 <= n <= 10^5`
- `0 <= introductions.length <= 10^5`
- `introductions[i].length == 2`
- `0 <= introductions[i][0], introductions[i][1] < n`
- `introductions[i][0] != introductions[i][1]`
- The same pair may appear more than once in `introductions`; repeated
  introductions between attendees already in the same circle have no effect.

## Follow-up

This version computes both values only after all introductions have been
processed. Could you support incremental queries — after each individual
introduction is added, report the current largest circle size so far —
without recomputing everything from scratch each time? What is the
amortized time per introduction for your approach?
