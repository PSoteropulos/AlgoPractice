# Affordable Shift Blocks — Reference Solution

## Approach

All pay values are positive, so extending a block never lowers its total and
shrinking it never raises it. That monotonicity makes a sliding window valid.

Sweep the right end `r` across the array, keeping the window `[l, r]` as the
longest block ending at `r` whose total is `<= budget`:

1. Add `pay[r]` to the running sum.
2. While the sum exceeds `budget`, subtract `pay[l]` and advance `l`.
3. Every block ending at `r` and starting anywhere in `[l, r]` is affordable
   (a shorter block has a smaller total), so add `r - l + 1` to the answer.

If a single shift exceeds the budget, `l` ends up at `r + 1` and the window is
empty, contributing `0`. With zero or negative pay the monotonicity fails and
this approach no longer works.

## Complexity

- Time: O(n) — `l` and `r` each only move forward.
- Space: O(1).

The count can reach n(n+1)/2 ≈ 5·10^9, so use a 64-bit integer in languages
with fixed-width ints.

## Code (Python)

```python
def affordable_shift_blocks(pay, budget):
    total = 0
    left = 0
    count = 0
    for right, p in enumerate(pay):
        total += p
        while total > budget:
            total -= pay[left]
            left += 1
        count += right - left + 1
    return count
```
