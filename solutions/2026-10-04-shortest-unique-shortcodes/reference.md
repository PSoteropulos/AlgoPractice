# Reference: Shortest Unique Shortcodes

## Approach

Insert every name into a trie, storing at each node how many names pass
through it. A prefix is usable exactly when its node's count is 1 (only this
name passes through it). Walk each name again from the root and stop at the
first node with count 1; that prefix is the answer. If the walk reaches the end
without finding one, the name is a prefix of another name, so return it whole.
Counts never increase going deeper along a path, so the first count-1
node is also the shortest usable prefix.

```python
from typing import List


def shortest_unique_shortcodes(names: List[str]) -> List[str]:
    root = {}
    for w in names:
        node = root
        for ch in w:
            node = node.setdefault(ch, {})
            node['#'] = node.get('#', 0) + 1
    out = []
    for w in names:
        node = root
        for i, ch in enumerate(w):
            node = node[ch]
            if node['#'] == 1:
                out.append(w[:i + 1])
                break
        else:
            out.append(w)
    return out


if __name__ == "__main__":
    cases = [
        (["apple", "apply", "ape", "bat"], ["apple", "apply", "ape", "b"]),
        (["zebra", "zoo", "zone", "yak"], ["ze", "zoo", "zon", "y"]),
        (["ab", "abc", "abcd"], ["ab", "abc", "abcd"]),
        (["hello"], ["h"]),
        (["a", "b", "c"], ["a", "b", "c"]),
        (["xxxxa", "xxxxb"], ["xxxxa", "xxxxb"]),
    ]
    for names, expected in cases:
        actual = shortest_unique_shortcodes(names)
        print("PASS" if actual == expected else "FAIL", names, actual)
```

## Complexity

- Time: `O(L)` where `L` is the total length of all names (two passes over
  every character).
- Space: `O(L)` for the trie.

## Follow-up note

For online arrivals, keep the trie and counts; a name's shortcode is found by
walking its path to the first count-1 node at query time (`O(len)`), and each
insertion is `O(len)`.
