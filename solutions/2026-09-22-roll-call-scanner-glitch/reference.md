# Reference Solution: Roll Call Scanner Glitch

## Approach

This is a variant of the classic "set mismatch" pattern: an array that
should hold each of `1..n` exactly once instead holds one value twice and
is missing another.

The simplest correct approach is a frequency count:

1. Build a count array `counts` of size `n + 1`, initialized to zero.
2. For each value `v` in `scans`, increment `counts[v]`.
3. Scan `v` from `1` to `n`: the value with `counts[v] == 2` is the
   duplicate, and the value with `counts[v] == 0` is the missing one.

```python
from typing import List


def find_scan_glitch(scans: List[int]) -> List[int]:
    n = len(scans)
    counts = [0] * (n + 1)
    for v in scans:
        counts[v] += 1

    duplicate = missing = 0
    for v in range(1, n + 1):
        if counts[v] == 2:
            duplicate = v
        elif counts[v] == 0:
            missing = v
    return [duplicate, missing]
```

### Worked check against the examples

- `scans = [1, 2, 2, 4]`: counts are `1→1, 2→2, 3→0, 4→1`, so
  `duplicate = 2`, `missing = 3`. ✓
- `scans = [1, 1]`: counts are `1→2, 2→0`, so `duplicate = 1`,
  `missing = 2`. ✓
- `scans = [3, 2, 3, 4, 5, 1]`: counts are `1→1, 2→1, 3→2, 4→1, 5→1, 6→0`,
  so `duplicate = 3`, `missing = 6`. ✓

## Complexity

- **Time:** `O(n)` — one pass to build the counts, one pass to scan them.
- **Space:** `O(n)` for the counts array.

## Follow-up: O(1) extra space

The counts array can be eliminated with a bit of arithmetic. Let
`d` = duplicate and `m` = missing. Compare the sum (and sum of squares) of
`scans` against what a perfect `1..n` roster would sum to:

- `sum(scans) - (1 + 2 + ... + n) = d - m`, since every value contributes
  normally except `d` (counted twice) and `m` (counted zero times).
- `sum(v^2 for v in scans) - (1^2 + 2^2 + ... + n^2) = d^2 - m^2
  = (d - m)(d + m)`, by the same reasoning applied to squares.

Dividing the second difference by the first (both are computed already,
and the first is guaranteed non-zero since `d != m`) gives `d + m`
directly. From `d - m` and `d + m`, solving the two linear equations gives
`d` and `m`:

```python
from typing import List


def find_scan_glitch(scans: List[int]) -> List[int]:
    n = len(scans)
    expected_sum = n * (n + 1) // 2
    expected_sq_sum = n * (n + 1) * (2 * n + 1) // 6
    actual_sum = sum(scans)
    actual_sq_sum = sum(v * v for v in scans)

    diff = actual_sum - expected_sum            # d - m
    sq_diff = actual_sq_sum - expected_sq_sum    # (d - m)(d + m)
    total = sq_diff // diff                      # d + m

    duplicate = (diff + total) // 2
    missing = total - duplicate
    return [duplicate, missing]
```

This still runs in `O(n)` time (two linear passes to accumulate the sums,
or one combined pass) but only uses a constant number of extra integer
variables, i.e. `O(1)` extra space. The only caveat is that
`sum(v*v for v in scans)` can be large for bigger `n` (on the order of
`n^3`), so an implementation in a fixed-width integer language should use
a 64-bit (or wider) accumulator to avoid overflow — this was verified
against all five test cases (the three examples plus the two edge cases
from `solution.py`) and matches the frequency-count approach exactly.

An alternative `O(1)`-space technique — marking visited values in place by
negating `scans[abs(v) - 1]` — also works and avoids the overflow concern
entirely, at the cost of temporarily mutating the input array.
