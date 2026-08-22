# Longest Doubling Chain — Reference Solution

## Approach

This is a hash-set variant of the classic "longest consecutive sequence"
pattern, with multiplication by 2 in place of +1.

1. Put every value from `nums` into a hash set `distinct` (this collapses
   duplicates, which matters because a repeated value must not let us
   "reuse" it to artificially extend a chain).
2. For each distinct value `x`, decide whether it can be the **start** of a
   chain, i.e. whether `x / 2` is *not* a valid predecessor already in the
   set:
   - `0` is always treated as its own chain of length 1 (doubling `0`
     never moves anywhere, so it can never be a non-trivial predecessor or
     successor of anything else).
   - Otherwise, `x` has a predecessor exactly when `x` is even **and**
     `x / 2` is present in `distinct`. If it has a predecessor, skip it —
     it will be counted when we expand from that predecessor instead.
3. For every value that *is* a chain start, walk forward multiplying by 2
   (`x, 2x, 4x, ...`) while each successive value remains in `distinct`,
   counting the length of that walk.
4. Track the maximum length seen across all chain starts.

Skipping non-start values is what keeps this from being O(n²): every
element is only ever walked once, as part of the single chain it belongs
to, exactly as in the classic Longest Consecutive Sequence proof — each
value is visited once when we test whether it's a start, and at most once
more while it's being walked as part of its chain's expansion.

```python
def longest_doubling_chain(nums):
    distinct = set(nums)
    best = 0
    for x in distinct:
        if x == 0:
            best = max(best, 1)
            continue
        has_predecessor = (x % 2 == 0) and (x // 2) in distinct
        if has_predecessor:
            continue
        length = 0
        cur = x
        while cur in distinct:
            length += 1
            cur *= 2
        best = max(best, length)
    return best
```

## Why this is correct

Every value in `distinct` belongs to exactly one maximal doubling chain
(the chain obtained by repeatedly halving it as long as the halved value
is an integer present in the set, then repeatedly doubling from there).
Each such maximal chain has exactly one element with no valid predecessor
— its start — so iterating over every value, skipping the ones that have a
predecessor, and expanding only from the starts visits every maximal
chain exactly once and computes its true length.

`0` is handled separately because `0 / 2 = 0` would otherwise make `0`
look like its own predecessor, causing an infinite loop when walking
forward (`0 * 2 = 0` forever). Since doubling zero never reaches a new
value, its chain length is defined to be exactly 1.

## Complexity

- **Time:** O(n) on average. Building the set is O(n). Across all chain
  starts, the total number of "walk forward" steps is bounded by the
  number of elements in `distinct` (each element is walked exactly once,
  as part of its own chain), so the total work is O(n) rather than
  O(n · max chain length).
- **Space:** O(n) for the hash set of distinct values.
