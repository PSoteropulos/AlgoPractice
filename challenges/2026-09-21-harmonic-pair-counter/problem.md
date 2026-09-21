# Harmonic Pair Counter

**Difficulty:** Medium
**Topic:** Math / Number Theory

## Description

A radio observatory logs the resonance frequency of every antenna in its
array as a positive integer, stored in `freq`. Two antennas `i` and `j`
(`i < j`) are said to form a **harmonic pair** if the greatest common
divisor of their frequencies is *exactly* equal to a given target value
`k` — not merely a multiple of `k`, and not merely divisible by it.

Given the array `freq` and the integer `k`, return the total number of
index pairs `(i, j)` with `i < j` that form a harmonic pair.

A brute-force check of every pair works but is too slow for large arrays;
aim for a solution that scales well with both the length of `freq` and the
magnitude of its values, rather than one whose cost grows with the number
of pairs.

Function signature: `count_harmonic_pairs(freq: List[int], k: int) -> int`

## Examples

### Example 1

```
Input:  freq = [4, 6, 8, 10, 3], k = 2
Output: 5
```

**Explanation:** The 10 possible pairs have gcds: `gcd(4,6)=2`,
`gcd(4,8)=4`, `gcd(4,10)=2`, `gcd(4,3)=1`, `gcd(6,8)=2`, `gcd(6,10)=2`,
`gcd(6,3)=3`, `gcd(8,10)=2`, `gcd(8,3)=1`, `gcd(10,3)=1`. Exactly five of
them equal `2`: `(4,6)`, `(4,10)`, `(6,8)`, `(6,10)`, `(8,10)`. The pair
`(4,8)` is excluded even though `4` divides both, because their gcd is `4`,
not `2`.

### Example 2

```
Input:  freq = [2, 4, 8, 16], k = 4
Output: 2
```

**Explanation:** Every value here is a power of two, so every pair's gcd
is also a power of two. `gcd(2,4)=2`, `gcd(2,8)=2`, `gcd(2,16)=2`,
`gcd(4,8)=4`, `gcd(4,16)=4`, `gcd(8,16)=8`. Only `(4,8)` and `(4,16)` hit
`gcd == 4` exactly, so the answer is `2`.

### Example 3

```
Input:  freq = [5, 7, 11], k = 5
Output: 0
```

**Explanation:** `5`, `7`, and `11` are pairwise coprime primes, so every
pairwise gcd is `1`. None equal the target `k = 5`, so no harmonic pairs
exist.

## Constraints

- `2 <= freq.length <= 2 * 10^5`
- `1 <= freq[i] <= 5 * 10^4`
- `1 <= k <= 5 * 10^4`
- The returned count must fit in a 64-bit signed integer.

## Follow-up

Suppose the observatory instead asks `Q` queries against the same `freq`
array, each with a different target `k`, and wants every query answered.
How would you preprocess `freq` once so that each additional query costs
much less than repeating the full computation from scratch? What's the
total time complexity of answering all `Q` queries with your approach,
in terms of `n = freq.length`, `V = max(freq)`, and `Q`?
