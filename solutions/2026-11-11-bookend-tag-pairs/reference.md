# Reference: Bookend Tag Pairs

## Approach

`A` bookends `B` exactly when, for every `k < len(A)`,
`A[k] == B[k]` **and** `A[len(A)-1-k] == B[len(B)-1-k]`.

So turn each tag `w` into a sequence of **character pairs**
`(w[0], w[n-1]), (w[1], w[n-2]), ..., (w[n-1], w[0])` — the k-th character
from the front paired with the k-th character from the back. Then `A` bookends
`B` if and only if `A`'s pair sequence is a **prefix** of `B`'s pair sequence
(the first condition says `A` is a prefix of `B`, the second says `A` is a
suffix of `B`, and both are checked position by position in lockstep).

That reduces the problem to ordinary prefix counting in a trie whose edges are
labelled by pairs:

1. Process tags left to right (so only earlier tags are counted).
2. Walk/insert the current tag's pair sequence into the trie. At every node
   you pass, add that node's `end` counter — the number of earlier tags whose
   pair sequence ends exactly there, i.e. earlier tags that bookend this one.
3. After the walk, increment `end` at the final node.

Identical tags land on the same final node, so they are counted naturally.

## Code (Python)

```python
from typing import List


def count_bookend_pairs(tags: List[str]) -> int:
    root = {}
    END = -1          # key for the "tags ending here" counter
    total = 0
    for w in tags:
        node = root
        n = len(w)
        for k in range(n):
            key = (w[k], w[n - 1 - k])
            node = node.setdefault(key, {})
            total += node.get(END, 0)
        node[END] = node.get(END, 0) + 1
    return total
```

## Complexity

- **Time:** `O(S)` where `S` is the total length of all tags (each character
  is visited once, with O(1) hash-map work).
- **Space:** `O(S)` for the trie nodes.

## Verification

Passes all 7 self-check cases (including 100000 identical tags →
`4999950000`) and 3000 randomized tests against an `O(n^2 * L)` brute force.

## Follow-up notes

- Per-`j` counts: record `total` before/after each tag's walk instead of only
  the running sum.
- An alternative is hashing / Z-function to find every length `L` where a tag's
  prefix of length `L` equals its suffix of length `L`, then look up earlier
  tags of that length in a hash map — also `O(S)` expected, but the pair-trie
  is simpler and needs no hashing.
