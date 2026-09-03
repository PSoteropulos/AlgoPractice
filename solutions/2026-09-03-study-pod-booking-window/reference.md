# Study Pod Booking Window — Reference Solution

## Approach

This is the classic **activity selection** pattern: to maximize the number
of non-overlapping intervals you can keep, greedily prefer the interval
that **frees up the pod soonest**, regardless of how early it starts.

1. Sort `bookings` by end time, ascending.
2. Walk through them in that order, tracking `last_end`, the end time of
   the most recently accepted booking (start at `-infinity`).
3. For each booking `[start, end)`, if `start >= last_end` it doesn't
   conflict with anything already accepted — accept it, increment the
   count, and set `last_end = end`. Otherwise skip it (it necessarily
   overlaps the previously accepted booking, which already ends earliest
   among all candidates considered so far).

```python
from typing import List


def max_bookings(bookings: List[List[int]]) -> int:
    bookings = sorted(bookings, key=lambda b: b[1])
    count = 0
    last_end = float("-inf")
    for start, end in bookings:
        if start >= last_end:
            count += 1
            last_end = end
    return count
```

## Why this is correct

This is an exchange-argument greedy proof. Consider any optimal solution
`OPT`. Let `g` be the booking with the earliest end time that the greedy
algorithm accepts first, and let `o` be the first booking `OPT` accepts.
Since `g` has the smallest end time among *all* bookings, `end(g) <=
end(o)`. Swapping `o` for `g` in `OPT` cannot create a new conflict: every
other booking in `OPT` starts at or after `end(o) >= end(g)`, so it still
doesn't overlap `g`. This produces another optimal solution that agrees
with the greedy choice on its first pick. Repeating this argument on the
remaining sub-problem (bookings that start at or after `end(g)`) shows, by
induction, that always picking the earliest-finishing compatible booking
never does worse than any other strategy — so the greedy count matches the
optimal count.

Intuitively: a booking's *start* time only tells you when it needs the pod
to be free; its *end* time tells you how much of the future it leaves
open for everything else. Minimizing "time consumed" at each step leaves
the most room for subsequent picks.

## Complexity

- **Time:** O(n log n) — dominated by the sort; the single linear scan
  afterward is O(n).
- **Space:** O(n) for the sorted copy (O(log n) to O(n) additional for the
  sort itself, depending on the language's sort implementation), or O(1)
  extra if sorting is done in place.

## Follow-up sketch

To reconstruct the accepted bookings rather than just counting them, keep
each original booking paired with its index while sorting (or sort an
array of indices by `bookings[i][1]`), and instead of incrementing a
counter, append the accepted booking (or its index) to a result list each
time the `start >= last_end` condition holds. The sort and scan are
unchanged, so the time complexity stays **O(n log n)** and space grows only
by the O(n) needed to hold the output list.
