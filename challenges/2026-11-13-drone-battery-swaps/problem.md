# Drone Battery Swaps

**Difficulty:** Easy
**Topic:** Greedy

## Description

A delivery drone flies along a straight corridor from position `0` to position
`destination`, always moving forward. It takes off with a fully charged
battery, and a full battery lets it fly exactly `batteryRange` units before it
is empty.

Along the corridor are swap stations at the positions in `stations` (sorted in
strictly increasing order, each strictly between `0` and `destination`). When
the drone is at a station it may stop and swap its battery for a fully charged
one, after which it can again fly `batteryRange` units. Any leftover charge in
the old battery is lost — a swap always resets the drone to exactly
`batteryRange` units of flight, never more.

The drone may arrive at a station or at the destination with an empty battery
(it reaches the point exactly as the charge runs out), but it can never fly
past the point where its battery hits zero.

Return the **minimum number of battery swaps** the drone needs to reach
`destination`, or `-1` if it cannot reach it at all.

## Examples

**Example 1**

```
Input:  stations = [3, 7, 9, 14], destination = 16, batteryRange = 6
Output: 3
```
Explanation: The first battery reaches position `6`, so the only station within
reach is `3`; swap there (now able to reach `9`). Swap again at `9` (now able
to reach `15`), and once more at `14` (now able to reach `20 >= 16`). Two swaps
are not enough: the first swap must happen at `3`, after which the farthest
station reachable is `9`, and from `9` a full battery only reaches `15`.

**Example 2**

```
Input:  stations = [2, 4], destination = 5, batteryRange = 5
Output: 0
```
Explanation: The starting battery runs out exactly at position `5`, which is
the destination, so no swap is needed.

**Example 3**

```
Input:  stations = [2, 5, 11], destination = 15, batteryRange = 5
Output: -1
```
Explanation: The best the drone can do is swap at `5`, which lets it reach
`10`. There is no station in `(5, 10]`, and from `10` the next station at `11`
is out of reach, so the destination can never be reached.

## Constraints

- `0 <= stations.length <= 10^5`
- `1 <= destination <= 10^9`
- `1 <= batteryRange <= 10^9`
- `0 < stations[i] < destination`
- `stations` is sorted in strictly increasing order.

## Follow-up

Suppose each station instead holds a partially charged battery whose charge
`charge[i]` is given, and a "swap" **adds** that charge to what the drone has
left rather than resetting it. Does flying to the farthest reachable station
still work? If not, what data structure lets you decide which stations to
use? (Hint: think about choosing stations retroactively.)
