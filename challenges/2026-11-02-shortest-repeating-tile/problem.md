# Shortest Repeating Tile

**Difficulty:** Easy
**Topic:** Arrays / Strings (Periodicity / Prefix Function)

## Description

A festival marquee scrolls a lowercase-letter message `s`. The message was
produced by taking some non-empty **tile** string and repeating it over and
over, then cutting the result off at length `len(s)`. The final copy of the tile
may therefore be incomplete (a proper prefix of the tile), or complete.

Return the length of the **shortest** tile that could have produced `s`.

Formally, return the smallest `p` with `1 <= p <= len(s)` such that
`s[i] == s[i - p]` for every index `i` with `p <= i < len(s)`. (`p = len(s)`
always works.)

## Examples

**Example 1**

```
Input:  s = "abcabcab"
Output: 3
```
Explanation: the tile `"abc"` repeated gives `abcabcabc...`; cutting at 8
characters yields `abcabcab`. No tile of length 1 or 2 works.

**Example 2**

```
Input:  s = "aabaaab"
Output: 4
```
Explanation: the tile `"aaba"` repeated gives `aabaaabaaaba...`; cutting at 7
characters yields `aabaaab`. Length 3 fails because `s[5] = 'a'` but
`s[2] = 'b'`; lengths 1 and 2 fail earlier (`s[2] = 'b'` vs `s[0] = 'a'` for
p = 2, and `s[2] = 'b'` vs `s[1] = 'a'` for p = 1).

**Example 3**

```
Input:  s = "abcd"
Output: 4
```
Explanation: no letter repeats in a way that forms a shorter tile, so the whole
string is its own tile.

## Constraints

- `1 <= len(s) <= 100000`
- `s` consists of lowercase English letters.

## Follow-up

An `O(n^2)` check of every candidate `p` is acceptable for small inputs, but
can you solve it in `O(n)` time? Hint: think about the longest proper prefix of
`s` that is also a suffix of `s`.
