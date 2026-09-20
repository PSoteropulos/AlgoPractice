# High-Score Reel Combinations

**Difficulty:** Easy
**Topic:** Backtracking

## Description

An old arcade cabinet records a 3-letter high-score initials using three
mechanical reels, one per position. Reel `i` (`i = 0, 1, 2`) can be spun to
show any single uppercase letter from a list `reels[i]`; letters within one
reel's list are guaranteed to be distinct. Entering a score means picking
exactly one letter from `reels[0]`, then one from `reels[1]`, then one from
`reels[2]`, in that order, to form a 3-letter string.

To keep things family-friendly, the cabinet also stores `bannedPrefixes`, a
list of uppercase strings (each of length 1, 2, or 3). An initials string is
**rejected** if *any* prefix of it (its first 1, first 2, or all 3
characters) exactly matches an entry in `bannedPrefixes`.

Implement a function that returns every valid 3-letter initials string
achievable from the reels, **sorted lexicographically ascending**, with the
rejected ones left out. Build the result with backtracking: assemble the
string one reel at a time, and as soon as the letters chosen so far form a
banned prefix, abandon that branch immediately rather than spinning the
remaining reel(s).

Function signature: `high_score_combinations(reels: List[List[str]], banned_prefixes: List[str]) -> List[str]`

## Examples

### Example 1

```
Input:  reels = [["A", "B"], ["C", "D"], ["E", "F"]], bannedPrefixes = ["BD"]
Output: ["ACE", "ACF", "ADE", "ADF", "BCE", "BCF"]
```

**Explanation:** All 8 combinations are `ACE, ACF, ADE, ADF, BCE, BCF, BDE,
BDF`. The banned prefix `"BD"` matches the first two letters of `BDE` and
`BDF`, so both are dropped before the third reel is even considered,
leaving the 6 shown.

### Example 2

```
Input:  reels = [["X"], ["Y", "Z"], ["A", "B", "C"]], bannedPrefixes = ["XZ", "XYB"]
Output: ["XYA", "XYC"]
```

**Explanation:** The 6 combinations are `XYA, XYB, XYC, XZA, XZB, XZC`.
`"XZ"` bans the whole `XZ*` branch (`XZA`, `XZB`, `XZC`) after only two
reels are spun, and `"XYB"` bans the complete string `XYB`. What's left is
`XYA` and `XYC`.

### Example 3

```
Input:  reels = [["A"], ["B"], ["C"]], bannedPrefixes = []
Output: ["ABC"]
```

**Explanation:** There is only one possible combination, `ABC`, and no
banned prefixes rule it out.

## Constraints

- `reels.length == 3`
- `1 <= reels[i].length <= 26`
- Every entry of `reels[i]` is a single uppercase English letter, and no
  reel contains a duplicate letter.
- `0 <= bannedPrefixes.length <= 50`
- `1 <= bannedPrefixes[i].length <= 3`, uppercase English letters only.
- The returned list must be sorted lexicographically ascending and must not
  contain duplicates.

## Follow-up

Suppose the cabinet is upgraded to `n` reels instead of always exactly 3,
with `bannedPrefixes` entries of any length from `1` to `n`. Would your
backtracking approach still work with only minor changes? What's the
worst-case number of leaf strings it could produce, and does the early
pruning on banned prefixes actually help that worst case, or only the
typical case?
