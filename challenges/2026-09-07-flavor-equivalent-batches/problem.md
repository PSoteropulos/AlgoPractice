# Flavor-Equivalent Batches

**Difficulty:** Medium
**Topic:** Hashing

## Description

A bakery's production log records each batch of cookies as an array of
positive integers, where every integer is an ingredient ID and repeated IDs
mean that ingredient was added more than once. The order the ingredients
were added in does **not** matter for taste — only the multiset of
ingredient IDs (which IDs are used, and how many times each) determines the
final flavor.

Two batches are **flavor-equivalent** if they use exactly the same
ingredient IDs the exact same number of times each — i.e. one batch's array
is a permutation of the other's.

Given a list of `n` batches, group all mutually flavor-equivalent batches
together. Return an array `[largestGroupSize, totalGroups]`, where
`largestGroupSize` is the number of batches in the biggest group, and
`totalGroups` is the total number of distinct groups formed (a batch with no
flavor-equivalent partner forms its own group of size `1`). If more than one
group ties for the largest size, just report that shared size — no further
tie-break is needed since only the counts are returned.

## Examples

### Example 1

```
batches = [[1, 2, 3], [3, 2, 1], [4, 5]]
Output: [2, 2]
```

**Explanation:** `[1,2,3]` and `[3,2,1]` use the same ingredients the same
number of times each, so they form a group of size `2`. `[4,5]` matches
nothing else and forms its own group of size `1`. There are `2` groups
total, and the largest has `2` batches.

### Example 2

```
batches = [[1, 1, 2], [1, 2, 1], [2, 1, 1], [1, 2]]
Output: [3, 2]
```

**Explanation:** The first three batches all use ingredient `1` twice and
ingredient `2` once (just added in a different order each time), so they
form one group of size `3`. `[1, 2]` uses ingredient `1` only once, so it is
**not** flavor-equivalent to the first three (different multiset) and forms
its own group of size `1`. That gives `2` groups total, with the largest
holding `3` batches.

### Example 3

```
batches = [[7]]
Output: [1, 1]
```

**Explanation:** A single batch always forms its own group of size `1`, and
there is exactly `1` group total.

## Constraints

- `1 <= n <= 10^5`, where `n` is the number of batches.
- `1 <= batches[i].length <= 20` for every batch.
- `1 <= batches[i][j] <= 10^6` for every ingredient ID.
- The sum of `batches[i].length` over all batches is at most `2 * 10^6`.

## Follow-up

This solution can canonicalize each batch by sorting it, which costs
`O(L log L)` per batch of length `L`. Since ingredient IDs are bounded
(`<= 10^6`), can you build a canonical signature for each batch in `O(L)`
time instead (hint: a count of how many times each ID appears, combined
into a single hashable key), avoiding the sort entirely?
