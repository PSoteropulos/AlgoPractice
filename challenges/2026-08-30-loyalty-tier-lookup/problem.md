# Loyalty Tier Lookup

**Difficulty:** Easy
**Topic:** Binary Search

## Description

A coffee shop's loyalty program has `n` tiers, numbered `0` to `n - 1`.
Each tier has a minimum point threshold required to unlock it, given as
a **strictly increasing** array `thresholds`, where `thresholds[i]` is
the minimum number of points needed to be at tier `i`.

Given a customer's total points `points`, return the **highest** tier
index `i` such that `thresholds[i] <= points`. If the customer has not
reached even the first tier (`thresholds[0] > points`), return `-1`.

Your solution should run in **O(log n) time** — do not scan the array
linearly; use binary search to exploit the fact that `thresholds` is
sorted.

## Examples

**Example 1**

```
Input:  thresholds = [100, 250, 500, 1000], points = 300
Output: 1
```

Explanation: `thresholds[1] = 250 <= 300`, but `thresholds[2] = 500 >
300`, so tier `1` is the highest one the customer qualifies for.

**Example 2**

```
Input:  thresholds = [100, 250, 500, 1000], points = 50
Output: -1
```

Explanation: `50` is below even `thresholds[0] = 100`, so the customer
has not unlocked any tier.

**Example 3**

```
Input:  thresholds = [100, 250, 500, 1000], points = 1000
Output: 3
```

Explanation: `points` exactly meets `thresholds[3] = 1000`, the last
tier, so the answer is `3`.

## Constraints

- `1 <= thresholds.length <= 10^5`
- `thresholds` is sorted in strictly increasing order.
- `1 <= thresholds[i] <= 10^9`
- `0 <= points <= 10^9`

## Follow-up

Suppose the program is redesigned so several tiers can share the exact
same threshold (ties allowed), and `thresholds` is only **sorted, not
strictly increasing** — for example `[100, 250, 250, 250, 500]`. The
rule "return the highest qualifying tier index" still applies. How
would you adjust your binary search so it returns the *last* matching
index among the ties, rather than an arbitrary one? Does the time
complexity change?
