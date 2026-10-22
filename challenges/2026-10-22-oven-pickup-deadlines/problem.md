# Oven Pickup Deadlines

**Difficulty:** Hard
**Topic:** Greedy (with Heaps)

## Description

A bakery has a single oven that can bake one order at a time. You are given a
list `orders`, where `orders[i] = [bake, pickup]`:

- `bake` is the number of minutes the oven needs to bake order `i`, and
- `pickup` is the minute by which the order must be **finished** so that the
  customer can collect it.

The oven starts empty at minute `0`. Once you start baking an order you must
run it to completion without interruption, and you may start the next order
the moment the previous one finishes (or leave the oven idle, though that never
helps). An order is **on time** if its finishing minute is less than or equal
to its `pickup`. You may skip orders entirely.

Return the **maximum number of orders** that can be baked on time.

## Examples

### Example 1

**Input:** `orders = [[3,5],[2,6],[4,7]]`

**Output:** `2`

**Explanation:** Baking all three takes 9 minutes, but the latest pickup is 7,
so at most two fit. Bake `[3,5]` (done at 3) then `[2,6]` (done at 5); both are
on time. Three orders can never fit, so the answer is 2.

### Example 2

**Input:** `orders = [[5,5],[4,6],[2,6],[1,8]]`

**Output:** `3`

**Explanation:** Skip the `[5,5]` order. Bake `[4,6]` (done at 4), `[2,6]`
(done at 6), then `[1,8]` (done at 7): all on time. All four total 12 minutes,
more than the latest pickup of 8, so four is impossible.

### Example 3

**Input:** `orders = [[2,2],[2,2],[2,4]]`

**Output:** `2`

**Explanation:** Only one of the two `[2,2]` orders can finish by minute 2.
Bake one of them (done at 2) and then `[2,4]` (done at 4). The answer is 2.

## Constraints

- `1 <= orders.length <= 10^5`
- `orders[i].length == 2`
- `1 <= bake, pickup <= 10^9`
- Orders are given in no particular order.

## Follow-up

Can you do it in `O(n log n)` time? Which already-chosen order is the best
one to give up when a new order no longer fits, and why does swapping it out
never hurt?
