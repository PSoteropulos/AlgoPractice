# Odd-Sum Batch Flip

**Difficulty:** Medium
**Topic:** Linked Lists

## Description

A packing line receives crates on a conveyor, modeled as a singly linked
list. Each node holds `val`, the weight of one crate in kilograms.

The line supervisor splits the conveyor, from the head, into consecutive
**batches of exactly `k` crates**. If the number of crates is not a
multiple of `k`, the final batch is shorter than `k`; that short batch is
never touched.

For every full batch (exactly `k` crates), look at the **sum** of its
weights:

- If the sum is **odd**, the batch is flipped: the order of its `k` crates
  is reversed.
- If the sum is **even**, the batch stays exactly as it is.

Batches are judged using the original weights, and a flip only reorders
crates inside its own batch, so batches never affect each other.

Return the head of the resulting list. You must re-link the existing nodes
rather than creating new ones or overwriting node values, and you should
use `O(1)` extra space beyond a few pointers.

## Examples

### Example 1

**Input:** `head = [1, 2, 3, 4, 5, 6]`, `k = 3`

**Output:** `[1, 2, 3, 6, 5, 4]`

**Explanation:** Batch `[1, 2, 3]` sums to `6` (even), so it stays. Batch
`[4, 5, 6]` sums to `15` (odd), so it is reversed to `[6, 5, 4]`.

### Example 2

**Input:** `head = [2, 7, 4, 2, 8, 5, 9]`, `k = 2`

**Output:** `[7, 2, 4, 2, 5, 8, 9]`

**Explanation:** Batches are `[2, 7]`, `[4, 2]`, `[8, 5]`, and a short
leftover `[9]`. `[2, 7]` sums to `9` (odd) so it becomes `[7, 2]`.
`[4, 2]` sums to `6` (even) so it stays. `[8, 5]` sums to `13` (odd) so it
becomes `[5, 8]`. The leftover `[9]` is a short batch and is untouched.

### Example 3

**Input:** `head = [5, 3, 1]`, `k = 4`

**Output:** `[5, 3, 1]`

**Explanation:** There are only 3 crates, fewer than `k = 4`, so there is
no full batch. Nothing changes even though the total (`9`) is odd.

## Constraints

- `0 <= number of nodes <= 10^5`
- `0 <= val <= 1000`
- `1 <= k <= 10^5`

## Follow-up

Instead of reversing an odd-sum batch, what if a batch must be flipped
when its sum is odd **or** when it contains a strictly decreasing run
of length `k`? Can you still do it in a single pass with `O(1)` extra
space? And how would your approach change if the list were doubly linked?
