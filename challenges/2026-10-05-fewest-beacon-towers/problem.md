# Fewest Beacon Towers

**Difficulty:** Medium
**Topic:** Greedy

## Description

Houses are scattered along a straight road. The array `houses` holds the
position of each house (positions are not sorted, and several houses may share
the same position).

You want to give every house a signal by building beacon towers. A tower may
only be built **at the exact position of an existing house** (any number of
towers may be built, but never at a spot with no house). A tower built at
position `p` serves every house whose position lies in the closed range
`[p - r, p + r]`, where `r` is a given non-negative integer.

Return the **minimum number of towers** needed so that every house is served
by at least one tower.

## Examples

### Example 1

**Input:** `houses = [1, 2, 3, 4, 5], r = 1`

**Output:** `2`

**Explanation:** Build towers at positions `2` (serves 1-3) and `5` (serves
4-6). One tower can serve at most three consecutive houses here, so one tower
is not enough.

### Example 2

**Input:** `houses = [1, 5, 9], r = 2`

**Output:** `3`

**Explanation:** A tower at any house serves only that house, because the
nearest neighbours are 4 units away and `r = 2`.

### Example 3

**Input:** `houses = [7, 3, 1, 10, 4, 12, 8], r = 3`

**Output:** `2`

**Explanation:** Sorted positions are `1, 3, 4, 7, 8, 10, 12`. A tower at `4`
serves `[1, 7]` (houses 1, 3, 4, 7) and a tower at `10` serves `[7, 13]`
(houses 8, 10, 12). Note that `5` would have been a better spot for the first
tower in an unrestricted setting, but towers must sit on a house.

## Constraints

- `1 <= len(houses) <= 10^5`
- `0 <= houses[i] <= 10^9`
- `0 <= r <= 10^9`

(Watch out: `houses[i] + r` can exceed a 32-bit signed integer.)

## Follow-up

What if a tower could be built at any integer position, not just at a house?
How does the greedy choice change, and what if the houses arrive already
sorted — can you do it in O(n) after that?
