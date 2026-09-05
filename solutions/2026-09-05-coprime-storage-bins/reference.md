# Reference Solution: Coprime Storage Bins

## Approach

Model the samples as vertices of a graph, with an edge between `i` and `j`
whenever `gcd(batchCodes[i], batchCodes[j]) > 1` (an "incompatibility"
edge). A bin is only valid if the samples inside it form an **independent
set** in this graph — no two of them are joined by an edge. Partitioning
all `n` samples into the fewest bins that each satisfy this is exactly the
**graph coloring** problem: the answer is the graph's chromatic number.

Chromatic number is NP-hard in general, but `n <= 16` makes an exact
**bitmask DP over subsets** fast enough:

1. **Build the adjacency bitmasks.** For each sample `i`, compute `adj[i]`,
   a bitmask whose bit `j` is set exactly when `i != j` and
   `gcd(batchCodes[i], batchCodes[j]) > 1`. This only needs an `O(n^2)` pass
   of `gcd` calls — factoring the numbers explicitly is unnecessary since
   `gcd` already detects a shared prime factor.

2. **Precompute which subsets are independent.** For every bitmask `mask`
   from `0` to `2^n - 1`, `independent[mask]` should be `true` iff every
   pair of samples in `mask` is pairwise coprime. This is computed with a
   simple DP: let `i` be the lowest set bit of `mask` and `rest = mask`
   with bit `i` removed; then `mask` is independent iff `rest` is
   independent *and* `i` has no neighbor inside `rest`
   (`adj[i] & rest == 0`). Base case: the empty mask is trivially
   independent. This pass is `O(2^n)`.

3. **DP over subset covers.** Let `dp[mask]` be the minimum number of bins
   needed to store exactly the samples in `mask`. `dp[0] = 0`. For a
   non-empty `mask`, fix `i` as its lowest set bit — some bin in the
   optimal partition must contain sample `i`, and that bin's contents form
   some independent subset `sub` of `mask` that includes bit `i`. Trying
   every such `sub` (enumerated via the standard "submask of `mask`"
   iteration, filtered to the ones containing bit `i` and marked
   independent) gives:

   `dp[mask] = 1 + min( dp[mask XOR sub] )` over all independent `sub` with
   `sub ⊆ mask` and bit `i` set in `sub`.

   Restricting to submasks that contain the fixed lowest bit `i` (instead
   of trying every independent submask of `mask`) avoids counting the same
   partition multiple times and keeps the enumeration correct: every
   partition of `mask` has exactly one bin containing `i`, so trying each
   candidate for that one bin and recursing on the rest covers every
   partition exactly once.

4. The answer is `dp[(1 << n) - 1]`.

```python
import math
from typing import List


def min_storage_bins(batch_codes: List[int]) -> int:
    n = len(batch_codes)
    adj = [0] * n
    for i in range(n):
        for j in range(n):
            if i != j and math.gcd(batch_codes[i], batch_codes[j]) > 1:
                adj[i] |= 1 << j

    independent = [False] * (1 << n)
    independent[0] = True
    for mask in range(1, 1 << n):
        i = (mask & -mask).bit_length() - 1
        rest = mask & ~(1 << i)
        independent[mask] = independent[rest] and (adj[i] & rest) == 0

    full = (1 << n) - 1
    dp = [n + 1] * (1 << n)
    dp[0] = 0
    for mask in range(1, 1 << n):
        i = (mask & -mask).bit_length() - 1
        sub = mask
        while True:
            if (sub >> i) & 1 and independent[sub]:
                dp[mask] = min(dp[mask], 1 + dp[mask ^ sub])
            if sub == 0:
                break
            sub = (sub - 1) & mask
    return dp[full]
```

### Worked check against the examples

- `[6, 10, 15]` → every pair shares a prime (`2`, `3`, `5` respectively), so
  the conflict graph is a triangle. No two samples can ever share a bin, so
  `dp` correctly bottoms out at `3`. ✓
- `[4, 9, 25, 6]` → conflict edges are only `4–6` (shared `2`) and `9–6`
  (shared `3`); `25` is isolated. The independent set `{4, 9, 25}` (mask
  covering those three indices) is valid since none of those three share a
  factor, leaving `{6}` for a second bin — `dp` finds `2`. ✓
- `[2, 4, 8, 16]` → all four share the factor `2`, so the conflict graph is
  complete (`K4`); no independent subset has more than one element, forcing
  `dp` to `4`. ✓

## Complexity

- **Time:** `O(n^2)` to build the adjacency masks (each `gcd` call is
  `O(log(max(batchCodes)))`), plus `O(2^n)` for the independence table and
  `O(3^n)` in the worst case for the subset-cover DP, since summing the
  number of submasks of every mask over all `2^n` masks is `sum_mask
  2^popcount(mask) = 3^n`. With `n <= 16`, `3^16 ≈ 43` million elementary
  operations, comfortably fast.
- **Space:** `O(2^n)` for the `independent` and `dp` tables.

### Follow-up sketch

To recover an actual assignment, keep a parallel table `choice[mask]`
storing whichever `sub` achieved the minimum for `dp[mask]` during the DP
above. Once `dp[full]` is computed, repeatedly look up `choice[mask]`
starting from `mask = full`: each lookup yields one bin's contents (`sub`),
and recursing on `mask XOR sub` yields the rest, until `mask` reaches `0`.
This reconstructs one optimal partition in `O(n)` additional steps after
the DP has already run, at the cost of `O(2^n)` extra storage for
`choice`.
