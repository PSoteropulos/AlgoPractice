# Reference: Rotated Label Pairs

## Approach

Twins share a *canonical form*: the lexicographically smallest rotation of the
word. Two words are rotations of each other exactly when their canonical forms
are equal (different lengths give different canonical forms automatically).
Compute each label's canonical form, count how many labels share each form in a
hash map, and add `c * (c - 1) / 2` for every group of size `c`.

```python
from collections import Counter
from typing import List


def count_twin_pairs(labels: List[str]) -> int:
    groups = Counter(min(w[i:] + w[:i] for i in range(len(w))) for w in labels)
    return sum(c * (c - 1) // 2 for c in groups.values())


if __name__ == "__main__":
    cases = [
        (["abc", "bca", "cab", "abd"], 3),
        (["aab", "aba", "baa", "aab"], 6),
        (["ab", "ba", "abc"], 1),
        (["a"], 0),
        (["abc", "acb", "abd"], 0),
        (["a"] * 100000, 4999950000),
    ]
    for labels, expected in cases:
        print("PASS" if count_twin_pairs(labels) == expected else "FAIL")
```

## Complexity

- Time: `O(n * L^2)` where `L <= 10` is the label length (each of `L` rotations
  costs `O(L)` to build and compare). For long labels, Booth's algorithm finds
  the minimal rotation in `O(L)`, giving `O(total length)` — the follow-up.
- Space: `O(n * L)` for the hash map keys.
