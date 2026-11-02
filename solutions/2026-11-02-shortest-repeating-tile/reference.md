# Shortest Repeating Tile — Reference Solution

## Approach

Build the KMP prefix function `fail`, where `fail[i]` is the length of the
longest proper prefix of `s[:i+1]` that is also its suffix. A border of length
`b` means `s[i] == s[i - (n - b)]` for all valid `i`, so `p = n - b` is a valid
tile length, and every valid `p` corresponds to a border of length `n - p`.
The shortest tile therefore comes from the **longest** border:
`p = n - fail[n - 1]`.

## Python

```python
def shortest_tile(s: str) -> int:
    n = len(s)
    fail = [0] * n
    k = 0
    for i in range(1, n):
        while k and s[i] != s[k]:
            k = fail[k - 1]
        if s[i] == s[k]:
            k += 1
        fail[i] = k
    return n - fail[-1]


if __name__ == "__main__":
    tests = [
        ("abcabcab", 3), ("aabaaab", 4), ("abcd", 4), ("a", 1),
        ("aaaaaaaa", 1), ("abaababaab", 5),
        ("a" * 99999 + "b", 100000), ("abc" * 33333 + "ab", 3),
    ]
    for s, expected in tests:
        got = shortest_tile(s)
        print("PASS" if got == expected else "FAIL", len(s), expected, got)
```

## Complexity

- Time: `O(n)` — the pointer `k` rises at most once per character, so total
  fallbacks are bounded by `n`.
- Space: `O(n)` for the prefix array.
