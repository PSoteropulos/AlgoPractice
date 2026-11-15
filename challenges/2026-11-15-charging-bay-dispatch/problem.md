# Charging Bay Dispatch

**Difficulty:** Medium
**Topic:** Heaps

## Description

An electric-bus depot has `m` identical charging bays numbered `0` to `m - 1`.
Throughout the day, `n` buses pull in to charge. You are given a 0-indexed
array `vehicles` where `vehicles[i] = [arrival_i, duration_i]` means bus `i`
pulls into the depot at time `arrival_i` and needs to sit in a bay for exactly
`duration_i` time units once it starts charging. The array is **not**
necessarily sorted by arrival time.

The depot dispatcher follows these rules:

1. A bus that has arrived but has not started charging is **waiting**.
2. A bay is **free** at time `t` if it is not charging any bus at time `t`.
   A bus that started charging at time `s` in some bay leaves at time
   `s + duration` — that bay is free again at time `s + duration` and can
   take a new bus at that exact moment.
3. Whenever there is at least one free bay and at least one waiting bus,
   the dispatcher immediately starts charging a bus:
   - The chosen bus is the waiting bus with the **smallest `duration`**.
     Ties are broken by **earlier `arrival`**, then by **smaller index `i`**.
   - It goes into the free bay with the **smallest number**.
   This repeats until no bays are free or no buses are waiting.
4. If several things happen at the same time `t`, then **all** bays that
   become free at `t` are freed and **all** buses arriving at `t` start
   waiting **before** any dispatch decision at time `t` is made.

Return an array `result` of length `n` where `result[i] = [bay_i, finish_i]`:
the number of the bay bus `i` charged in, and the time it finished charging.

## Examples

**Example 1**

```
Input:  vehicles = [[0,5],[1,2],[1,1],[2,3],[6,1]], m = 2
Output: [[0,5],[1,4],[1,2],[1,7],[0,7]]
```
Explanation:
- `t = 0`: bus 0 arrives and takes bay 0 (finishes at 5).
- `t = 1`: buses 1 (duration 2) and 2 (duration 1) arrive. Bay 1 is free;
  the shorter job, bus 2, takes it (finishes at 2). Bus 1 waits.
- `t = 2`: bay 1 frees up and bus 3 (duration 3) arrives. Waiting are bus 1
  (duration 2) and bus 3 (duration 3); bus 1 takes bay 1 (finishes at 4).
- `t = 4`: bay 1 frees up; bus 3 takes it (finishes at 7).
- `t = 5`: bay 0 frees up; nobody is waiting.
- `t = 6`: bus 4 arrives. Bay 0 is free (bay 1 is busy until 7), so bus 4
  takes bay 0 (finishes at 7).

**Example 2**

```
Input:  vehicles = [[3,2],[0,4],[2,2],[4,1]], m = 1
Output: [[0,9],[0,4],[0,7],[0,5]]
```
Explanation:
- `t = 0`: bus 1 takes the only bay (finishes at 4).
- Bus 2 arrives at 2 and bus 0 arrives at 3; both wait.
- `t = 4`: the bay frees up **and** bus 3 (duration 1) arrives at the same
  moment, so bus 3 is allowed to compete. It has the smallest duration and
  takes the bay (finishes at 5).
- `t = 5`: buses 2 and 0 both need 2 units; bus 2 arrived earlier (time 2 vs
  3), so it goes first (finishes at 7).
- `t = 7`: bus 0 charges (finishes at 9).

**Example 3**

```
Input:  vehicles = [[0,4],[0,4],[2,1],[3,2]], m = 3
Output: [[0,4],[1,4],[2,3],[2,5]]
```
Explanation:
- `t = 0`: buses 0 and 1 tie on duration and arrival, so the smaller index
  goes first: bus 0 takes bay 0, then bus 1 takes bay 1 (both finish at 4).
- `t = 2`: bus 2 takes bay 2, the only free bay (finishes at 3).
- `t = 3`: bay 2 frees up at the same moment bus 3 arrives, so bus 3 takes
  bay 2 (finishes at 5). Bays 0 and 1 are still busy until 4.

## Constraints

- `1 <= n == vehicles.length <= 10^5`
- `1 <= m <= 10^5`
- `0 <= arrival_i <= 10^6`
- `1 <= duration_i <= 10^4`
- All finish times fit in a 32-bit signed integer (they are at most
  `10^6 + 10^5 * 10^4`).

## Follow-up

Suppose the bays are no longer identical: bay `j` charges at `speed[j]`
units per time step, so a bus needing `duration` units occupies it for
`ceil(duration / speed[j])` steps, and the dispatcher always prefers the
fastest free bay (ties to the smallest number). Which parts of your
solution change, and does the overall complexity stay the same?
