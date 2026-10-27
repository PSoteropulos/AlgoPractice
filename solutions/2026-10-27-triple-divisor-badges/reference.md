# Triple-Divisor Badges — Reference Solution

## Approach

A number has exactly three divisors if and only if it is `p²` for a prime `p`.
(If `x = p^a * q^b * ...` its divisor count is `(a+1)(b+1)...`; this equals 3
only for a single prime with exponent 2.)

So a query `[lo, hi]` asks for the number of primes `p` with
`lo <= p² <= hi`, i.e. `ceil(sqrt(lo)) <= p <= floor(sqrt(hi))`. Since
`hi <= 10^12`, `p <= 10^6`. Sieve primes up to `10^6` once and build a prefix
count `pi[k]` (number of primes `<= k`). Each query is then
`pi[b] - pi[a - 1]` with `a = isqrt(lo - 1) + 1` (an exact integer ceil-sqrt)
and `b = isqrt(hi)`, or `0` if `a > b`. Use an exact integer square root to
avoid floating-point error near `10^12`.

```python
from math import isqrt
from typing import List


def count_special_badges(queries: List[List[int]]) -> List[int]:
    LIM = 10 ** 6
    sieve = bytearray([1]) * (LIM + 1)
    sieve[0] = sieve[1] = 0
    for i in range(2, isqrt(LIM) + 1):
        if sieve[i]:
            sieve[i * i::i] = bytearray(len(range(i * i, LIM + 1, i)))
    pi = [0] * (LIM + 1)
    for i in range(1, LIM + 1):
        pi[i] = pi[i - 1] + sieve[i]
    out = []
    for lo, hi in queries:
        a = isqrt(lo - 1) + 1
        b = isqrt(hi)
        out.append(pi[b] - pi[a - 1] if a <= b else 0)
    return out
```

## Complexity

- Time: `O(M log log M + q)` where `M = 10^6` is the sieve limit and `q` is the
  number of queries.
- Space: `O(M)` for the sieve and prefix counts.

For the `10^18` follow-up the sieve would need primes up to `10^9`; a segmented
sieve with prefix counts is feasible offline, or answer queries with a prime
counting function (Lucy_Hedgehog / Meissel–Lehmer).
