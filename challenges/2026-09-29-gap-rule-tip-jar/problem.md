# Gap-Rule Tip Jar

**Difficulty:** Medium
**Topic:** Dynamic Programming

## Description

A street musician walks past `n` cafe patios in a fixed order, numbered `0`
to `n - 1`. Playing at patio `i` would net `tips[i]` dollars. A tip value can
be negative: some patios charge a permit fee that exceeds the tips collected.

City rules say the musician needs a break between sets: if they play at two
different patios `i < j`, then `j - i >= d`. In other words, any two chosen
patios must be at least `d` positions apart. The musician may play at any
number of patios (including none) as long as this rule holds.

Return the **maximum total earnings** over all valid choices of patios. Playing
at no patios is allowed and earns `0`.

## Examples

**Example 1:**
```
Input: tips = [4, 1, 7, 3, 6], d = 2
Output: 17
Explanation:
  Play at patios 0, 2 and 4 (tips 4 + 7 + 6 = 17). Each adjacent pair of
  chosen patios is exactly 2 apart, which satisfies the rule. Any valid
  choice that skips one of these earns less.
```

**Example 2:**
```
Input: tips = [5, 10, 5, 10], d = 3
Output: 15
Explanation:
  Patios 0 and 3 are 3 apart, so playing both is allowed: 5 + 10 = 15.
  Patios 1 and 3 are only 2 apart, so 10 + 10 is not allowed. The best
  single patio is worth 10, so 15 wins.
```

**Example 3:**
```
Input: tips = [-3, -1, -2], d = 2
Output: 0
Explanation:
  Every patio loses money, so the best plan is to play nowhere.
```

## Constraints

- `1 <= tips.length <= 10^5`
- `-10^4 <= tips[i] <= 10^4`
- `1 <= d <= 10^5`

## Follow-up

Return not just the maximum total, but also one set of patio indices that
achieves it. Can you do this without increasing the asymptotic time or space?
