# Prefix Popularity Scores — Reference Solution

## Approach

Insert every word into a trie, storing at each node the number of words that
pass through it. That count is exactly the popularity of the prefix the node
represents. A second pass walks each word down the trie again and, for every
position with depth at least `k`, adds the node's count to the word's score.

The trie has at most (total length) nodes, and each word is walked twice, so
the work is linear in the total input length. Scores are held in 64-bit
integers (Python ints are unbounded) because a score can reach roughly
`n * len` in size.

```python
from typing import List


def prefix_popularity(words: List[str], k: int) -> List[int]:
    # each node: [children dict, pass-through count]
    root = [{}, 0]
    for w in words:
        node = root
        for ch in w:
            nxt = node[0].get(ch)
            if nxt is None:
                nxt = [{}, 0]
                node[0][ch] = nxt
            node = nxt
            node[1] += 1

    scores = []
    for w in words:
        node = root
        total = 0
        for depth, ch in enumerate(w, 1):
            node = node[0][ch]
            if depth >= k:
                total += node[1]
        scores.append(total)
    return scores
```

## Complexity

- Time: `O(L)` where `L` is the total length of all words (alphabet is fixed).
- Space: `O(L)` for the trie.
