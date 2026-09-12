# Reference Solution: Ferris Wheel Gondola Upgrade Distance

## Approach

This is a **circular monotonic stack** problem. The naive reading of the
problem statement — walk clockwise from each gondola one step at a time
until you find something bigger — is `O(n^2)` in the worst case (e.g. a
strictly decreasing ring, where every gondola has to scan almost all the
way around). The standard trick for "next greater element, circularly" is
to:

1. Conceptually double the array by iterating an index `i` from `0` to
   `2n - 1`, mapping it back to the real gondola `idx = i % n`. This lets
   a gondola near the end of the array "see" gondolas near the start
   without special-casing the wraparound.
2. Maintain a stack of gondola indices whose next-greater gondola hasn't
   been found yet, kept in increasing order of capacity from bottom to
   top being *not* guaranteed — rather, the stack holds indices in the
   order they were pushed, and whenever the current gondola's capacity is
   strictly greater than the capacity at the top of the stack, that means
   the current gondola *is* the answer for whatever is on top.
3. Only push a gondola's index onto the stack the first time it's
   encountered (i.e., when `i < n`), since by the time we'd see it again
   at `i >= n`, it's had its full `n - 1`-gondola search window and
   should not be reconsidered as a "not yet resolved" entry a second
   time.
4. Whenever we pop index `top` while examining position `i`, the distance
   traveled clockwise is exactly `i - top`, because `top` was pushed at
   iteration number `top` (its own original index), and each iteration
   of `i` corresponds to moving one gondola clockwise from the start of
   the scan.
5. Any index still on the stack when the loop finishes never found a
   larger gondola within one full trip around, so it keeps its
   initialized value of `-1`.

Why this respects the "look at each other gondola at most once" rule:
gondola `g`, pushed at iteration `i = g`, can only be popped at some
later iteration `i' < g + n` (since the loop only runs to `2n - 1`, and if
it survived all the way to `i' = g + n` the comparison would be against
itself — same value, not strictly greater — so it's never incorrectly
resolved against its own capacity). That caps the distance recorded at
`n - 1`, matching "at most one full trip around."

```python
from typing import List


def gondola_upgrade_distance(capacity: List[int]) -> List[int]:
    n = len(capacity)
    result = [-1] * n
    stack: List[int] = []  # indices whose next-greater gondola is unresolved
    for i in range(2 * n):
        idx = i % n
        while stack and capacity[stack[-1]] < capacity[idx]:
            top = stack.pop()
            result[top] = i - top
        if i < n:
            stack.append(idx)
    return result
```

### Worked check against the examples

- `capacity = [3,1,2,4]`: push `0` (val `3`); at `i=1` (`1`), `1` isn't
  `> 3`, push `1`; at `i=2` (`2`), pop `1` (`2 > 1`, distance `2-1=1`),
  `2` isn't `> 3`, push `2`; at `i=3` (`4`), pop `2` (`4 > 2`, distance
  `3-2=1`), pop `0` (`4 > 3`, distance `3-0=3`), push `3`; at `i=4`
  (`idx=0`, val `3`), `3` isn't `> 4`, nothing pops (`i>=n` so no push);
  at `i=5` (`idx=1`, val `1`), no pop; at `i=6` (`idx=2`, val `2`), no
  pop; at `i=7` (`idx=3`, val `4`, same as itself), `4` isn't `> 4`, no
  pop. Loop ends with `3` still on the stack unresolved → `-1`. Final:
  `[3, 1, 1, -1]`. ✓
- `capacity = [5,5,5,5]`: every comparison is `5 < 5` → `False`, so
  nothing is ever popped; all four stay `-1`. ✓
- `capacity = [2,4,3,6,1]`: push `0`(`2`); `i=1`(`4`) pops `0`
  (`4>2`, dist `1`), push `1`; `i=2`(`3`), `3` not `>4`, push `2`;
  `i=3`(`6`) pops `2` (`6>3`, dist `1`), pops `1` (`6>4`, dist `2`), push
  `3`; `i=4`(`1`), not `>6`, push `4`; `i=5`(`idx=0`, `2`) pops `4`
  (`2>1`, dist `5-4=1`), `2` not `>6`, no further pop; `i=6`(`idx=1`,
  `4`), not `>6`; `i=7`(`idx=2`, `3`), not `>6`; `i=8`(`idx=3`, `6`, same
  as itself), not `>6`. Loop ends, `3` still unresolved → `-1`. Final:
  `[1, 2, 1, -1, 1]`. ✓
- Single gondola `[1]`: `n=1`, loop runs `i=0,1`; at `i=0` push `0`; at
  `i=1`, `idx=0`, comparing `capacity[0] < capacity[0]` is `False`, so it
  never pops. Result `[-1]`. ✓
- `[1,2]`: push `0`(`1`); `i=1`(`2`) pops `0` (`2>1`, dist `1`), push
  `1`; `i=2`(`idx=0`,`1`), `1` not `>2`; `i=3`(`idx=1`,`2`, same as
  itself), not `>2`. Result `[1, -1]`. ✓

## Complexity

- **Time:** `O(n)` — the outer loop runs `2n` times, and each index is
  pushed exactly once and popped at most once across the whole run, so
  the total work done inside the `while` loop is `O(n)` amortized.
- **Space:** `O(n)` for the stack and the result array.

### Follow-up sketch

The follow-up asks exactly for this doubled-index-plus-stack technique,
which is what the reference solution already implements: laying the
circular array out twice (`0` to `2n - 1`) turns the "wrap around once"
rule into a plain linear scan, and the stack never holds more than `n`
indices at a time because every index is pushed only once (during the
first pass, `i < n`) and each pop permanently resolves that index.
