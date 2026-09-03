# Study Pod Booking Window

**Difficulty:** Easy
**Topic:** Greedy

## Description

A campus library has a single bookable study pod. `n` students have each
submitted one booking request as a half-open time interval `[start, end)`,
given as an array `bookings` where `bookings[i] = [start_i, end_i]`.

The pod can only host one booking at a time. Two bookings `[s1, e1)` and
`[s2, e2)` are considered **overlapping** if they share any moment in time;
back-to-back bookings are allowed (a booking ending at `t` does not conflict
with one starting at `t`).

You get to choose a subset of the requests to **accept**; every accepted
booking must be honored exactly as requested (no shifting times), and no two
accepted bookings may overlap. Return the **maximum number of bookings** you
can accept.

## Examples

**Example 1**

```
Input:  bookings = [[1,3],[2,4],[3,5]]
Output: 2
```

Explanation: `[2,4]` overlaps both of the others, so it must be dropped.
Accepting `[1,3]` and `[3,5]` works because they only touch at `t = 3`,
giving `2` accepted bookings — the best possible here.

**Example 2**

```
Input:  bookings = [[0,1],[1,2],[2,3],[3,4]]
Output: 4
```

Explanation: Every booking starts exactly when the previous one ends, so
none of them overlap. All `4` can be accepted.

**Example 3**

```
Input:  bookings = [[5,10],[0,2],[3,6],[6,8],[8,9]]
Output: 4
```

Explanation: Accepting `[0,2]`, `[3,6]`, `[6,8]`, `[8,9]` gives `4`
non-overlapping bookings. `[5,10]` conflicts with `[3,6]`, `[6,8]`, and
`[8,9]`, so including it instead can only ever replace one of those three
booked slots, never beat them — `4` is optimal.

## Constraints

- `1 <= bookings.length <= 10^5`
- `bookings[i].length == 2`
- `0 <= start_i < end_i <= 10^9`

## Follow-up

Suppose that instead of just the count, you need to return the actual list
of accepted bookings (any optimal subset is acceptable). How would you
modify the algorithm to reconstruct that list while keeping the same time
complexity?
