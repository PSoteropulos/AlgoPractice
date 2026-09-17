# Reference Solution: Beacon Cap Compliance

## Approach

This is a direct application of the **subset-of-bits** test via bitwise AND.
A power signature `p` is compliant with `cap` exactly when every bit set in
`p` is also set in `cap`. That's equivalent to saying `p` is a *submask* of
`cap`, which can be checked in one bitwise operation:

```
p is compliant  <=>  p & cap == p
```

Why this works: `p & cap` keeps only the bits that are set in **both** `p`
and `cap`. If the result equals `p` itself, then no bit of `p` was
"dropped" by the AND — meaning every bit of `p` was already present in
`cap`. If `p` has any bit that `cap` lacks, that bit gets zeroed out by the
AND, so `p & cap` comes out strictly smaller than `p` (as an integer), and
the equality fails.

Given that test, the rest is a single linear pass: walk `powers` once,
count how many pass the test, and track the maximum among the passing
values (starting from a sentinel of `-1` to represent "none found").

## Reference implementation (Python)

```python
from typing import List, Tuple


def cap_compliance(cap: int, powers: List[int]) -> Tuple[int, int]:
    count = 0
    best = -1
    for p in powers:
        if p & cap == p:
            count += 1
            if p > best:
                best = p
    return count, best
```

## Walkthrough on Example 1

`cap = 6` is `110` in binary.

| p | binary | p & cap | equals p? | compliant |
| - | - | - | - | - |
| 2 | 010 | 010 | yes | yes |
| 4 | 100 | 100 | yes | yes |
| 6 | 110 | 110 | yes | yes |
| 7 | 111 | 110 | no  | no |
| 1 | 001 | 000 | no  | no |

Three drones (`2`, `4`, `6`) are compliant, and the largest of the three is
`6`. That matches the expected output `[3, 6]`.

## Complexity

- **Time:** `O(n)` — one pass over `powers`, with an `O(1)` bitwise check
  per element.
- **Space:** `O(1)` beyond the input, since only a running count and a
  running maximum are tracked.

## Follow-up notes

For a single query, `O(n)` is optimal in the worst case: an adversary can
always set the last element's bits to decide compliance, forcing a full
scan.

If many queries share the same `powers` array, one option is to build a
**bitwise trie** (binary trie) over the fixed set of `powers` values, with
each node also storing the count and max of values in its subtree. For a
given `cap`, a signature `p` is compliant iff, walking `p`'s bits from the
most significant bit down, we never take a "1" branch at a bit position
where `cap` has a "0" — because that would set a bit `cap` doesn't allow.
This lets a query prune whole subtrees of the trie (all values sharing a
disallowed high bit are rejected at once) rather than checking every value
individually, which is a real win when a `cap` has many high bits
disabled — though in the worst case (e.g. `cap` with only its lowest bit
disabled) it can still touch most of the trie. This is a classic
space/time trade-off: `O(n)` preprocessing once, in exchange for
potentially sub-linear (though not worst-case-guaranteed sub-linear)
per-query cost afterward.
