# Marquee Run Compressor

**Difficulty:** Easy
**Topic:** Arrays / Strings

## Description

An old LED marquee sign stores its message as a plain string of uppercase
letters, but its memory is tiny, so the sign's controller compresses the
message before storing it. The compression rule is simple: scan the
message left to right and group consecutive runs of the same letter. A run
is only worth compressing into `<count><letter>` form if doing so is
guaranteed not to make things longer:

- A run of length `1` or `2` is left exactly as-is (writing a count in
  front, like `"1A"` or `"2A"`, would use the same or more characters than
  the run itself, so it isn't worth it).
- A run of length `3` or more is replaced by the run's length written in
  decimal, followed by the letter — e.g. a run of five `A`s becomes `"5A"`.

Given the original message `s` (uppercase English letters only), return the
compressed string produced by applying this rule to every maximal run of
repeated letters, in order.

## Examples

### Example 1

```
s = "AAAABBBCCD"
Output: "4A3BCCD"
```

**Explanation:** The maximal runs are `AAAA` (length 4), `BBB` (length 3),
`CC` (length 2), and `D` (length 1). The first two runs have length `>= 3`
so they compress to `"4A"` and `"3B"`. The last two runs have length `< 3`
so they are left untouched as `"CC"` and `"D"`. Concatenating in order
gives `"4A3BCCD"`.

### Example 2

```
s = "ABCD"
Output: "ABCD"
```

**Explanation:** Every run has length `1`, so nothing is compressed and the
string is returned unchanged.

### Example 3

```
s = "AABBBBCCCCCC"
Output: "AA4B6C"
```

**Explanation:** The runs are `AA` (length 2, left as `"AA"`), `BBBB`
(length 4, compresses to `"4B"`), and `CCCCCC` (length 6, compresses to
`"6C"`). Concatenating gives `"AA4B6C"`.

## Constraints

- `0 <= s.length <= 10^4`
- `s` consists only of uppercase English letters (`'A'`-`'Z'`), or is empty.

## Follow-up

Because a run's compressed form always uses digit characters for the count
and the original message contains only letters, the transformation is
reversible without ambiguity. Can you write a companion `decode` function
that takes the compressed output and reconstructs the original message?
(Hint: while scanning, digit characters always belong to a count and letter
characters always either start a new count-free run or terminate one.)
