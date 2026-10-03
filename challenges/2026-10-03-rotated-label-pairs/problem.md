# Rotated Label Pairs

**Difficulty:** Easy
**Topic:** Hashing

## Description

A warehouse prints a label for every bin as a short lowercase word. Because
labels are stuck on by hand, a label is sometimes attached rotated: a
*rotation* of a word moves some number of its leading letters (possibly zero)
to the end, keeping their order. For example, `"abcd"` can become `"abcd"`,
`"bcda"`, `"cdab"` or `"dabc"`.

Two labels are **twins** if one can be turned into the other by a rotation.
Identical labels are twins, and words of different lengths are never twins.

Given the array `labels`, return the number of index pairs `(i, j)` with
`i < j` such that `labels[i]` and `labels[j]` are twins.

## Examples

### Example 1

**Input:** `labels = ["abc", "bca", "cab", "abd"]`

**Output:** `3`

**Explanation:** `"abc"`, `"bca"` and `"cab"` are rotations of each other,
giving the pairs (0,1), (0,2), (1,2). `"abd"` is a twin of none of them.

### Example 2

**Input:** `labels = ["aab", "aba", "baa", "aab"]`

**Output:** `6`

**Explanation:** All four labels are rotations of one another (including the
two identical `"aab"` labels), so every one of the 4·3/2 = 6 pairs counts.

### Example 3

**Input:** `labels = ["ab", "ba", "abc"]`

**Output:** `1`

**Explanation:** Only `"ab"` and `"ba"` are twins. `"abc"` has a different
length, so it pairs with nothing.

## Constraints

- `1 <= len(labels) <= 10^5`
- `1 <= len(labels[i]) <= 10`
- `labels[i]` consists of lowercase English letters.
- The answer can exceed the 32-bit range; use 64-bit integers where your
  language needs them.

## Follow-up

How would you solve it if each label could be up to `10^5` characters long
(with the total length across all labels still bounded by `10^6`)?
