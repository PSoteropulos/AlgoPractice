# Reference Solution: Snack Budget Combos

## Approach

This is a classic "count distinct combinations summing to a target"
backtracking problem, extended with a minimum-length requirement.

1. **Sort `prices`.** Sorting groups equal prices together, which makes it
   easy to skip duplicate branches, and lets us prune early once the
   current candidate price exceeds the remaining budget (since everything
   after it is at least as large).

2. **Backtrack with a `start` index, `remaining` budget, and current
   combination `length`:**
   - If `remaining == 0`: we've found a combination that sums exactly to
     the budget. If its `length >= 2`, count it. Either way, stop
     recursing on this branch — every price is positive, so adding more
     items could only overshoot.
   - Otherwise, try each index `i` from `start` to the end:
     - **Skip duplicates at this recursion depth:** if `i > start` and
       `sorted[i] == sorted[i - 1]`, skip it. This is the key trick that
       collapses multiple slots with the same price into a single counted
       combination per distinct multiset — the first occurrence of a
       price value at a given tree depth is used to represent every
       combination built from that value at that position.
     - **Prune:** if `sorted[i] > remaining`, break out of the loop
       entirely (everything after `i` is even larger, since the array is
       sorted).
     - Otherwise, recurse into `backtrack(i + 1, remaining - sorted[i],
       length + 1)`, choosing slot `i` and moving strictly forward so each
       slot is used at most once.

3. Start the recursion with `backtrack(0, budget, 0)` and return the final
   count.

```python
def count_snack_combos(prices: list[int], budget: int) -> int:
    sorted_prices = sorted(prices)
    n = len(sorted_prices)
    count = 0

    def backtrack(start: int, remaining: int, length: int) -> None:
        nonlocal count
        if remaining == 0:
            if length >= 2:
                count += 1
            return
        for i in range(start, n):
            if i > start and sorted_prices[i] == sorted_prices[i - 1]:
                continue
            if sorted_prices[i] > remaining:
                break
            backtrack(i + 1, remaining - sorted_prices[i], length + 1)

    backtrack(0, budget, 0)
    return count
```

### Why the duplicate-skip is safe

At a fixed recursion depth (a fixed `start`), every index `i` we try
represents "the next slot chosen for this branch." If two indices at that
depth hold the same price, choosing either one leads to the same set of
reachable price-multisets from that point forward (the remaining budget
and available slots-to-choose-from are structurally identical up to
relabeling). So trying only the first such index per depth still explores
every *distinct* multiset exactly once, while trying every duplicate index
would recount the same multiset multiple times.

## Complexity

- **Time:** `O(2^n)` worst case (every subset can in principle be a
  candidate branch), though the `remaining` and sorted-order pruning cut
  this down substantially in practice. Given the constraint `n <= 20`,
  this is comfortably fast.
- **Space:** `O(n)` for the recursion stack (the maximum combination
  length is bounded by `n`).
