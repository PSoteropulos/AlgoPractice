# Reference Solution: Beacon Array Maximum Signal

## Approach

This is the classic "maximum XOR of a subset" problem, solved with a
**linear basis over GF(2)** (a XOR analogue of Gaussian elimination).

Think of each integer as a vector of bits. We want to know, over the vector
space spanned by `beacons` under XOR, which non-zero combination of basis
vectors yields the largest value. Two facts make this tractable:

1. **Building a basis incrementally.** Process beacons one at a time,
   maintaining a list `basis` of vectors, kept sorted in decreasing order,
   with the invariant that each vector in `basis` cannot be reduced further
   by any other vector already in `basis` (i.e., each has a distinct
   "leading" bit not shared by any vector before it). To insert a new value
   `x`: repeatedly XOR it with the largest basis vector `b` whenever doing
   so decreases its value (`x ^ b < x`) — this cancels out `x`'s leading bit
   using `b`'s leading bit. If what remains is non-zero, it's independent of
   the current basis, so append it (and re-sort). If it reduces to zero, `x`
   was already representable by the existing basis and contributes nothing
   new.

2. **Extracting the maximum.** Once the basis is built, greedily combine
   basis vectors from largest to smallest into a running result `res`,
   taking each one whenever XOR-ing it in increases `res`. Because the
   basis vectors have distinct leading bits (highest bit first after the
   reduction above), greedily setting each available leading bit whenever
   it isn't already set in `res` is always optimal — it can never conflict
   with a choice made for a higher bit.

Since `beacons` is non-empty and every basis vector by construction comes
from XOR-ing together some non-empty subset of the original array, the
maximum value produced this way is exactly the answer to "maximum XOR of a
non-empty subset" (the empty subset, which trivially XORs to `0`, is never
better than any non-zero basis combination unless the array itself only
contains combinations that cancel to `0` — but then activating any single
beacon still gives a value `>= 0`, and the basis/greedy process above
already accounts for that beacon when it's the only source of a bit).

```python
from typing import List


def max_beacon_signal(beacons: List[int]) -> int:
    basis: List[int] = []
    for x in beacons:
        cur = x
        for b in basis:
            cur = min(cur, cur ^ b)
        if cur != 0:
            basis.append(cur)
            basis.sort(reverse=True)

    result = 0
    for b in basis:
        if (result ^ b) > result:
            result ^= b
    return result
```

### Worked check against the examples

- `[3, 10, 5, 25, 2, 8]` → basis reduces to `{31, 12, 8, ...}`-style
  independent vectors that greedily combine to `31` (achieved concretely by
  `3 XOR 5 XOR 25 = 31`). ✓
- `[6, 6, 6]` → the second and third `6` each reduce to `0` against the
  basis (already spanned by the first `6`), so the basis is just `{6}` and
  the answer is `6`. ✓
- `[42]` → basis is `{42}`, answer `42`. ✓

## Complexity

- **Time:** `O(n * B)`, where `n = beacons.length` and `B` is the bit width
  of the values (`B = 31` here, since `beacons[i] < 2^31`). Each of the `n`
  insertions reduces against at most `B` basis vectors (the basis never
  holds more than `B` independent vectors), and the final greedy extraction
  is another `O(B)` pass.
- **Space:** `O(B)` for the basis, independent of `n`.

### Follow-up sketch

The basis has some rank `r <= B` (the number of independent vectors kept).
Every one of the `2^r` XOR combinations of basis vectors is achievable by
*some* subset of the original `n` beacons, including the empty one (a
standard linear-algebra fact: subset-XOR reachability is exactly span
membership). Whether the empty subset is the *only* one that reaches `0`
depends on whether `n > r`: if it is (at least one beacon was "absorbed" —
reduced to `0` — during basis construction, i.e. the beacons are not all
linearly independent), then a genuine non-empty dependency exists and every
value in the span, `0` included, is also reachable by a non-empty subset —
so the count of distinct achievable combined signals is `2^r`. If instead
`n == r` (every beacon is linearly independent, so none is even `0`), the
empty subset is the unique subset reaching `0`, and the count of distinct
values reachable by non-empty subsets is `2^r - 1`. Either way, the count
falls straight out of the basis's rank `r` — no enumeration of subsets
required.
