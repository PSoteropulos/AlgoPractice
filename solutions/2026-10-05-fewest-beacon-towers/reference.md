# Reference: Fewest Beacon Towers

## Approach

Sort the houses. Repeatedly take the leftmost house `x` that is not yet
served. Some tower must serve it, and that tower sits at a house position
`p` in `[x - r, x + r]`. Every house left of `x` is already served, so the
best choice is the **rightmost** house position `p <= x + r`: it reaches
furthest right (`p + r`) and loses nothing on the left. Build it, then skip
all houses `<= p + r`. An exchange argument shows any optimal solution can
swap its tower for this one without uncovering anything.

Two pointers: `j` finds the farthest house within `x + r`, `i` then skips past
`p + r`. Each pointer only moves forward.

## Solution (Python)

```python
from typing import List


def fewest_beacon_towers(houses: List[int], r: int) -> int:
    hs = sorted(houses)
    n = len(hs)
    i = towers = 0
    while i < n:
        limit = hs[i] + r
        j = i
        while j + 1 < n and hs[j + 1] <= limit:
            j += 1
        reach = hs[j] + r
        towers += 1
        i = j + 1
        while i < n and hs[i] <= reach:
            i += 1
    return towers


if __name__ == "__main__":
    cases = [
        ([1, 2, 3, 4, 5], 1, 2),
        ([1, 5, 9], 2, 3),
        ([7, 3, 1, 10, 4, 12, 8], 3, 2),
        ([42], 0, 1),
        ([5, 5, 5], 0, 1),
        ([3, 1, 2], 0, 3),
        ([1000000000, 0, 500000000], 1000000000, 1),
    ]
    for h, r, e in cases:
        print("PASS" if fewest_beacon_towers(h, r) == e else "FAIL", h, r, e)
```

## Complexity

- Time: `O(n log n)` for the sort, `O(n)` for the sweep.
- Space: `O(n)` for the sorted copy (`O(1)` extra if sorting in place).
