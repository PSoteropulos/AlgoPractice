# Drone Battery Swaps — Reference Solution

## Approach

Track `reach`, the farthest position the drone can get to with the battery it
currently has. Initially `reach = batteryRange`.

While `reach < destination`, the drone must swap at least once more, and the
swap has to happen at some station it can already get to (position
`<= reach`). Among those, swapping at the **farthest** one is always best:
every swap resets the battery to the same full charge, so a swap at a
farther station gives a strictly larger (or equal) new `reach`, and a larger
`reach` never makes any later choice unavailable. This is the usual
"greedy stays ahead" argument: after `k` swaps, the greedy drone's reach is at
least as large as any other strategy's reach after `k` swaps.

If no unused station lies within `reach`, the drone is stuck and the answer is
`-1`. Because stations are sorted and `reach` only grows, a single pointer
scans each station once.

(Note: `best + batteryRange` can be up to about `2 * 10^9`, which overflows a
32-bit signed int — use a 64-bit `reach` in C#/Java.)

## Python

```python
def min_battery_swaps(stations: list[int], destination: int, battery_range: int) -> int:
    reach = battery_range
    swaps = 0
    i, n = 0, len(stations)
    while reach < destination:
        best = -1
        # Walk past every station we can currently reach; remember the farthest.
        while i < n and stations[i] <= reach:
            best = stations[i]
            i += 1
        if best == -1:  # nothing new within reach -> stranded
            return -1
        reach = best + battery_range
        swaps += 1
    return swaps
```

## Complexity

- **Time:** `O(n)` — the pointer `i` only moves forward, so each station is
  examined once.
- **Space:** `O(1)` extra.
