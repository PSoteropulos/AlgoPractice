# Plateau Peak Total — Reference Solution

## Approach

Scan left to right, extracting one plateau at a time. For a plateau spanning
indices `i..j` (maximal run of equal values), its only neighbors are `h[i-1]`
(if `i > 0`) and `h[j+1]` (if `j < n-1`). The plateau is a peak when each
existing neighbor is strictly lower. If so, add `j - i + 1` to the total, then
continue from `j + 1`. Because each index is visited once as part of exactly
one plateau, the scan is linear and needs no auxiliary list.

## Complexity

- Time: O(n)
- Space: O(1)

## Code (Python)

```python
from typing import List


def peak_plateau_total(h: List[int]) -> int:
    n = len(h)
    total = 0
    i = 0
    while i < n:
        j = i
        while j + 1 < n and h[j + 1] == h[i]:
            j += 1
        left_ok = i == 0 or h[i - 1] < h[i]
        right_ok = j == n - 1 or h[j + 1] < h[i]
        if left_ok and right_ok:
            total += j - i + 1
        i = j + 1
    return total
```
