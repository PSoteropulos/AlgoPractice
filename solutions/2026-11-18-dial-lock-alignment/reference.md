# Dial Lock Alignment — Reference Solution

## Approach

After `k` left turns (`0 <= k < n`) the dial reads `ring[k:] + ring[:k]`.
Since `n` left turns bring the dial back to the start, `k` left turns lands
on the same position as `n - k` right turns. So every dial position `k` that
reads `target` costs `min(k, n - k)` moves, and the answer is the minimum of
that over all matching `k` (or `-1` if none match).

Every rotation of `ring` appears as a length-`n` window of the doubled string
`ring + ring`: the window starting at index `k` is exactly
`ring[k:] + ring[:k]`. So the question becomes: **at which start indices
`k < n` does `target` occur in `ring + ring`?**

Finding all occurrences of a pattern in a text in linear time is a job for
KMP (or the Z-function). Build the KMP failure table for `target`, then scan
`ring + ring` (only the first `2n - 1` characters are needed, so that start
indices stay below `n`). Each time a full match ends at text index `i`, the
match starts at `k = i - n + 1`; record `min(k, n - k)`.

Repeated patterns in `ring` (Example 2) produce several matches, which is
why we must examine all of them instead of stopping at the first.

Common pitfalls:

- Returning the first match's `k` (the left-turn count) without considering
  that turning right may be cheaper.
- Stopping at the first match — a later match can be cheaper via right turns.
- Checking only that `ring` and `target` are anagrams; rotation preserves
  cyclic order, not just letter counts (Example 3).

## Python

```python
def min_dial_rotations(ring: str, target: str) -> int:
    n = len(ring)
    if len(target) != n:
        return -1

    # KMP failure table: fail[i] = length of the longest proper prefix of
    # target[:i + 1] that is also a suffix of it.
    fail = [0] * n
    j = 0
    for i in range(1, n):
        while j > 0 and target[i] != target[j]:
            j = fail[j - 1]
        if target[i] == target[j]:
            j += 1
        fail[i] = j

    best = -1
    j = 0
    for i in range(2 * n - 1):
        c = ring[i % n]  # character i of ring + ring, without building it
        while j > 0 and c != target[j]:
            j = fail[j - 1]
        if c == target[j]:
            j += 1
        if j == n:
            k = i - n + 1  # number of left turns for this match
            cost = min(k, n - k)
            if best == -1 or cost < best:
                best = cost
            j = fail[j - 1]
    return best
```

## Complexity

- **Time:** `O(n)` — building the failure table is `O(n)` and the KMP scan
  over `2n - 1` characters is `O(n)` amortized.
- **Space:** `O(n)` for the failure table (the doubled string is never
  materialized).

## Alternative

The Z-function on `target + "#" + ring + ring` finds the same match
positions in `O(n)`: index `k` of the rotation matches whenever the Z-value
at offset `n + 1 + k` is at least `n`.
