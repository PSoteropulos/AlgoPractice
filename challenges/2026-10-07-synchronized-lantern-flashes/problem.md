# Synchronized Lantern Flashes

**Difficulty:** Easy
**Topic:** Math / Number Theory

## Description

A harbor festival uses `n` lanterns. Lantern `i` flashes at every moment that
is a positive multiple of its period `p[i]` (so at times `p[i]`, `2*p[i]`,
`3*p[i]`, ...). Time is measured in whole seconds, starting from second `0`.

A moment is a **grand flash** if **every** lantern flashes at that moment.

Given the periods `p` and a time limit `T`, return how many grand flashes
happen at times `t` with `1 <= t <= T`.

## Examples

### Example 1

**Input:** `p = [4, 6], T = 40`

**Output:** `3`

**Explanation:** Both lanterns flash together at multiples of `12`: times
`12`, `24` and `36`. The next one, `48`, is past the limit.

### Example 2

**Input:** `p = [5, 7, 35], T = 100`

**Output:** `2`

**Explanation:** The lantern with period `35` flashes only when the other two
do as well, so grand flashes are the multiples of `35`: times `35` and `70`.

### Example 3

**Input:** `p = [1000000000, 999999999], T = 1000000000000000`

**Output:** `0`

**Explanation:** The two periods are coprime, so they first coincide at
`1000000000 * 999999999`, which is about `10^18` and far beyond `T = 10^15`.

## Constraints

- `1 <= n <= 10^5`
- `1 <= p[i] <= 10^9`
- `1 <= T <= 10^15`

(Watch out: the least common multiple of the periods can be astronomically
larger than `T`, and in fixed-width integer types it can overflow long before
you finish scanning the array.)

## Follow-up

Now suppose lantern `i` first flashes at time `s[i]` (with `0 <= s[i] < p[i]`)
and then every `p[i]` seconds after that. When do the lanterns first flash
together, and how would you count the grand flashes up to `T`? (Hint: think
about the Chinese Remainder Theorem and when a solution fails to exist.)
