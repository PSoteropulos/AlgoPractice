# Ledger Trailing Zeros — Reference Solution

## Approach

A number ends in `z` zeros exactly when it is divisible by `10^z` but not by
`10^(z+1)`. Since `10 = 2 * 5`, every trailing zero needs one factor of `2`
**and** one factor of `5` from the product's prime factorization.

Prime factorizations multiply by adding exponents, so the product of `nums`
contains

- `twos  = sum of (exponent of 2 in nums[i])`, and
- `fives = sum of (exponent of 5 in nums[i])`.

Each `10` uses one `2` and one `5`, so the number of trailing zeros is
`min(twos, fives)`. Other primes (like `3`, `7`, `11`) never help form a
`10`, so they can be ignored.

To get the exponent of `2` (or `5`) in a single value, divide by it while it
divides evenly and count the steps. A value up to `10^9` has at most `29`
factors of `2` and `12` factors of `5`, so this is effectively constant
work per element. Totals stay below `29 * 10^5`, which fits easily in a
32-bit int.

Common pitfall: multiplying everything together and counting zeros. The
product overflows any fixed-width type almost immediately, and taking it
modulo something destroys the information you need.

## Python

```python
def trailing_zeros_of_product(nums: list[int]) -> int:
    twos = fives = 0
    for x in nums:
        while x % 2 == 0:
            x //= 2
            twos += 1
        while x % 5 == 0:
            x //= 5
            fives += 1
    return min(twos, fives)
```

## Complexity

- **Time:** `O(n * log(max(nums)))`. Each element needs at most about
  `log2(10^9) ≈ 30` divisions, so in practice this is `O(n)`.
- **Space:** `O(1)` extra.

## Follow-up sketch (arbitrary base `b`)

Factor `b = p1^e1 * p2^e2 * ... * pk^ek` by trial division up to `sqrt(b)`.
For each prime `pj`, total its exponent `cj` across all of `nums`. A trailing
zero in base `b` uses `ej` copies of every `pj`, so the answer is
`min over j of floor(cj / ej)`. For base 10 that reduces to the formula
above; for base 12 (`2^2 * 3`) and `nums = [8, 9]`, you get
`min(floor(3/2), floor(2/1)) = 1`.
