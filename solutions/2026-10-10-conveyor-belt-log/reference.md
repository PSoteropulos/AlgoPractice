# Conveyor Belt Log — Reference Solution

## Approach

The belt is a double-ended queue: placements and `0` events work at the back
(stack-like), shipments work at the front (queue-like). Simulate the events
with a `deque`. A shipment of `-e` packages pops from the front up to
`min(-e, len(belt))` times.

Each package is pushed once and popped at most once (from either end), so the
total number of pops across all events is at most the number of pushes. A huge
negative event never costs more than the packages it actually removes.

## Complexity

- Time: O(n) — every event does O(1) work plus pops that are paid for by earlier pushes.
- Space: O(n) for the belt.

## Code (Python)

```python
from collections import deque


def conveyor_belt_log(events):
    belt = deque()
    for e in events:
        if e > 0:
            belt.append(e)
        elif e == 0:
            if belt:
                belt.pop()
        else:
            for _ in range(min(-e, len(belt))):
                belt.popleft()
    return list(belt)
```
