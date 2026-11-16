# Island Ferry Vouchers

**Difficulty:** Hard
**Topic:** Graphs (shortest paths, Dijkstra on an expanded state space)

## Description

An archipelago has `n` islands numbered `0` to `n - 1`. They are linked by
ferry routes. You are given `ferries` where
`ferries[i] = [u_i, v_i, duration_i, interval_i]` describes a **two-way**
route between islands `u_i` and `v_i`:

- Ferries on this route leave **from either end** at times
  `0, interval_i, 2 * interval_i, 3 * interval_i, ...`.
- A ferry ride takes exactly `duration_i` time units. If you board at time
  `s`, you arrive at the other end at time `s + duration_i`.
- To board a scheduled ferry you must be at that island at its departure time.
  If you get there at time `t` and `t` is a multiple of `interval_i`, you can
  leave right away. Otherwise you wait until the next multiple of
  `interval_i`.

You also hold `k` **charter vouchers**. When you are on an island at time
`t`, you can spend one voucher on any route from that island to leave at
time `t` (no waiting) and arrive at `t + duration_i`. One voucher covers
exactly one ride.

You start on island `0` at time `0`. You may wait on any island for as long
as you like. Return the **earliest time** you can reach island `n - 1`, or
`-1` if you can't reach it at all.

Notes:
- Two islands can be linked by more than one route, and each route has its
  own schedule.
- Transfers take no time. You can arrive on one ferry and leave on another at
  the same instant.

## Examples

**Example 1**

```
Input:  n = 4,
        ferries = [[0,1,2,5],[1,3,3,4],[0,2,4,3],[2,3,1,10]],
        k = 0
Output: 7
```
Explanation:
- Route `0 → 1 → 3`: leave island 0 at time 0 (a multiple of 5) and reach
  island 1 at time 2. The `1–3` ferry leaves at multiples of 4, so wait until
  time 4 and reach island 3 at time `4 + 3 = 7`.
- Route `0 → 2 → 3`: leave at 0 and reach island 2 at time 4. The `2–3`
  ferry leaves at multiples of 10, so wait until 10 and arrive at time 11.
- The earliest arrival is **7**.

**Example 2**

```
Input:  n = 5,
        ferries = [[0,1,3,1],[1,4,2,20],[0,2,1,1],[2,3,1,1],[3,4,6,1]],
        k = 1
Output: 5
```
Explanation:
- With no vouchers, the fastest trip is `0 → 2 → 3 → 4`, arriving at times
  1, 2, then 8. Going `0 → 1 → 4` reaches island 1 at time 3, but the next
  `1–4` ferry doesn't leave until time 20, so you'd arrive at 22.
- With one voucher, take `0 → 1` (arrive at 3) and charter the `1–4` ride at
  time 3. You arrive at `3 + 2 = 5`.
- Spending the voucher on the `0 → 2 → 3 → 4` route saves nothing, because
  those ferries leave every time unit. The answer is **5**.

**Example 3**

```
Input:  n = 3, ferries = [[0,1,5,2]], k = 2
Output: -1
```
Explanation: No route touches island 2, so it can't be reached, even with
vouchers.

## Constraints

- `2 <= n <= 10^4`
- `0 <= ferries.length <= 2 * 10^4`
- `ferries[i].length == 4`
- `0 <= u_i, v_i <= n - 1`, `u_i != v_i`
- `1 <= duration_i <= 1000`
- `1 <= interval_i <= 1000`
- `0 <= k <= 10`
- The answer, if it exists, fits in a 32-bit signed integer.

## Follow-up

Suppose each route has a departure **offset** too, so ferries leave at
`offset_i, offset_i + interval_i, offset_i + 2 * interval_i, ...` with
`0 <= offset_i < interval_i`. Does your algorithm still work unchanged?
What property of the "time you leave → time you arrive" function makes
Dijkstra valid here, and what kind of schedule would break it?
