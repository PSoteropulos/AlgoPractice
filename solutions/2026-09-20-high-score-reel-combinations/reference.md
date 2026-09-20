# Reference Solution: High-Score Reel Combinations

## Approach

This is a straightforward **backtracking over a fixed-depth decision tree**:
one decision per reel, three reels deep. The trick that makes it worth
calling "backtracking" rather than "generate everything and filter
afterward" is checking each partial string as soon as it's built, so a
banned 1- or 2-letter prefix stops that branch before wasting time spinning
the remaining reel(s).

1. Put `bannedPrefixes` in a hash set for O(1) exact-match lookups.
2. Maintain a `path` list holding the letters chosen so far.
3. `backtrack(reelIndex)`:
   - If `reelIndex == 3`, the path is a complete initials string — append a
     copy of it (joined) to the results and return.
   - Otherwise, for each letter in `reels[reelIndex]`: push it onto `path`,
     check whether the *current* joined path is in the banned set. If it
     is **not** banned, recurse into `reelIndex + 1`. Either way, pop the
     letter back off before trying the next candidate for this position
     (the "backtrack" step).
4. Sort the collected results lexicographically before returning.

Because `bannedPrefixes` entries can be length 1, 2, or 3, checking the
*current* partial path at every depth (not just at the leaf) is what lets a
short banned prefix like `"XZ"` cut off an entire subtree — both `XZA` and
`XZB` and `XZC` get skipped together the moment `"XZ"` is recognized as
banned, without ever spinning the third reel for any of them.

```python
from typing import List


def high_score_combinations(reels: List[List[str]], banned_prefixes: List[str]) -> List[str]:
    banned = set(banned_prefixes)
    results: List[str] = []
    path: List[str] = []

    def backtrack(reel_index: int) -> None:
        if reel_index == len(reels):
            results.append("".join(path))
            return
        for letter in reels[reel_index]:
            path.append(letter)
            if "".join(path) not in banned:
                backtrack(reel_index + 1)
            path.pop()

    backtrack(0)
    return sorted(results)
```

### Worked check against the examples

- `reels = [["A","B"],["C","D"],["E","F"]]`, `banned = {"BD"}`: the tree
  explores `A→{C,D}→{E,F}` and `B→{C,D}→{E,F}`. Every branch is fine except
  `B→D`, where the partial path `"BD"` is banned, so `backtrack` returns
  immediately without ever trying `"E"` or `"F"` for that branch — `BDE`
  and `BDF` are never even constructed. The other six leaves are collected
  and sorted: `["ACE","ACF","ADE","ADF","BCE","BCF"]`. ✓
- `reels = [["X"],["Y","Z"],["A","B","C"]]`, `banned = {"XZ","XYB"}`: after
  `X`, branch `Y` continues to try `A`, `B`, `C` — `"XYA"` and `"XYC"` are
  fine, but `"XYB"` is an exact banned match at the leaf, so it's dropped.
  Branch `Z` is cut immediately: `"XZ"` is banned at depth 2, so none of
  `XZA`, `XZB`, `XZC` are ever built. Result: `["XYA","XYC"]`. ✓
- `reels = [["A"],["B"],["C"]]`, `banned = {}`: only one path exists,
  `"ABC"`, and nothing bans it. Result: `["ABC"]`. ✓
- `reels = [["A"],["B"],["C"]]`, `banned = {"A"}`: the very first letter
  choice makes `path = ["A"]`, and `"A"` is banned, so `backtrack` returns
  at depth 1 without ever choosing `B` or `C`. Result: `[]`.
- `reels = [["P","Q"],["R"],["S","T"]]`, `banned = {"QR"}`: branch `P` is
  unaffected and yields `PRS`, `PRT`. Branch `Q` builds `"QR"` at depth 2,
  which is banned, so it's cut before trying `S` or `T`. Result:
  `["PRS","PRT"]`.

## Complexity

Let `k_0, k_1, k_2` be the sizes of the three reels.

- **Time:** `O(k_0 * k_1 * k_2)` in the worst case (no useful pruning, e.g.
  `bannedPrefixes` is empty or only bans strings that don't occur), since
  that's the total number of leaves in the decision tree and each leaf does
  O(1) amortized work to build and store its 3-character string (string
  joins are O(1) here since the strings are fixed length 3). A final sort
  of the results costs `O(L log L)` where `L <= k_0 * k_1 * k_2` is the
  result count. Banned prefixes only ever *reduce* the number of branches
  actually explored, never increase it.
- **Space:** `O(L)` for the output plus `O(bannedPrefixes.length)` for the
  hash set; the recursion depth is a constant `3`, so the call stack and
  `path` buffer are `O(1)`.

### Follow-up sketch

Generalizing to `n` reels needs only two changes: replace the base case
`reel_index == 3` with `reel_index == n`, and allow `bannedPrefixes`
entries of any length up to `n` (the set-membership check at each depth
already works unchanged for any prefix length). The worst-case leaf count
becomes `k_0 * k_1 * ... * k_{n-1}`, which is unaffected by pruning — if no
prefix is ever actually banned, backtracking still visits exactly the same
full tree as brute force, so the worst case is identical to generate-and-
filter. Pruning only helps the *typical* case, where banned prefixes are
short relative to `n` and cut off large subtrees early; a search over
random reels with even a handful of length-1 or length-2 bans can end up
exploring an exponentially small fraction of the naive tree, but no
adversary-proof bound improves on `O(product of reel sizes)` in general.
