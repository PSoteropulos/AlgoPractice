# Triple-Balanced Delivery Run — Reference Solution

## Approach

Keep running counts `a`, `b`, `c` while scanning. A stretch `(i, j]` is balanced
exactly when the counts of A, B and C grew by the same amount between prefix `i`
and prefix `j`. That is equivalent to the pair `(a - b, b - c)` being identical
at both prefixes. So store, in a hash map, the **first index** at which each
`(a - b, b - c)` pair was seen (the empty prefix has pair `(0, 0)` at index 0).
At each position, if the pair was seen before, the stretch since then is
balanced and its length is a candidate for the answer; otherwise record it.

## Python

```python
def longest_balanced_run(log: str) -> int:
    a = b = c = 0
    first = {(0, 0): 0}
    best = 0
    for idx, ch in enumerate(log, start=1):
        if ch == "A":
            a += 1
        elif ch == "B":
            b += 1
        else:
            c += 1
        key = (a - b, b - c)
        if key in first:
            best = max(best, idx - first[key])
        else:
            first[key] = idx
    return best


if __name__ == "__main__":
    for log, expected in [("AAABCCB", 6), ("AABBAC", 3), ("AAAB", 0), ("A", 0),
                          ("ABC", 3), ("CBACBAAAB", 6), ("AAAAA", 0)]:
        print("PASS" if longest_balanced_run(log) == expected else "FAIL", log)
```

## Complexity

- Time: O(n) expected (one pass, O(1) hash operations).
- Space: O(n) for the map of first-seen difference pairs.
