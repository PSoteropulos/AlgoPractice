# Busiest Loading Bay

**Difficulty:** Medium
**Topic:** Heaps

## Description

A warehouse has `n` loading bays numbered `0` to `n - 1`. You are given a list
`trucks`, where `trucks[i] = [arrive, duration]` describes the `i`-th truck. The
list is sorted by `arrive` in non-decreasing order; trucks with equal arrival
times are handled in the order they appear in the list.

When a truck arrives, it is assigned using these rules:

1. A bay is **free** if it has no truck, or its current truck finishes at or
   before the new truck's arrival time. A truck that arrives at time `t` and
   has `duration = d` occupies its bay during `[t, t + d)`, so the bay is free
   again at time `t + d`.
2. If at least one bay is free, the truck takes the **lowest-numbered** free
   bay.
3. If no bay is free, the truck leaves immediately and is **never served**. It
   does not occupy anything and does not wait.

Return the number of the bay that served the **most trucks**. If several bays
tie, return the smallest bay number. If no truck is ever served, return `0`.

## Examples

### Example 1

**Input:** `n = 2`, `trucks = [[1,5],[2,2],[3,1],[6,1]]`

**Output:** `0`

**Explanation:**
- t=1: bay 0 is taken and stays busy until time 6.
- t=2: bay 1 is taken and stays busy until time 4.
- t=3: both bays are busy, so this truck leaves.
- t=6: bay 0 frees at 6 and bay 1 frees at 4, so both are free. The lowest is
  bay 0.
- Bay 0 served 2 trucks and bay 1 served 1.

### Example 2

**Input:** `n = 3`, `trucks = [[1,10],[2,1],[3,1],[4,1],[5,10]]`

**Output:** `1`

**Explanation:**
- t=1: bay 0 (busy until 11).
- t=2: bay 1 (busy until 3).
- t=3: bay 1 frees at exactly 3, so bays 1 and 2 are free; take bay 1 (busy
  until 4).
- t=4: bay 1 again (busy until 5).
- t=5: bays 1 and 2 are free; take bay 1 (busy until 15).
- Bay 1 served 4 trucks, bay 0 served 1, bay 2 served 0.

### Example 3

**Input:** `n = 3`, `trucks = [[1,2],[1,2],[2,1],[3,1],[3,5]]`

**Output:** `0`

**Explanation:**
- t=1: bay 0 (until 3). t=1: bay 1 (until 3). t=2: bay 2 (until 3).
- t=3: all bays are free again, so the next truck takes bay 0 (until 4), and
  the one after it takes bay 1 (until 8).
- Bays 0 and 1 each served 2 trucks and bay 2 served 1. Bays 0 and 1 tie, so
  the answer is the smaller number, `0`.

## Constraints

- `1 <= n <= 10^5`
- `1 <= trucks.length <= 10^5`
- `trucks[i].length == 2`
- `1 <= arrive, duration <= 10^9`
- `trucks` is sorted by `arrive` in non-decreasing order.

## Follow-up

Can you do it in `O((n + m) log n)` time, where `m = trucks.length`? Which two
collections do you need so that both "which bay frees next?" and "which free
bay has the lowest number?"

Note that `arrive + duration` can reach `2 * 10^9`, so choose your integer types
carefully.
