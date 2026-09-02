# Trailhead Autocomplete

**Difficulty:** Medium
**Topic:** Tries

## Description

A national-park kiosk app shows an autocomplete dropdown for trail marker
codes as a visitor types. Every marker code is a distinct, non-empty string
of lowercase English letters, and each has a fixed popularity `score`
(higher means more visited).

You are given `markers`, an array of `n` distinct marker codes, and a
parallel array `scores` where `scores[i]` is the popularity of `markers[i]`.
You are also given `queries`, an array of prefix strings the visitor typed
(each query is independent — they are not incremental keystrokes of one
another).

For each query prefix, return up to **3** marker codes that start with that
prefix, chosen by highest `score` first; break ties alphabetically
(ascending). If fewer than 3 markers match, return all of them. If none
match, return an empty list for that query.

Return the answer as a list of lists, one entry per query, in the same
order as `queries`.

## Examples

### Example 1

```
markers = ["trailhead", "trailmap", "trailrun", "bridge"]
scores  = [50, 80, 10, 40]
queries = ["trail", "bri", "zzz"]

Output: [["trailmap", "trailhead", "trailrun"], ["bridge"], []]
```

**Explanation:** `"trail"` matches `trailhead` (50), `trailmap` (80), and
`trailrun` (10); sorted by score descending that is `trailmap`,
`trailhead`, `trailrun` — all 3 fit within the limit. `"bri"` matches only
`bridge`. `"zzz"` matches nothing, so the result is empty.

### Example 2

```
markers = ["cabin", "cave", "camp"]
scores  = [20, 20, 20]
queries = ["ca"]

Output: [["cabin", "camp", "cave"]]
```

**Explanation:** All three markers tie on score `20`, so they are ordered
alphabetically instead: `"cabin"` < `"camp"` < `"cave"`.

### Example 3

```
markers = ["a", "ab", "abc", "abcd", "abcde"]
scores  = [5, 4, 3, 2, 1]
queries = ["a"]

Output: [["a", "ab", "abc"]]
```

**Explanation:** All 5 markers start with `"a"`, but only the top 3 by
score are returned: `"a"` (5), `"ab"` (4), `"abc"` (3). `"abcd"` and
`"abcde"` are left out because they score lower and the limit is 3.

## Constraints

- `1 <= markers.length <= 2000`
- `markers.length == scores.length`
- Every string in `markers` consists only of lowercase English letters and
  is unique.
- `1 <= markers[i].length <= 15`
- `1 <= scores[i] <= 10^6`
- `1 <= queries.length <= 500`
- Every string in `queries` consists only of lowercase English letters,
  with `1 <= queries[j].length <= 15`.

## Follow-up

Suppose the same prefix could be queried many times, or a single visitor
types their word one keystroke at a time (so you must answer for every
prefix of that word). Describe how you would preprocess the marker set
into a trie so that each additional character typed only costs you the
work of moving one edge deeper, rather than re-scanning matches from the
root every time.
