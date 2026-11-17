# Ledger Trailing Zeros

**Difficulty:** Easy
**Topic:** Math / Number Theory (prime factorization, counting factors)

## Description

A warehouse ledger tracks a chain of conversions. Each step multiplies the
running quantity by a positive whole number, and the final quantity is the
**product** of every multiplier in the chain.

Auditors only care about how "round" that final quantity is. You are given
an array `nums` of positive integers. Return the number of **trailing
zeros** in the decimal (base 10) form of `nums[0] * nums[1] * ... *
nums[n - 1]`.

The product can have hundreds of thousands of digits, so you are not
expected to compute it directly. (Fixed-width integer types will overflow,
and even arbitrary-precision arithmetic is far too slow at the largest
inputs.)

## Examples

**Example 1**

```
Input:  nums = [25, 8, 3]
Output: 2
```
Explanation: `25 * 8 * 3 = 600`, which ends in two zeros.

**Example 2**

```
Input:  nums = [125, 4, 7, 10]
Output: 3
```
Explanation: `125 * 4 * 7 * 10 = 35000`, which ends in three zeros. Notice
that the product holds four factors of `5` (three from `125`, one from `10`)
but only three factors of `2` (two from `4`, one from `10`), so only three
`10`s can be formed.

**Example 3**

```
Input:  nums = [3, 9, 11]
Output: 0
```
Explanation: `3 * 9 * 11 = 297`. No multiplier contributes a factor of `2`
or `5`, so the product can't end in `0`.

## Constraints

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^9`

## Follow-up

Instead of base 10, return the number of trailing zeros of the product when
written in an arbitrary base `b` (`2 <= b <= 10^9`). For example, in base 12
(`= 2^2 * 3`), `nums = [8, 9]` has product `72 = 6 * 12`, written `60`, so the
answer is `1`. Which factors of `b` do you need to track, and how do their
exponents in `b` affect the count?
