# Roll Call Scanner Glitch

**Difficulty:** Easy
**Topic:** Arrays / Strings

## Description

A classroom takes attendance with a badge scanner. The class has `n`
students, and their badges are numbered `1` through `n`. Every student is
supposed to scan their badge exactly once, so a perfect roll call would
record each number from `1` to `n` exactly one time.

Today the scanner glitched: it recorded exactly one badge number **twice**
(once correctly, once as a stray extra read), and as a direct result
exactly one badge number from `1` to `n` was **never recorded at all**.
Every other badge number appears exactly once, as expected.

Given the array `scans` of length `n`, where each `scans[i]` is a badge
number between `1` and `n`, return the pair `[duplicate, missing]`: the
badge number that was scanned twice, and the badge number that was never
scanned.

You may assume the input always contains exactly one duplicate value and
exactly one missing value from the range `1..n`.

Function signature: `find_scan_glitch(scans: List[int]) -> List[int]`

## Examples

### Example 1

```
Input:  scans = [1, 2, 2, 4]
Output: [2, 3]
```

**Explanation:** `n = 4`. The number `2` was scanned twice, and `3` was
never scanned.

### Example 2

```
Input:  scans = [1, 1]
Output: [1, 2]
```

**Explanation:** `n = 2`. The number `1` was scanned twice, and `2` was
never scanned.

### Example 3

```
Input:  scans = [3, 2, 3, 4, 5, 1]
Output: [3, 6]
```

**Explanation:** `n = 6`. Counting occurrences: `1`, `2`, `4`, and `5`
each appear once, `3` appears twice, and `6` doesn't appear at all. So the
duplicate is `3` and the missing number is `6`.

## Constraints

- `2 <= n <= 10^5`
- `scans.length == n`
- `1 <= scans[i] <= n`
- Exactly one value in `1..n` appears twice in `scans`; exactly one value
  in `1..n` does not appear at all. Every other value appears exactly
  once.

## Follow-up

The straightforward approach uses `O(n)` extra space (e.g. a frequency
table). Can you find both the duplicate and the missing number using only
`O(1)` extra space (not counting the input array or the output pair),
while still running in `O(n)` time?
