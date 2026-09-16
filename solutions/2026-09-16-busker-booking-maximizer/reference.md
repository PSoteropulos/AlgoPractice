# Reference Solution: Busker Booking Maximizer

## Approach

This is the classic **weighted interval scheduling** pattern: pick a
maximum-weight subset of intervals such that no two chosen intervals
overlap. It's solved with dynamic programming over intervals sorted by end
time, sped up with binary search.

**Sort by end time.** Sort the `n` slots by their `end` value. This
guarantees that when we consider slot `i` in sorted order, every slot that
could possibly be compatible with it (i.e. ends at or before `slot[i].start`)
has already been considered.

**Define the DP.** Let `dp[i]` be the best total donation achievable using
only the first `i` sorted slots (`dp[0] = 0`). For the `i`-th slot (1-indexed,
`slots[i-1]` in the sorted array), there are exactly two choices:

1. **Skip it:** the best is whatever we already had, `dp[i-1]`.
2. **Take it:** collect its donation plus the best total achievable from
   slots that don't conflict with it. Since the array is sorted by end
   time, the compatible slots are a *prefix* of the sorted array — all
   slots whose `end <= slots[i-1].start`. Binary search (`bisect_right` on
   the array of ends) finds `j`, the count of such compatible slots, in
   `O(log n)`. That gives `donation + dp[j]`.

Take the max of the two: `dp[i] = max(dp[i-1], donation_i + dp[j])`. The
answer is `dp[n]`.

**Why sorting by end time matters.** It guarantees `j <= i - 1` — every
slot compatible with slot `i` was already assigned a `dp` value before we
process slot `i`, so the recurrence never depends on unfinished work.

## Reference implementation (Python)

```python
from bisect import bisect_right
from typing import List


def max_total_donations(slots: List[List[int]]) -> int:
    if not slots:
        return 0

    ordered = sorted(slots, key=lambda s: s[1])
    ends = [s[1] for s in ordered]
    n = len(ordered)
    dp = [0] * (n + 1)

    for i in range(1, n + 1):
        start, end, donation = ordered[i - 1]
        # Count of slots (among the first i-1) that end at or before `start`.
        j = bisect_right(ends, start, 0, i - 1)
        dp[i] = max(dp[i - 1], donation + dp[j])

    return dp[n]
```

## Walkthrough on Example 1

`slots = [[0,3,5], [2,5,6], [4,7,5], [6,9,4]]`. Sorted by end time, the
order is already `[0,3,5], [2,5,6], [4,7,5], [6,9,4]` (ends `3, 5, 7, 9`).

- `i=1`, slot `(0,3,5)`: no earlier slots end `<= 0`, so `j=0`.
  `dp[1] = max(dp[0]=0, 5 + dp[0]=5) = 5`.
- `i=2`, slot `(2,5,6)`: need ends `<= 2` among the first slot (`end=3`,
  too late), so `j=0`. `dp[2] = max(dp[1]=5, 6 + dp[0]=6) = 6`.
- `i=3`, slot `(4,7,5)`: need ends `<= 4`; slot 1 ends at `3 <= 4` (compatible),
  slot 2 ends at `5 > 4` (not), so `j=1`. `dp[3] = max(dp[2]=6, 5 + dp[1]=10) = 10`.
- `i=4`, slot `(6,9,4)`: need ends `<= 6`; slots 1 and 2 both qualify
  (`3 <= 6`, `5 <= 6`), slot 3 (`end=7`) does not, so `j=2`.
  `dp[4] = max(dp[3]=10, 4 + dp[2]=10) = 10`.

Final answer: `dp[4] = 10`, matching the expected output (achieved either
by slots 1+3 or slots 2+4).

## Complexity

- **Time:** `O(n log n)` — sorting is `O(n log n)`, and each of the `n` DP
  transitions does an `O(log n)` binary search.
- **Space:** `O(n)` for the sorted copy, the `ends` array, and the `dp`
  array.

A simpler `O(n^2)` approach (scan all earlier slots linearly instead of
binary-searching) is also perfectly fine given the constraint `n <= 2000`.

## Follow-up notes

To reconstruct an actual optimal subset, store alongside each `dp[i]` a
boolean (or the previous index) recording whether the "take it" branch won
the `max`. After filling the table, walk backward from `dp[n]`: if slot `i`
was taken, add it to the result and jump to `dp[j]`; otherwise move to
`dp[i-1]`. This backtracking pass is `O(n)`, so it doesn't change the
overall time complexity.
