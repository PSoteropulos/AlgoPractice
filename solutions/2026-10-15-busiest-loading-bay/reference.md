# Busiest Loading Bay — Reference Solution

## Approach

Keep two min-heaps:

- `free`: bay numbers that are currently free (so the lowest is on top).
- `busy`: `(finish_time, bay)` pairs for occupied bays (so the earliest
  finishing bay is on top).

For each truck arriving at time `t`:

1. Pop every entry from `busy` with `finish_time <= t` and push its bay back
   onto `free` (a bay is free again at exactly its finish time).
2. If `free` is empty, the truck is rejected.
3. Otherwise pop the smallest bay `b` from `free`, increment `count[b]`, and
   push `(t + duration, b)` onto `busy`.

Finally return the bay with the largest count; scanning bays in increasing
order and updating only on a strictly larger count gives the smallest bay on
ties (and `0` if nothing was served).

Because trucks are sorted by arrival, time only moves forward, so each bay is
moved between the heaps at most once per truck it serves.

## Complexity

- Time: O((n + m) log n), where `m = len(trucks)`.
- Space: O(n).

`t + duration` can reach 2·10^9, so use a 64-bit integer in languages with
32-bit ints.

## Code (Python)

```python
import heapq
from typing import List


def busiest_bay(n: int, trucks: List[List[int]]) -> int:
    free = list(range(n))  # already a valid min-heap
    busy = []              # (finish_time, bay)
    count = [0] * n

    for arrive, duration in trucks:
        while busy and busy[0][0] <= arrive:
            _, bay = heapq.heappop(busy)
            heapq.heappush(free, bay)
        if not free:
            continue
        bay = heapq.heappop(free)
        count[bay] += 1
        heapq.heappush(busy, (arrive + duration, bay))

    best = 0
    for bay in range(1, n):
        if count[bay] > count[best]:
            best = bay
    return best
```
