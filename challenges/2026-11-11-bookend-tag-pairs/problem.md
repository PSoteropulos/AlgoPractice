# Bookend Tag Pairs

**Difficulty:** Hard
**Topic:** Tries (Paired-Character Trie)

## Description

A library catalogs items with short lowercase **tags**, listed in the order they
were created: `tags[0], tags[1], ..., tags[n - 1]`.

Tag `A` is said to **bookend** tag `B` when `A` is **both** a prefix of `B`
**and** a suffix of `B`. A tag always bookends itself (and any identical tag),
and a tag can never bookend a strictly shorter tag. The prefix and the suffix
are allowed to overlap inside `B` (for example, `"aba"` bookends `"ababa"`).

Count the number of index pairs `(i, j)` with `i < j` such that `tags[i]`
bookends `tags[j]` — that is, an **earlier** tag bookends a **later** one.

Return the count as a 64-bit integer.

## Examples

**Example 1**

```
Input:  tags = ["a", "aba", "ababa", "aa"]
Output: 4
```
Explanation: the valid pairs are
- `(0, 1)`: `"a"` starts and ends `"aba"`.
- `(0, 2)`: `"a"` starts and ends `"ababa"`.
- `(0, 3)`: `"a"` starts and ends `"aa"`.
- `(1, 2)`: `"aba"` is the first three and the last three characters of `"ababa"` (they overlap on the middle `a`).

`"aba"` does not bookend `"aa"` (it is longer), and `"ababa"` does not bookend `"aa"` either.

**Example 2**

```
Input:  tags = ["xyz", "xyzxy", "xy", "xyzxy"]
Output: 2
```
Explanation:
- `(0, 1)` fails: `"xyz"` is a prefix of `"xyzxy"`, but the suffix of length 3 is `"zxy"`.
- `(1, 3)` counts: identical tags always bookend each other.
- `(2, 3)` counts: `"xy"` starts and ends `"xyzxy"`.
- `"xy"` (index 2) would also bookend index 1, but `2 > 1`, so that pair is not counted — order matters.

**Example 3**

```
Input:  tags = ["ab", "b", "ba", "abab"]
Output: 1
```
Explanation: only `(0, 3)` works. `"b"` is a suffix of `"abab"` but not a
prefix; `"ba"` is neither.

## Constraints

- `1 <= tags.length <= 100000`
- `1 <= tags[i].length`
- The total length of all tags is at most `500000`.
- Each tag consists only of lowercase English letters `a`–`z`.
- The answer can exceed `2^31 - 1` (e.g. 100000 identical tags give
  `4999950000` pairs); use 64-bit integers.

## Follow-up

- A straightforward approach compares every pair, costing `O(n^2 * L)`. Can you
  get the total time down to `O(total length of all tags)`?
- How would you change your approach to return, for every `j`, the number of
  earlier tags that bookend `tags[j]`?
