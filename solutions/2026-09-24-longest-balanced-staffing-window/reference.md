# Reference Solution: Longest Balanced Staffing Window

## Approach

This is the classic **"longest subarray summing to zero"** pattern, solved
with a **hash map of prefix sums to their first occurrence index**.

1. Define `prefix[i]` as the sum of `changes[0..i-1]` (so `prefix[0] = 0`,
   before any minutes have elapsed).
2. A contiguous window `changes[j..i-1]` sums to exactly `0` if and only if
   `prefix[i] == prefix[j]`. Its length is `i - j`.
3. To maximize that length for a fixed `i`, we want the **smallest** `j`
   with a matching prefix sum — i.e. the *first* time that prefix value was
   ever seen. So walk the array once, keeping a running `prefix` total and
   a hash map `firstSeen` from prefix value to the earliest index it
   appeared at (seeded with `firstSeen[0] = -1`, representing "before the
   array starts").
4. At each index `i`, add `changes[i]` to `prefix`. If `prefix` is already
   in `firstSeen`, the window from `firstSeen[prefix] + 1` to `i`
   (inclusive) is balanced; update `best = max(best, i - firstSeen[prefix])`.
   Otherwise, record `firstSeen[prefix] = i` (only the *first* sighting is
   ever useful for maximizing length, so later sightings of the same sum
   are never stored).

```python
from typing import List


def longest_balanced_staffing_window(changes: List[int]) -> int:
    prefix = 0
    first_seen = {0: -1}
    best = 0
    for i, value in enumerate(changes):
        prefix += value
        if prefix in first_seen:
            best = max(best, i - first_seen[prefix])
        else:
            first_seen[prefix] = i
    return best
```

### Worked check against the examples

- `[3, -3, 4, -2, 2, -4]`: running prefixes (after each index, 0-indexed)
  are `3, 0, 4, 2, 4, 0`. Prefix `0` first appeared at the sentinel index
  `-1` and recurs at index `1` (window length `2`) and again at index `5`
  (window length `5 - (-1) = 6`, the whole array). Prefix `4` recurs at
  indices `2` and `4` (length `2`, not the max). Best overall: `6`. ✓
- `[1, -1, 1, -1, 5]`: prefixes are `1, 0, 1, 0, 5`. Prefix `0` recurs at
  index `3` against the sentinel `-1`, giving length `4`. Prefix `1`
  recurs at index `2` against its first sighting at index `0`, giving
  length `2` — smaller. Best: `4`. ✓
- `[2, 3, -1]`: prefixes are `2, 5, 4` — all distinct from each other and
  from the sentinel `0`, so no window ever balances. Best stays at its
  initial value `0`. ✓

Edge cases: a lone `0` entry immediately matches the sentinel (`prefix`
becomes `0` again at index `0`), giving a length-`1` balanced window. An
array with no zero-sum window at all (e.g. all-positive values) never
revisits any prefix value, so `best` correctly stays `0`.

## Complexity

- **Time:** `O(n)` — a single pass over `changes`, with `O(1)` amortized
  hash map lookups and insertions.
- **Space:** `O(n)` for the `firstSeen` map, which stores at most one
  entry per distinct prefix sum (plus the sentinel).

### Follow-up sketch

To also recover one longest balanced window as `[startIndex, endIndex]`,
track the best window's bounds alongside its length: whenever
`i - first_seen[prefix]` beats the current best, also record
`bestStart = first_seen[prefix] + 1` and `bestEnd = i`. No extra
bookkeeping in the hash map itself is needed — it still only needs to map
each prefix value to its *first* index, since that first index is exactly
what maximizes the window length (and therefore is always the right
`startIndex - 1` to report) whenever that prefix value recurs.
