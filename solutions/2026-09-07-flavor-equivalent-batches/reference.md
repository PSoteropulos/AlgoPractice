# Reference Solution: Flavor-Equivalent Batches

## Approach

Two batches are flavor-equivalent exactly when they contain the same
multiset of ingredient IDs, regardless of order. The key insight is to pick
a **canonical signature** for each batch such that two batches are
flavor-equivalent if and only if their signatures are identical — then a
hash map from signature to group size does all the grouping work in a
single pass:

1. For each batch, sort its ingredient IDs and turn the sorted sequence
   into a hashable key (a tuple in Python, or a joined string in
   TypeScript). Sorting canonicalizes the order, so any permutation of the
   same multiset produces exactly the same key.
2. Look up the key in a hash map and increment its count (or insert it with
   count `1` if it's new). This hash map's keys are exactly the distinct
   flavor groups, and each value is that group's size.
3. Once every batch has been processed, `totalGroups` is simply the number
   of keys in the map, and `largestGroupSize` is the maximum value stored.

```python
from typing import List


def flavor_equivalent_batches(batches: List[List[int]]) -> List[int]:
    counts = {}
    for batch in batches:
        key = tuple(sorted(batch))
        counts[key] = counts.get(key, 0) + 1
    return [max(counts.values()), len(counts)]
```

### Worked check against the examples

- `[[1,2,3],[3,2,1],[4,5]]` → sorted keys: `(1,2,3)`, `(1,2,3)`, `(4,5)`.
  The map ends up as `{(1,2,3): 2, (4,5): 1}`, so `largestGroupSize = 2`
  and `totalGroups = 2` → `[2, 2]`. ✓
- `[[1,1,2],[1,2,1],[2,1,1],[1,2]]` → sorted keys: `(1,1,2)`, `(1,1,2)`,
  `(1,1,2)`, `(1,2)`. The map is `{(1,1,2): 3, (1,2): 1}`, giving
  `[3, 2]`. Note `(1,1,2)` and `(1,2)` are different keys because one has
  two `1`s and the other has only one — sorting preserves duplicate counts,
  so it never conflates batches with different multisets. ✓
- `[[7]]` → one key `(7,)` with count `1` → `[1, 1]`. ✓

Edge cases: batches that are element-wise identical but reordered
(`[1,2]`, `[2,1]`, `[1,2]`) all sort to the same key `(1,2)`, correctly
forming one group of size `3`. Batches that share every distinct value but
differ in multiplicity (`[1,1]` vs `[1]`) sort to different keys
(`(1,1)` vs `(1,)`), correctly landing in separate groups of size `1` each
— confirming that sorting captures both *which* IDs are present and *how
many times*, which is exactly the flavor-equivalence rule.

## Complexity

- **Time:** `O(S log L_max)` overall, where `S` is the sum of all batch
  lengths and `L_max` is the longest single batch (`<= 20`): each batch of
  length `L` costs `O(L log L)` to sort, and hashing/inserting the
  resulting key costs `O(L)`. Summed across all batches this is
  `O(S log L_max)`, which is effectively linear in the input size since
  `L_max` is small and constant-bounded here.
- **Space:** `O(S)` for storing one canonical key per distinct batch (the
  hash map holds at most `n` keys, each of size up to `L_max`).

### Follow-up sketch

Since ingredient IDs are bounded by `10^6`, each batch can be canonicalized
in `O(L)` time without sorting: build a frequency map of `{id: count}` for
the batch, then convert that into a stable, order-independent string (e.g.
sort only the *distinct* IDs that appear — typically far fewer than `L` —
and join `id:count` pairs), or combine `id` and `count` pairs into a single
polynomial/rolling hash accumulated in one pass. Either approach drops the
per-batch cost from `O(L log L)` to `O(L)` (or `O(D log D)` where `D` is the
number of distinct IDs in that batch, if a deterministic string key is
still wanted), which matters once batch lengths grow much larger than the
`20` cap used in this version of the problem.
