# Reference Solution: Marquee Run Compressor

## Approach

This is a single left-to-right pass over the string that groups it into
**maximal runs** of identical characters, then decides how to emit each run
independently of the others:

1. Walk an index `i` through the string. For each new position, find the
   end of its run by advancing a second index `j` while `s[j] == s[i]`.
   The run has length `run_len = j - i` and consists entirely of the
   character `s[i]`.
2. If `run_len >= 3`, emit the compressed form `f"{run_len}{s[i]}"` (the
   decimal length followed by the character).
3. Otherwise (`run_len` is `1` or `2`), emit the run untouched — the
   original characters repeated `run_len` times.
4. Advance `i` to `j` and repeat until the end of the string. Concatenating
   every emitted piece in order gives the answer.

Because each run is handled independently and runs never overlap or
interact, this greedy single pass is trivially correct: it reproduces
exactly the rule in the problem statement for every maximal run.

```python
def compress_marquee(s: str) -> str:
    if not s:
        return ""
    parts = []
    i = 0
    n = len(s)
    while i < n:
        j = i
        while j < n and s[j] == s[i]:
            j += 1
        run_len = j - i
        if run_len >= 3:
            parts.append(f"{run_len}{s[i]}")
        else:
            parts.append(s[i] * run_len)
        i = j
    return "".join(parts)
```

### Worked check against the examples

- `"AAAABBBCCD"` → runs are `AAAA` (4), `BBB` (3), `CC` (2), `D` (1).
  Lengths `4` and `3` are `>= 3` so they compress to `"4A"` and `"3B"`;
  lengths `2` and `1` are left as `"CC"` and `"D"`. Joined:
  `"4A3BCCD"`. ✓
- `"ABCD"` → four runs of length `1`, none compressed, giving back
  `"ABCD"` unchanged. ✓
- `"AABBBBCCCCCC"` → runs `AA` (2, kept as `"AA"`), `BBBB` (4, compresses
  to `"4B"`), `CCCCCC` (6, compresses to `"6C"`). Joined: `"AA4B6C"`. ✓

Edge cases: the empty string returns `""` immediately (the `while` loop
body never executes for `n = 0`, but the explicit early return keeps the
`s[i]` index access safe). A run of exactly length `3` is the smallest run
that gets compressed, e.g. `"ZZZ"` → `"3Z"`, which is one character
shorter than the original — confirming the `>= 3` threshold is exactly the
point where compressing starts to pay off (length `2` would tie or lose:
`"2Z"` is the same length as `"ZZ"`).

## Complexity

- **Time:** `O(n)`, where `n = len(s)`. The two-pointer scan visits each
  index exactly once across the outer and inner loops combined.
- **Space:** `O(n)` for the output string being built (`O(1)` extra
  working memory beyond the result).

### Follow-up sketch

To decode, scan the compressed string left to right. Whenever the current
character is a digit, keep consuming digits to build the full count `k`
(a run's length can be more than one digit, e.g. `"12A"`), then the very
next character is guaranteed to be the letter — append it `k` times to the
output and advance past it. Whenever the current character is a letter
(not preceded by a digit being accumulated), it belongs to an uncompressed
run of length `1` or `2`: append it as-is (one character at a time is
enough, since consecutive identical letters from an original 2-run simply
appear as two separate letter characters back to back) and advance by one.
Because digits and letters are disjoint character classes here, there is
never any ambiguity about which case applies, and the whole decode runs in
`O(m)` time and `O(m)` space, where `m` is the length of the compressed
string.
