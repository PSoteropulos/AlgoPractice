# Spaced Banner Arrangements — Reference Solution

## Approach

Count how many flags of each color remain (`counts`). Build the row one
position at a time: at each step try every color that still has flags left
and differs from the previous color, decrement its count, recurse, then
restore it. Because we branch on *colors* rather than on individual flags,
identical flags never produce duplicate rows, so every leaf reached with all
flags placed is a distinct valid arrangement and no set/dedup is needed.
Branches that would place an equal neighbor are pruned immediately.

## Complexity

- Time: O(A) where A is the number of valid arrangements (at most `n!/(∏ cᵢ!)`, ≤ 9! = 362,880), times O(k) per step for `k ≤ 26` colors.
- Space: O(n + k) for the recursion stack and the counts.

Follow-up: memoize on `(counts tuple, last color)` to count rather than
enumerate; the state space is at most `∏(cᵢ+1) · k`, which handles n = 16
easily.

## Code (Python)

```python
from collections import Counter


def count_arrangements(tiles: str) -> int:
    counts = Counter(tiles)
    colors = list(counts)
    n = len(tiles)

    def dfs(placed: int, last: str) -> int:
        if placed == n:
            return 1
        total = 0
        for c in colors:
            if c != last and counts[c] > 0:
                counts[c] -= 1
                total += dfs(placed + 1, c)
                counts[c] += 1
        return total

    return dfs(0, "")
```
