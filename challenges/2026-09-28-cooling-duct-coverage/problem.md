# Cooling Duct Coverage

**Difficulty:** Hard
**Topic:** Stacks / Queues (monotonic stack)

## Description

A data center has `n` server racks arranged in a single row, numbered `0`
to `n - 1` left to right. Rack `i` has a height of `heights[i]` rack units.

Facilities wants to bolt a single rectangular cooling duct panel across the
tops of some contiguous run of adjacent racks. The panel must be low enough
to physically clear every rack it passes over, so if it spans racks `i`
through `j` (inclusive), its height is limited to the shortest rack in that
range: `min(heights[i..j])`. Its width is the number of racks it spans:
`j - i + 1`. The panel's coverage area is `height * width`.

Return the **maximum possible coverage area** over all choices of a
contiguous, non-empty range of racks.

## Examples

**Example 1:**
```
Input: heights = [2, 1, 5, 6, 2, 3]
Output: 10
Explanation:
  Racks at indices 2 and 3 have heights 5 and 6. The panel over this
  range is limited to height min(5, 6) = 5 and has width 2, giving
  area 10. No other contiguous range beats this (e.g. spanning indices
  2-5 gives height min(5,6,2,3) = 2 and width 4, area 8).
```

**Example 2:**
```
Input: heights = [6, 2, 5, 4, 5, 1, 6]
Output: 12
Explanation:
  Racks at indices 2, 3, and 4 have heights 5, 4, 5. The panel over this
  range is limited to height min(5, 4, 5) = 4 and has width 3, giving
  area 12. This beats every single rack alone (max height 6, area 6) and
  every other contiguous range.
```

**Example 3:**
```
Input: heights = [3, 3, 3, 3]
Output: 12
Explanation:
  Every rack is the same height, so the panel can span all 4 racks at
  full height 3, giving area 4 * 3 = 12.
```

## Constraints

- `1 <= heights.length <= 10^5`
- `1 <= heights[i] <= 10^9`

## Follow-up

Suppose racks are appended to the row one at a time (a streaming setup),
and after each new rack arrives you must report the best coverage area
achievable so far, without recomputing the whole answer from scratch on
every append. How would you maintain a running answer incrementally, and
what is the total time complexity across `n` appends?
