# Charging Bay Dispatch — Reference Solution

## Approach

This is an event-driven simulation. Three min-heaps hold all the state:

| Heap      | Ordered by                         | Purpose                                     |
|-----------|------------------------------------|---------------------------------------------|
| `free`    | bay number                         | lowest-numbered free bay on top             |
| `busy`    | `(finish_time, bay)`               | next bay to free up on top                  |
| `waiting` | `(duration, arrival, index)`       | the bus the dispatcher must pick next on top |

Sort the bus indices by arrival time (the input isn't sorted) and keep a
pointer `p` to the next bus that hasn't arrived yet.

Time never needs to move one unit at a time. Dispatching only happens at an
**event**: a bus arriving or a bay freeing up. After each round of
dispatching, at least one of `free` and `waiting` is empty, so the next
interesting time is:

- if nobody is waiting: the next arrival, `arrival[order[p]]`;
- otherwise (so no bay is free): the earliest finish time, `busy[0].finish`.

At that time `t`, follow rule 4 from the statement exactly:

1. Pop every `busy` entry with `finish <= t` and push its bay into `free`.
2. Push every bus with `arrival <= t` into `waiting`.
3. While both `free` and `waiting` are non-empty, pop the best bus and the
   lowest free bay, record `[bay, t + duration]`, and push
   `(t + duration, bay)` into `busy`.

Freeing and arriving both happen before dispatching, so a bus arriving at the
same instant a bay frees up competes for that bay (Examples 2 and 3). Because
the tie-breakers are the heap keys, the heaps choose correctly on their own.
Jumping from event to event also handles idle gaps for free.

Each `max(t, …)` keeps time from going backward. Every bus is pushed and
popped exactly once from `waiting` and once from `busy`, and causes exactly
one pop from `free` and at most one later push back into it.

```python
import heapq
from typing import List


def assign_bays(vehicles: List[List[int]], m: int) -> List[List[int]]:
    n = len(vehicles)
    order = sorted(range(n), key=lambda i: vehicles[i][0])

    free = list(range(m))
    heapq.heapify(free)          # bay numbers
    busy = []                    # (finish_time, bay)
    waiting = []                 # (duration, arrival, index)
    result = [None] * n

    p = 0      # next bus (in arrival order) not yet in the depot
    t = 0      # current simulation time
    done = 0
    while done < n:
        # Jump to the next moment something can change.
        if not waiting:
            t = max(t, vehicles[order[p]][0])
        elif not free:
            t = max(t, busy[0][0])

        # Rule 4: free bays and admit arrivals before dispatching.
        while busy and busy[0][0] <= t:
            _, bay = heapq.heappop(busy)
            heapq.heappush(free, bay)
        while p < n and vehicles[order[p]][0] <= t:
            i = order[p]
            heapq.heappush(waiting, (vehicles[i][1], vehicles[i][0], i))
            p += 1

        # Dispatch while a bay and a bus are both available.
        while free and waiting:
            duration, _, i = heapq.heappop(waiting)
            bay = heapq.heappop(free)
            finish = t + duration
            result[i] = [bay, finish]
            heapq.heappush(busy, (finish, bay))
            done += 1

    return result
```

## Why not simulate every time unit?

Time can reach about `10^9`, so stepping through every unit is far too slow.
Only events matter, and there are at most `2n` of them: `n` arrivals and
`n` finishes.

## Complexity

- **Time:** `O(n log n + m)`. Sorting is `O(n log n)`. Building `free` is
  `O(m)` with `heapify`. Each bus causes `O(1)` operations on each heap, and
  each operation costs `O(log n)` or `O(log m)`. Since at most `n` bays are
  ever used, `free` operations can also be bounded by `O(log n)` if you only
  seed bays `0..min(m, n) - 1`.
- **Space:** `O(n + m)` for the heaps, the order array and the result.
  Seeding only `min(m, n)` bays makes it `O(n)`.
