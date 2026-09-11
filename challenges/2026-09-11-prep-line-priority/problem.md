# Prep Line Priority

**Difficulty:** Hard
**Topic:** Heaps

## Description

A food truck has exactly one chef, working a single prep line. A list of
`orders` has come in, where `orders[i] = [prepTime_i, spoilBy_i]`:

- `prepTime_i` is how many minutes the chef needs to fully cook order `i`,
  once they start it.
- `spoilBy_i` is the latest minute (measured from when the chef starts
  working, at time `0`) by which order `i` must be *finished cooking*, or
  it spoils and cannot be served.

The chef works without idle gaps: they pick some subset of the orders and
an order to cook them in, and cook them back-to-back starting at time `0`.
Any order not chosen is simply skipped and costs no time at all — the chef
never has to touch it. An order that *is* chosen counts as completed only
if the cumulative time spent cooking (that order and everything cooked
before it) is less than or equal to its own `spoilBy_i`.

Given `orders`, return the maximum number of orders the chef can complete
without missing any of their individual deadlines among the ones chosen.

## Examples

### Example 1

**Input:** `orders = [[5,9],[2,6],[3,9],[4,15],[6,15]]`

**Output:** `4`

**Explanation:** Cook the 2-minute order first (finishes at `t=2 <= 6`),
then the first 3-minute order (finishes at `t=5 <= 9`), then the 4-minute
order (finishes at `t=9 <= 15`), then the 6-minute order (finishes at
`t=15 <= 15`) — 4 orders completed, skipping the 5-minute one entirely.
Cooking all 5 would need `5+2+3+4+6 = 20` minutes, but the tightest
deadline is `6`, so all 5 is impossible; `4` is the best achievable.

### Example 2

**Input:** `orders = [[3,3],[2,3]]`

**Output:** `1`

**Explanation:** Both orders share deadline `3`, but cooking both takes
`3+2 = 5` minutes, so they can't both finish by `t=3`. The chef can
complete at most one of them — e.g. cook only the 2-minute order, finishing
at `t=2 <= 3`.

### Example 3

**Input:** `orders = [[5,3]]`

**Output:** `0`

**Explanation:** The only order needs 5 minutes but its deadline is `3`.
Even cooked alone starting at `t=0`, it finishes at `t=5 > 3`, so it can
never be completed.

## Constraints

- `0 <= orders.length <= 10^5`
- `orders[i].length == 2`
- `1 <= prepTime_i <= 10^9`
- `1 <= spoilBy_i <= 10^9`
- `prepTime_i` may be greater than `spoilBy_i` (that order can never be
  completed, alone or otherwise).

## Follow-up

Suppose orders don't all arrive up front — they stream in one at a time in
real time, and for each one you must immediately decide whether to accept
it into the chef's current plan or reject it forever, without knowing what
orders are still to come, while still trying to end up with as many
completed orders as possible under the same swap-out logic. Could the
max-heap approach still be adapted to this online setting, where orders
can't be pre-sorted by `spoilBy`? What invariant would the heap need to
maintain, and where would the guarantee of optimality break down?
