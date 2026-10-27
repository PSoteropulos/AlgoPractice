# Triple-Divisor Badges

**Difficulty:** Medium
**Topic:** Math / Number Theory

## Description

A convention hands out collectible badges. A badge number is **special** if it
has exactly three positive divisors (counting `1` and the number itself).

Staff receive many questions of the form "how many special badge numbers lie
between `lo` and `hi`, inclusive?" You are given `queries`, where
`queries[i] = [lo, hi]`. Return an array `answer` where `answer[i]` is the
number of special integers `x` with `lo <= x <= hi` for the `i`-th query.

## Examples

### Example 1

**Input:** `queries = [[1,10],[10,50],[1,1]]`

**Output:** `[2,2,0]`

**Explanation:** The special numbers begin `4, 9, 25, 49, 121, ...`.
Between 1 and 10 there are two (`4` and `9`). Between 10 and 50 there are two
(`25` and `49`). The range `[1,1]` has none, since 1 has only one divisor.

### Example 2

**Input:** `queries = [[4,4],[5,8],[1,100]]`

**Output:** `[1,0,4]`

**Explanation:** `4` has divisors `1, 2, 4`, so the first query counts it.
No special number lies in `[5,8]`. Up to 100 the special numbers are `4, 9,
25, 49`.

### Example 3

**Input:** `queries = [[1,1000000000000]]`

**Output:** `[78498]`

**Explanation:** There are 78498 primes below `10^6`, and each special number
up to `10^12` corresponds to exactly one of them.

## Constraints

- `1 <= queries.length <= 10^5`
- `queries[i].length == 2`
- `1 <= lo <= hi <= 10^12`

## Follow-up

How would your approach change if `hi` could be as large as `10^18`? What
would you need to precompute, and is it still feasible?
