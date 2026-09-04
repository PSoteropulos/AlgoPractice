# Snack Budget Combos

**Difficulty:** Medium
**Topic:** Backtracking

## Description

A vending machine stocks `n` snacks. You are given `prices`, an array of `n`
positive integers where `prices[i]` is the price of the `i`-th snack slot
(prices may repeat across slots — the machine can stock duplicate items).
You also have a fixed `budget`.

You want to buy a **combination of two or more snacks** (order doesn't
matter, and each slot can be used at most once) whose prices add up to
*exactly* `budget`. Two combinations are considered the **same** if they
contain the same multiset of prices, even if they were assembled from
different slots — for example, buying "one $3 snack and one $5 snack" is
the same combination regardless of which $3-priced slot you picked it from.

Return the number of **distinct** combinations (by price multiset) of
length two or more that sum exactly to `budget`.

## Examples

### Example 1

```
prices = [1, 2, 3, 4, 3]
budget = 6
Output: 3
```

**Explanation:** The distinct qualifying multisets are `{1, 2, 3}` (using
either of the two slots priced `3`, still one distinct combo), `{2, 4}`,
and `{3, 3}` (the two separate `3`-priced slots combined together). That's
3 distinct combinations. Single snacks (like the lone slot at price `6`,
which doesn't exist here) would never count anyway since a combo needs at
least two snacks.

### Example 2

```
prices = [5, 3, 3, 5]
budget = 8
Output: 1
```

**Explanation:** The only qualifying multiset is `{3, 5}` (sums to `8`).
Even though there are two `3`-priced slots and two `5`-priced slots, giving
several ways to *pick* the slots, they all form the same price multiset
`{3, 5}`, so it counts once. No length-3 combination reaches exactly `8`
(the cheapest three slots already sum to `3 + 3 + 5 = 11`).

### Example 3

```
prices = [10]
budget = 10
Output: 0
```

**Explanation:** A single snack priced exactly at the budget doesn't
qualify, since a combination must contain at least two snacks, and there is
only one slot available.

## Constraints

- `0 <= prices.length <= 20`
- `1 <= prices[i] <= 1000`
- `1 <= budget <= 10000`

## Follow-up

Suppose you also needed to return the actual list of distinct price
multisets (not just the count). How would you adapt the backtracking
approach, and would the sorting/duplicate-skipping strategy still apply
the same way?
