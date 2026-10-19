# Harmonic Shift Totals — Reference Solution

## Approach

Let `P[i]` be the sum of the first `i` deltas (`P[0] = 0`). The segment
covering hours `i..j-1` has sum `P[j] - P[i]`, which is divisible by `k` exactly
when `P[i] mod k == P[j] mod k`. Counting such pairs with a hash map of
remainder frequencies gives the answer for segments of any length.

To require length at least 2 we need `j - i >= 2`. So when processing prefix
`j`, only prefixes `P[0..j-2]` may be matched: we insert `P[j-2] mod k` into the
map *just before* querying `P[j] mod k`. Prefix `P[j-1]` is inserted one step
later. Remainders are normalized with a non-negative modulo (Python's `%` does
this already; other languages need `((x % k) + k) % k`) and the count is held
in a 64-bit integer.

```python
from collections import defaultdict
from typing import List


def count_balanced_segments(deltas: List[int], k: int) -> int:
    n = len(deltas)
    prefix = [0] * (n + 1)
    for i, d in enumerate(deltas):
        prefix[i + 1] = (prefix[i] + d) % k
    seen = defaultdict(int)
    total = 0
    for j in range(2, n + 1):
        seen[prefix[j - 2]] += 1
        total += seen[prefix[j]]
    return total


if __name__ == "__main__":
    assert count_balanced_segments([4, 5, 0, -2, -3, 1], 5) == 5
    assert count_balanced_segments([2, 2, 2], 2) == 3
    assert count_balanced_segments([-7, 3, 4, -5, 5], 5) == 4
    assert count_balanced_segments([3], 7) == 0
    print("ok")
```

## Complexity

- Time: `O(n)` — one pass to build prefix remainders, one pass with `O(1)`
  expected hash operations.
- Space: `O(min(n, k))` for the frequency map (plus `O(n)` for the prefix array,
  which can be avoided by keeping a rolling remainder and a two-step delay).
