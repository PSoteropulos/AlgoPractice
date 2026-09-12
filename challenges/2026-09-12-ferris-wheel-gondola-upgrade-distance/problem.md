# Ferris Wheel Gondola Upgrade Distance

**Difficulty:** Medium
**Topic:** Stacks / Queues (monotonic stack)

## Description

A Ferris wheel has `n` gondolas bolted onto a single ring, numbered `0` to
`n - 1` in clockwise order (so gondola `n - 1` is immediately followed,
clockwise, by gondola `0` again). Each gondola `i` has a passenger capacity
`capacity[i]`.

Maintenance wants to know, for every gondola, how far it would have to
travel clockwise to find a gondola strictly larger than itself — the idea
being that riders could be shuffled forward into the first bigger gondola
they reach.

Formally, for each gondola `i`, look at the other gondolas in clockwise
order starting from the one immediately after `i`: the gondola at position
`i + 1`, then `i + 2`, and so on, wrapping back to `0` after `n - 1`. Stop
as soon as you reach a gondola with strictly greater capacity than
`capacity[i]`, and record how many steps clockwise you took to get there
(the very next gondola is `1` step away, the one after that is `2` steps,
etc.). You are only allowed to travel all the way around once — that is,
you may look at each of the other `n - 1` gondolas at most one time each
without ever re-examining gondola `i` itself. If no gondola with a
strictly greater capacity is found before you would have to look at
gondola `i` again, record `-1` for it instead.

Return an array `result` of length `n` where `result[i]` is that distance
(or `-1`) for gondola `i`.

## Examples

### Example 1

**Input:** `capacity = [3,1,2,4]`

**Output:** `[3,1,1,-1]`

**Explanation:**
- Gondola `0` (capacity `3`): gondola `1` (`1`, no), gondola `2` (`2`, no),
  gondola `3` (`4`, yes) — `3` steps away.
- Gondola `1` (capacity `1`): gondola `2` (`2`, yes) — `1` step away.
- Gondola `2` (capacity `2`): gondola `3` (`4`, yes) — `1` step away.
- Gondola `3` (capacity `4`): gondola `0` (`3`, no), gondola `1` (`1`, no),
  gondola `2` (`2`, no) — all `3` other gondolas checked, none bigger, so
  `-1`.

### Example 2

**Input:** `capacity = [5,5,5,5]`

**Output:** `[-1,-1,-1,-1]`

**Explanation:** Every gondola has the same capacity, and the comparison
is strict, so no gondola ever finds a strictly larger one — every entry is
`-1`.

### Example 3

**Input:** `capacity = [2,4,3,6,1]`

**Output:** `[1,2,1,-1,1]`

**Explanation:**
- Gondola `0` (`2`): gondola `1` (`4`, yes) — `1` step.
- Gondola `1` (`4`): gondola `2` (`3`, no), gondola `3` (`6`, yes) — `2`
  steps.
- Gondola `2` (`3`): gondola `3` (`6`, yes) — `1` step.
- Gondola `3` (`6`): gondola `4` (`1`, no), gondola `0` (`2`, no), gondola
  `1` (`4`, no), gondola `2` (`3`, no) — all `4` others checked, `-1`.
- Gondola `4` (`1`): gondola `0` (`2`, yes) — `1` step.

## Constraints

- `1 <= n == capacity.length <= 10^5`
- `1 <= capacity[i] <= 10^9`
- Capacities are not guaranteed to be distinct.

## Follow-up

The description above is phrased as "walk clockwise one gondola at a
time," which suggests an `O(n^2)` approach in the worst case (a strictly
decreasing-then-flat ring, for instance). Can you compute the whole
`result` array in `O(n)` time using a stack, processing the circular array
by conceptually laying it out twice in a row (indices `0` to `2n - 1`,
where index `i` refers to gondola `i % n`) and never letting the stack
hold more than `n` entries at once?
