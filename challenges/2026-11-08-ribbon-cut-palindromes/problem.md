# Ribbon Cut Palindromes

**Difficulty:** Medium
**Topic:** Backtracking

## Description

A craft shop sells decorative ribbon printed with a repeating pattern of
lowercase letters. You are given a string `ribbon` describing the pattern along
its length, and an integer `minLen`.

You want to cut the ribbon into consecutive pieces, using every character
exactly once and keeping the original order. A cutting plan is **acceptable**
if every piece reads the same forwards and backwards (a palindrome) and every
piece has length at least `minLen`.

Return **all** acceptable cutting plans. Each plan is the list of its pieces,
left to right. Order the plans by comparing their piece lengths from left to
right: a plan whose first differing piece is shorter comes first. (For example,
a plan with piece lengths `[1, 2]` comes before `[2, 1]`, and `[2, 4]` comes
before `[3, 3]`.) If there is no acceptable plan, return an empty list.

## Examples

**Example 1**

```
Input:  ribbon = "aab", minLen = 1
Output: [["a","a","b"],["aa","b"]]
```
Explanation: `"aab"` itself is not a palindrome, and `"ab"` is not one either, so
the last piece must be `"b"`. The front `"aa"` can be left whole or cut into
`"a","a"`. The plan with first piece `"a"` comes first.

**Example 2**

```
Input:  ribbon = "abba", minLen = 2
Output: [["abba"]]
```
Explanation: `"ab"` and `"abb"` are not palindromes, so the only way to start is
with the whole ribbon, which is a palindrome of length 4.

**Example 3**

```
Input:  ribbon = "aaaaaa", minLen = 2
Output: [["aa","aa","aa"],["aa","aaaa"],["aaa","aaa"],["aaaa","aa"],["aaaaaa"]]
```
Explanation: every substring of `"aaaaaa"` is a palindrome, so the plans are the
ways to write 6 as an ordered sum of parts that are each at least 2:
`2+2+2`, `2+4`, `3+3`, `4+2`, `6`. They are listed in the required order.

## Constraints

- `1 <= len(ribbon) <= 16`
- `1 <= minLen <= len(ribbon)`
- `ribbon` consists of lowercase English letters.

## Follow-up

Many substrings get tested for being palindromes repeatedly while exploring.
Can you precompute a table so each check is `O(1)`? Also, how would you only
*count* the plans (without listing them) in polynomial time?
