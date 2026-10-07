# Synchronized Lantern Flashes — Reference Solution

## Approach

A moment `t` is a grand flash exactly when `t` is a multiple of every `p[i]`,
i.e. a multiple of `L = lcm(p[0], ..., p[n-1])`. So the answer is `T // L`
(or `0` if `L > T`).

Compute `L` incrementally: `L = L / gcd(L, p[i]) * p[i]`. The intermediate
product can overflow fixed-width integers, so before multiplying check
whether the result would exceed `T`: with `a = L / g`, `a * p[i] > T` is
equivalent to `a > T // p[i]` (integer division). If so, no grand flash is
possible and we return `0` immediately. Otherwise the product is at most `T`
and safe to compute. Since `L <= T <= 10^15` throughout, even a 53-bit
double (TypeScript) holds it exactly.

## Complexity

- Time: O(n log M), where `M` is the maximum period (one gcd per lantern).
- Space: O(1).

## Code (Python)

```python
from math import gcd
from typing import List


def count_grand_flashes(p: List[int], T: int) -> int:
    L = 1
    for period in p:
        a = L // gcd(L, period)
        if a > T // period:
            return 0
        L = a * period
    return T // L


if __name__ == "__main__":
    cases = [
        ([4, 6], 40, 3),
        ([5, 7, 35], 100, 2),
        ([1000000000, 999999999], 10**15, 0),
        ([1], 1, 1),
        ([3], 2, 0),
        ([7, 7, 7], 49, 7),
        ([2, 3, 5, 7, 11, 13, 17, 19, 23], 10**15, 4482438),
    ]
    for p, T, expected in cases:
        actual = count_grand_flashes(p, T)
        print("PASS" if actual == expected else "FAIL", p, T, actual)
```
