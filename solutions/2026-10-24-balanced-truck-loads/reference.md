# Balanced Truck Loads — Reference Solution

## Approach

Assign crates one at a time with backtracking, tracking the current load of
each truck. Sort the weights in descending order so heavy crates are placed
first and bad branches die early. Keep a global best (initially one more than the
sum of all weights) and prune:

- If placing a crate would make a truck's load `>= best`, skip that truck.
- If several trucks currently have the same load, trying more than one of them
  is redundant (symmetry), so only try the first of each distinct load. In
  particular, only one empty truck is ever tried.

When all crates are placed, the maximum truck load is a new best (pruning
guarantees it is strictly smaller than the previous best).

```python
from typing import List


def min_max_truck_load(weights: List[int], k: int) -> int:
    ws = sorted(weights, reverse=True)
    loads = [0] * k
    best = sum(ws) + 1  # sentinel: any real assignment beats it

    def place(i: int) -> None:
        nonlocal best
        if i == len(ws):
            best = max(loads)
            return
        seen = set()
        for t in range(k):
            if loads[t] in seen or loads[t] + ws[i] >= best:
                continue
            seen.add(loads[t])
            loads[t] += ws[i]
            place(i + 1)
            loads[t] -= ws[i]

    place(0)
    return best


if __name__ == "__main__":
    print(min_max_truck_load([3, 5, 2, 7], 2))  # 9
```

`best` starts at `sum + 1` so that even the all-on-one-truck assignment (load
equal to the sum) passes the `>= best` prune and counts as a first solution.

## Complexity

- Time: worst case `O(k^n)`, but with sorting, the bound prune and the
  symmetry prune it is fast for `n <= 12`.
- Space: `O(n + k)` for the recursion and the loads.
