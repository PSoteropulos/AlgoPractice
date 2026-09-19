# Workshop Marathon Scheduler

**Difficulty:** Hard
**Topic:** Greedy

## Description

You're organizing a single-track workshop marathon that starts at time `0`.
You're given a list `workshops` where `workshops[i] = [duration, deadline]`
describes the `i`-th workshop: it takes `duration` minutes to run start to
finish, and it must be **completed by minute `deadline`** (inclusive) if you
choose to run it at all.

Only one workshop can run at a time, back to back with no gaps and no
overlaps, and you may run the workshops **in any order** you like. You are
not required to run every workshop — skipping one has no penalty, it just
never gets scheduled.

Return the **maximum number of workshops** you can complete such that every
workshop you actually run finishes at or before its own deadline.

Function signature: `max_workshops(workshops: List[List[int]]) -> int`

## Examples

### Example 1

```
Input:  workshops = [[2, 5], [3, 5], [4, 7], [5, 10]]
Output: 3
```

**Explanation:** Run them in deadline order: `[2, 5]` finishes at minute 2
(≤ 5), `[3, 5]` finishes at minute 5 (≤ 5), `[4, 7]` would finish at minute
9 (> 7, so skip it), `[5, 10]` finishes at minute 10 (≤ 10). Three
workshops (durations 2, 3, 5) complete on time; there's no way to also fit
in the fourth.

### Example 2

```
Input:  workshops = [[4, 6], [5, 5], [2, 6]]
Output: 2
```

**Explanation:** Running `[5, 5]` first uses up all 5 minutes before its own
deadline, leaving no room for anything else within the other two
deadlines — only 1 workshop total. Better: run `[4, 6]` first (finishes at
minute 4), then `[2, 6]` (finishes at minute 6, ≤ 6). That completes 2
workshops, and no ordering completes all 3 (their combined duration is 11
minutes, more than any of their deadlines).

### Example 3

```
Input:  workshops = [[10, 3]]
Output: 0
```

**Explanation:** The single workshop takes 10 minutes but must finish by
minute 3 — it can never be completed, so the best you can do is run
nothing.

## Constraints

- `1 <= workshops.length <= 10^5`
- `workshops[i].length == 2`
- `1 <= duration <= 10^9`
- `1 <= deadline <= 10^9`
- Workshops are not given in any particular order, and deadlines are not
  necessarily distinct.

## Follow-up

The problem only asks for the *count* of workshops you can complete. Could
you extend your approach to also return the original indices of one valid
set of workshops achieving that maximum count? Think about what you'd need
to track alongside each duration as it enters and possibly later leaves
your greedy selection.
