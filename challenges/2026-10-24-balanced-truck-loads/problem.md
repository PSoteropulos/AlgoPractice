# Balanced Truck Loads

**Difficulty:** Medium
**Topic:** Backtracking

## Description

A warehouse must ship `n` crates using exactly `k` trucks. The weight of crate
`i` is `weights[i]`. Every crate goes onto exactly one truck, and a truck may
carry any number of crates (a truck may even carry none).

The **load** of a truck is the total weight of the crates on it. The dispatcher
wants the heaviest truck to be as light as possible.

Return the smallest possible value of the maximum load over all trucks, taken
over every way of assigning the crates to trucks.

## Examples

### Example 1

**Input:** `weights = [3,5,2,7], k = 2`

**Output:** `9`

**Explanation:** The total weight is 17, so some truck carries at least 9.
Put `7 + 2` on one truck (load 9) and `3 + 5` on the other (load 8). The
maximum load is 9, and nothing better exists.

### Example 2

**Input:** `weights = [4,4,4,4,4], k = 3`

**Output:** `8`

**Explanation:** Five crates of weight 4 across three trucks: some truck must
carry at least two crates, so the maximum is at least 8. Loads of 8, 8 and 4
achieve it.

### Example 3

**Input:** `weights = [9,1,1,1], k = 2`

**Output:** `9`

**Explanation:** The crate of weight 9 must sit on some truck, so the maximum
is at least 9. Putting the three light crates on the other truck gives loads
of 9 and 3.

## Constraints

- `1 <= k <= weights.length <= 12`
- `1 <= weights[i] <= 1000`

## Follow-up

How would your approach change if `weights.length` were up to 20? (Think about
bitmask DP over subsets, or binary searching on the answer and checking
feasibility.)
