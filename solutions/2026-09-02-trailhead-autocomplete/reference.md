# Reference Solution: Trailhead Autocomplete

## Approach

This is a **trie (prefix tree)** problem: build one trie over all marker
codes, storing at each node the list of `(score, marker)` pairs for every
marker that passes through it. Answering a query then means walking the
trie edge-by-edge to the node for that prefix and reading off its list.

1. **Build.** Insert every marker into a trie one character at a time. At
   every node visited along a marker's insertion path (including the final
   node for the whole marker), append `(score, marker)` to that node's
   bucket. This means a node's bucket ends up holding every marker in the
   whole trie that has the path from the root to that node as a prefix.
2. **Query.** For a prefix, walk the trie one character at a time from the
   root. If at any point the next character has no outgoing edge, no
   marker starts with that prefix — return `[]`. Otherwise, once the whole
   prefix has been consumed, take that node's bucket, sort it by score
   descending and then marker name ascending, and return the names of the
   first 3 entries.

Because every node's bucket is already exactly "all markers below this
point," no subtree traversal is needed at query time — the walk to the
node *is* the only work, and the bucket is ready to read.

```python
from typing import List


class _TrieNode:
    __slots__ = ("children", "bucket")

    def __init__(self):
        self.children = {}
        self.bucket: List[tuple] = []  # (score, marker)


def trailhead_autocomplete(
    markers: List[str], scores: List[int], queries: List[str]
) -> List[List[str]]:
    root = _TrieNode()
    for marker, score in zip(markers, scores):
        node = root
        node.bucket.append((score, marker))
        for ch in marker:
            if ch not in node.children:
                node.children[ch] = _TrieNode()
            node = node.children[ch]
            node.bucket.append((score, marker))

    results: List[List[str]] = []
    for prefix in queries:
        node = root
        found = True
        for ch in prefix:
            if ch not in node.children:
                found = False
                break
            node = node.children[ch]

        if not found:
            results.append([])
            continue

        top = sorted(node.bucket, key=lambda p: (-p[0], p[1]))[:3]
        results.append([marker for _, marker in top])

    return results
```

### Worked check against the examples

- `markers = ["trailhead", "trailmap", "trailrun", "bridge"]`,
  `scores = [50, 80, 10, 40]`. The node reached by walking `"trail"` holds
  the bucket `{(50, trailhead), (80, trailmap), (10, trailrun)}` (`bridge`
  never visits that node). Sorted by score descending:
  `trailmap(80), trailhead(50), trailrun(10)` — matches the expected
  output. `"bri"` reaches a node whose bucket is just `{(40, bridge)}`.
  `"zzz"` has no edge for the second `z`, so the walk fails and the result
  is `[]`. ✓
- `markers = ["cabin", "cave", "camp"]`, all `score = 20`. The node for
  `"ca"` holds all three (all score-tied), so the sort falls back to
  alphabetical order: `cabin, camp, cave`. ✓
- `markers = ["a", "ab", "abc", "abcd", "abcde"]`,
  `scores = [5, 4, 3, 2, 1]`. The node for `"a"` holds all five (every
  marker starts with `"a"`); sorted by score descending the top 3 are
  `a(5), ab(4), abc(3)`. ✓

## Complexity

Let `N = sum(len(markers[i]))` be the total length of all marker strings,
`P` be the length of a query prefix, and `m` be the number of markers that
share that prefix (the size of the bucket read at query time).

- **Build time:** `O(N)` to insert every marker character by character,
  since each character visited appends one `O(1)` entry to a bucket.
- **Query time:** `O(P + m log m)` — `O(P)` to walk down to the prefix's
  node, plus sorting its bucket (at most `m` entries, bounded by the total
  number of markers `n`) to pick the top 3.
- **Space:** `O(N)` for the trie's nodes and edges, plus `O(N)` total
  across all buckets (each marker contributes one entry per node on its
  own insertion path, i.e. `len(marker)` entries total).

Given the constraints (`n <= 2000`, marker length `<= 15`), `m log m` is at
most a few thousand operations per query, and with `queries.length <= 500`
the whole solution comfortably runs well under typical time limits.

## Follow-up sketch

For repeated or incremental (keystroke-by-keystroke) queries against the
*same* growing prefix, keep a "cursor" node instead of re-walking from the
root each time: start at the root, and each time a character is typed,
follow exactly one edge from the current node to move the cursor one level
deeper (or discover there is no such edge, meaning every further keystroke
in that word is guaranteed to have no matches, without needing to look
again). Reading the current node's bucket after each move gives the
answer for that exact prefix in `O(1)` (plus the `O(m log m)` sort, or
`O(1)` if the top 3 are maintained incrementally at insertion time instead
of sorted on demand). This turns each additional keystroke into `O(1)`
amortized edge traversal instead of `O(P)` — the trie's structure is
exactly what makes "one more character" cheap to extend rather than
something that has to be recomputed from scratch.
