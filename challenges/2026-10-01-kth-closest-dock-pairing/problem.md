# Kth Closest Dock Pairing

**Difficulty:** Hard
**Topic:** Binary Search

## Description

A harbor has two straight piers. Pier A has docks at the positions listed
in `a`, and pier B has docks at the positions listed in `b`. Positions are
measured in meters along a shared coordinate line and may be negative.
The arrays are **not** guaranteed to be sorted, and values may repeat.

A *pairing* is any choice of one dock from A and one dock from B. Two
pairings are different if they use different indices, even when the
positions are equal. The *gap* of a pairing is the absolute distance
between its two docks, `|a[i] - b[j]|`. There are exactly `len(a) * len(b)`
pairings.

List the gaps of all pairings in non-decreasing order. Given an integer
`k` (1-indexed), return the `k`-th gap in that list. Duplicate gaps each
take up their own place in the list.

Because there can be up to `10^10` pairings, you cannot enumerate them.

## Examples

### Example 1

**Input:** `a = [8, 1, 4]`, `b = [6, 2]`, `k = 4`

**Output:** `2`

**Explanation:** The six gaps are `|8-6|=2`, `|8-2|=6`, `|1-6|=5`, `|1-2|=1`,
`|4-6|=2`, `|4-2|=2`. Sorted: `[1, 2, 2, 2, 5, 6]`. The 4th is `2`.

### Example 2

**Input:** `a = [5, 5]`, `b = [5]`, `k = 2`

**Output:** `0`

**Explanation:** Both pairings have gap `0`, so the sorted list is
`[0, 0]` and the 2nd entry is `0`.

### Example 3

**Input:** `a = [7, -3, 0]`, `b = [10, -1]`, `k = 4`

**Output:** `8`

**Explanation:** The gaps are `|7-10|=3`, `|7+1|=8`, `|-3-10|=13`,
`|-3+1|=2`, `|0-10|=10`, `|0+1|=1`. Sorted: `[1, 2, 3, 8, 10, 13]`.
The 4th is `8`.

## Constraints

- `1 <= len(a), len(b) <= 10^5`
- `-10^9 <= a[i], b[j] <= 10^9`
- `1 <= k <= len(a) * len(b)`
- The result and `len(a) * len(b)` can exceed 32-bit range; use 64-bit
  integers where your language needs them.

## Follow-up

Can you do it in `O((n + m) log(range))` time after sorting, with `O(1)`
extra space? What changes if you must answer many different values of `k`
for the same pair of arrays?
