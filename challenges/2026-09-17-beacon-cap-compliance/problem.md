# Beacon Cap Compliance

**Difficulty:** Easy
**Topic:** Bit Manipulation

## Description

A relay tower enforces a maximum broadcast capability, given as a
non-negative integer `cap`. Each bit that is set in `cap` represents one
channel the tower has enabled.

A fleet of drones each broadcast using a **power signature** — a
non-negative integer whose set bits represent the channels that drone
attempts to use. A drone is **cap-compliant** if it never attempts to use a
channel the tower hasn't enabled: every bit set in the drone's signature
must also be set in `cap`. Formally, a power signature `p` is compliant
exactly when `p & cap == p`.

Given `cap` and a list `powers` of `n` drone power signatures, return two
values:

1. The number of compliant drones.
2. The maximum power signature among the compliant drones, or `-1` if no
   drone is compliant.

## Examples

### Example 1

```
Input: cap = 6, powers = [2, 4, 6, 7, 1]
Output: [3, 6]
```
Explanation: In binary, `cap = 110`. `2 = 010`, `4 = 100`, and `6 = 110`
are each a subset of `cap`'s bits, so they're compliant. `7 = 111` uses
bit 0, which `cap` doesn't enable, so it's not compliant; neither is
`1 = 001` for the same reason. That leaves 3 compliant drones, the largest
being `6`.

### Example 2

```
Input: cap = 0, powers = [0, 0, 0]
Output: [3, 0]
```
Explanation: With `cap = 0`, only a signature of `0` can be compliant
(`0 & 0 == 0`). All three drones qualify, and the maximum among them is
`0`.

### Example 3

```
Input: cap = 5, powers = [8, 16]
Output: [0, -1]
```
Explanation: `cap = 00101` in binary. `8 = 01000` and `16 = 10000` each set
a bit that `cap` doesn't have, so neither is compliant. With zero compliant
drones, the maximum is reported as `-1`.

## Constraints

- `1 <= powers.length <= 10^5`
- `0 <= powers[i] <= 10^9`
- `0 <= cap <= 10^9`

## Follow-up

Suppose the same `powers` array receives many queries, each with a
different `cap`. A single pass per query is already `O(n)` and, since an
adversarial `cap` can force you to inspect every drone, that's optimal in
the worst case for a single query considered in isolation. But if you know
all the queries in advance, or values are bounded to a small number of
bits, can you preprocess `powers` (for example, into a bitwise trie over
each signature's bits) to answer each query faster than rescanning the
whole array from scratch?
