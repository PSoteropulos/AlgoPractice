# Coprime Storage Bins

**Difficulty:** Hard
**Topic:** Math / Number Theory (Bitmask DP)

## Description

A chemical storage room holds `n` samples, numbered `0` to `n - 1`. Sample
`i` is labeled with a positive integer batch code `batchCodes[i]`.

Two samples are **incompatible** if their batch codes share a common prime
factor — equivalently, if `gcd(batchCodes[i], batchCodes[j]) > 1`. Safety
rules require that no two incompatible samples ever be placed in the same
storage bin: every pair of samples sharing a bin must have a `gcd` of
exactly `1` (they must be **pairwise coprime**). A bin may hold any number
of samples as long as this rule holds for every pair inside it, and every
sample must be placed in exactly one bin.

Given the array `batchCodes`, return the **minimum number of bins** needed
to store all `n` samples without violating the safety rule.

## Examples

### Example 1

```
batchCodes = [6, 10, 15]
Output: 3
```

**Explanation:** `gcd(6, 10) = 2`, `gcd(6, 15) = 3`, and `gcd(10, 15) = 5` —
every pair is incompatible, so no two of the three samples can ever share a
bin. Each sample needs its own bin, for a minimum of `3`.

### Example 2

```
batchCodes = [4, 9, 25, 6]
Output: 2
```

**Explanation:** `4 = 2^2`, `9 = 3^2`, `25 = 5^2`, `6 = 2 * 3`. Sample `6` is
incompatible with both `4` (shared factor `2`) and `9` (shared factor `3`),
but `4`, `9`, and `25` are pairwise coprime with each other. Placing
`{4, 9, 25}` in one bin and `{6}` alone in a second bin satisfies the rule,
and one bin is not enough since `6` conflicts with two of the other three
samples. Minimum is `2`.

### Example 3

```
batchCodes = [2, 4, 8, 16]
Output: 4
```

**Explanation:** Every value here is a power of `2`, so every pair shares
the factor `2` and is incompatible with every other pair. No two samples
can ever share a bin, so each of the `4` samples needs its own bin.

## Constraints

- `1 <= batchCodes.length <= 16`
- `2 <= batchCodes[i] <= 10^6`

## Follow-up

The problem only asks for the minimum *count* of bins. Can you extend your
solution to also reconstruct one concrete assignment of samples to bins
that achieves that minimum, not just report the number?
