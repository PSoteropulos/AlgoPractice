# Spaced Banner Arrangements

**Difficulty:** Medium
**Topic:** Backtracking

## Description

A street festival hangs a row of banner flags, one flag per tile in a given
set. You are given a string `tiles` where each character (an uppercase letter)
is the color code of one flag. Flags with the same color code are
indistinguishable.

A row is a **valid arrangement** if it uses every flag exactly once and no two
neighboring flags have the same color code.

Return the number of **distinct** valid arrangements (distinct as strings).

## Examples

### Example 1

**Input:** `tiles = "AAB"`

**Output:** `1`

**Explanation:** The three distinct rows are `AAB`, `ABA`, `BAA`. Only `ABA`
keeps the two `A` flags apart.

### Example 2

**Input:** `tiles = "AABBC"`

**Output:** `12`

**Explanation:** The valid rows are `ABABC`, `ABACB`, `ABCAB`, `ABCBA`,
`ACBAB`, `BABAC`, `BABCA`, `BACAB`, `BACBA`, `BCABA`, `CABAB`, `CBABA`.

### Example 3

**Input:** `tiles = "AAA"`

**Output:** `0`

**Explanation:** Every row is `AAA`, which has equal neighbors.

## Constraints

- `1 <= tiles.length <= 9`
- `tiles` consists of uppercase English letters.

## Follow-up

Can you handle `tiles.length` up to `16` (answer fits in a 64-bit integer)?
Think about what state actually matters while building a row, so that
different partial rows can share work.
