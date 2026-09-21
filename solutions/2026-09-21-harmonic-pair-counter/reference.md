# Reference Solution: Harmonic Pair Counter

## Approach

Checking every pair directly costs `O(n^2)`, which is too slow for
`n` up to `2 * 10^5`. Instead, this is a classic **"count pairs with a
given exact gcd"** problem, solved with a **divisor-sieve + downward
inclusion-exclusion** technique that runs in time proportional to
`V log V`, where `V = max(freq)`, independent of `n^2`.

The key idea: it's easy to count pairs whose gcd is a *multiple* of some
divisor `d` (just count how many elements are divisible by `d`, call it
`g[d]`, and pick any 2 of them — `C(g[d], 2)` pairs are guaranteed to have
a gcd that's a multiple of `d`). Getting from "multiple of `d`" down to
"exactly `d`" just means subtracting out the pairs whose gcd is a *larger*
multiple of `d`, processed from the largest divisors down to the smallest
— the same downward subtraction used in the standard "count subsets/pairs
with exact gcd" pattern (closely related to a Möbius-function sieve).

Because the *target* is a single fixed `k`, we only need to consider
divisors that are themselves multiples of `k` (any pair with `gcd == k`
must have both elements divisible by `k`, so its gcd is trivially a
multiple of `k` too) — this lets us index everything by `m = d / k`
instead of by `d` directly, which keeps the arrays small when `k` is
large.

1. Let `maxVal = max(freq)`. If `maxVal < k`, no element is even
   divisible by `k`, so the answer is `0` immediately.
2. Build a frequency table `cnt[v]` = how many times value `v` appears in
   `freq`, for `v` in `[0, maxVal]`.
3. Let `maxM = maxVal // k`. For each `m` from `1` to `maxM`, compute
   `divisible[m]` = the number of elements of `freq` divisible by `k * m`,
   by summing `cnt[v]` over multiples `v = k*m, 2*k*m, 3*k*m, ...` up to
   `maxVal` (a harmonic-series sieve pass).
4. For each `m` from `maxM` down to `1`, compute
   `exact[m] = C(divisible[m], 2) - sum(exact[t] for t a multiple of m,
   t > m, t <= maxM)`.
   `C(divisible[m], 2)` counts every pair whose gcd is *some* multiple of
   `k * m`; subtracting `exact[t]` for every larger multiple `t` of `m`
   removes exactly the pairs whose gcd is `k * t` for `t > m`, leaving only
   pairs whose gcd is precisely `k * m`.
5. The answer is `exact[1]`, the count of pairs whose gcd is exactly
   `k * 1 = k`.

```python
from typing import List


def count_harmonic_pairs(freq: List[int], k: int) -> int:
    max_val = max(freq)
    if max_val < k:
        return 0

    cnt = [0] * (max_val + 1)
    for v in freq:
        cnt[v] += 1

    max_m = max_val // k
    divisible = [0] * (max_m + 1)
    for m in range(1, max_m + 1):
        d = k * m
        divisible[m] = sum(cnt[d::d])

    exact = [0] * (max_m + 1)
    for m in range(max_m, 0, -1):
        pairs_at_least = divisible[m] * (divisible[m] - 1) // 2
        subtract = sum(exact[t] for t in range(2 * m, max_m + 1, m))
        exact[m] = pairs_at_least - subtract

    return exact[1]
```

### Worked check against the examples

- `freq = [4,6,8,10,3]`, `k = 2`: `maxVal = 10`, `maxM = 5`. Elements
  divisible by `2*1=2`: `{4,6,8,10}` → `divisible[1] = 4`. Divisible by
  `2*2=4`: `{4,8}` → `divisible[2] = 2`. Divisible by `2*3=6`: `{6}` →
  `divisible[3] = 1`. Divisible by `2*4=8`: `{8}` → `divisible[4] = 1`.
  Divisible by `2*5=10`: `{10}` → `divisible[5] = 1`. Working `m` from `5`
  down to `1`, `exact[2] = C(2,2) - exact[4] = 1 - 0 = 1` (the pair
  `(4,8)`, gcd `4`), and all the singleton `divisible` values at
  `m=3,4,5` give `C(1,2) = 0`. Finally
  `exact[1] = C(4,2) - (exact[2] + exact[3] + exact[4] + exact[5])
  = 6 - (1 + 0 + 0 + 0) = 5`. ✓
- `freq = [2,4,8,16]`, `k = 4`: `maxVal = 16`, `maxM = 4`. Divisible by
  `4`: `{4,8,16}` → `3`. Divisible by `8`: `{8,16}` → `2`. Divisible by
  `12`: none → `0`. Divisible by `16`: `{16}` → `1`. `exact[2] = C(2,2) -
  exact[4] = 1 - 0 = 1` (pair `(8,16)`, gcd `8`). `exact[1] = C(3,2) -
  (exact[2]+exact[3]+exact[4]) = 3 - (1+0+0) = 2`. ✓
- `freq = [5,7,11]`, `k = 5`: `maxVal = 11 >= 5`, but only `5` itself is
  divisible by `5`, so `divisible[1] = 1`, giving `exact[1] = C(1,2) = 0`. ✓

## Complexity

Let `n = freq.length` and `V = max(freq)`.

- **Time:** `O(V log V)`. Building `divisible[m]` for all `m` sums, across
  all divisors `d = k, 2k, 3k, ...`, the count of multiples of each — this
  is a harmonic-series sum bounded by `O((V/k) * log(V/k))`, and combined
  with the `O(n)` pass to build `cnt`, the total is `O(n + V log V)` in the
  worst case (`k = 1`). This comfortably beats the `O(n^2)` brute force
  once `n` is large relative to `V`.
- **Space:** `O(V)` for the `cnt`, `divisible`, and `exact` arrays.

### Follow-up sketch

For `Q` queries with different `k` values against the same `freq`, first
build a single global divisor table once: `g[d]` = number of elements
divisible by `d`, for every `d` from `1` to `V`, via one `O(V log V)`
sieve pass (same harmonic-series technique, but over *all* divisors, not
just multiples of one `k`). Then compute `exact[d] = C(g[d], 2) -
sum(exact[t] for t a multiple of d, t > d)` for every `d` from `V` down to
`1`, once, in another `O(V log V)` pass — this is exactly the standard
"count pairs with gcd exactly `d`" table for every `d` simultaneously.
Each query for a specific `k` is then just a single array lookup,
`exact[k]`, in `O(1)`. Total cost across all `Q` queries becomes
`O(n + V log V + Q)` instead of `O(Q * V log V)` from repeating the
single-query approach per query.
