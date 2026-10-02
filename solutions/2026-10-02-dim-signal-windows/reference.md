# Dim Signal Windows — Reference Solution

## Approach

Let `P[i]` be the XOR of the first `i` readings (`P[0] = 0`). The signature
of the window covering readings `i..j-1` is `P[j] ^ P[i]`. So we need to
count index pairs `i < j` where `P[j] ^ P[i]` is `0` or a power of two.

For each `j`, the prefix values `P[i]` that work are exactly
`P[j]` itself and `P[j] ^ (1 << c)` for `c` in `0..29` — 31 candidates.
Keep a hash map from prefix value to how many times it has been seen so
far, and for each new prefix add up the counts of those 31 candidates, then
record the new prefix. Each pair is counted once, when its later endpoint
is processed.

Time is `O(31 * n)`, i.e. `O(n log V)` with `V = 2^30`; space is `O(n)` for
the map. The total can reach about `n(n+1)/2 ≈ 2 * 10^10`, so use a 64-bit
counter in fixed-width languages.

```python
from collections import defaultdict
from typing import List


def count_dim_windows(nums: List[int]) -> int:
    seen = defaultdict(int)
    seen[0] = 1  # empty prefix
    prefix = 0
    total = 0
    for x in nums:
        prefix ^= x
        total += seen[prefix]
        for c in range(30):
            total += seen[prefix ^ (1 << c)]
        seen[prefix] += 1
    return total
```

Note: `seen` is a `defaultdict`, so lookups of absent keys insert zero
entries; use `seen.get(key, 0)` if you want to keep the map small.
