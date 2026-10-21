# Prefix Popularity Scores

**Difficulty:** Medium
**Topic:** Tries

## Description

A search bar logs a list of lowercase words `words` (duplicates allowed, and each
copy counts separately). The **popularity** of a string `p` is the number of
entries in `words` that start with `p`. Every word starts with itself, and a
word also counts toward its own prefixes.

Given an integer `k`, the **score** of a word `w` is the sum of the popularity
of each of its prefixes whose length is **at least `k`**. Prefixes are taken by
position, so each length from `k` to `len(w)` contributes exactly once. A word
shorter than `k` has no qualifying prefix, so its score is `0`.

Return an array `scores` where `scores[i]` is the score of `words[i]`.

## Examples

### Example 1

**Input:** `words = ["abc","ab","bc","b"]`, `k = 2`

**Output:** `[3,2,1,0]`

**Explanation:** Popularities: `"ab"` = 2 (`abc`, `ab`), `"abc"` = 1, `"bc"` = 1.
- `abc`: prefixes `"ab"` (2) + `"abc"` (1) = 3
- `ab`: prefix `"ab"` (2) = 2
- `bc`: prefix `"bc"` (1) = 1
- `b`: length 1 < 2, so no qualifying prefix = 0

### Example 2

**Input:** `words = ["aa","aa","a"]`, `k = 1`

**Output:** `[5,5,3]`

**Explanation:** Popularities: `"a"` = 3, `"aa"` = 2.
- each `aa`: `"a"` (3) + `"aa"` (2) = 5
- `a`: `"a"` (3) = 3

### Example 3

**Input:** `words = ["cat","car","cart","dog"]`, `k = 3`

**Output:** `[1,2,3,1]`

**Explanation:** Popularities: `"cat"` = 1, `"car"` = 2, `"cart"` = 1, `"dog"` = 1.
- `cat`: `"cat"` = 1
- `car`: `"car"` = 2
- `cart`: `"car"` (2) + `"cart"` (1) = 3
- `dog`: `"dog"` = 1

## Constraints

- `1 <= words.length <= 10^5`
- `1 <= words[i].length`, and the total length of all words is at most `2 * 10^5`
- `words[i]` consists of lowercase English letters
- `1 <= k <= 2 * 10^5`

Scores can exceed the range of a 32-bit integer.

## Follow-up

Can you do it in time proportional to the total length of all words, without
comparing words pairwise? How would you answer the query for a single word
`w` that is not in `words`?
