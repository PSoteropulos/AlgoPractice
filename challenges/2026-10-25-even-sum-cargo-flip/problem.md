# Even-Sum Cargo Flip

**Difficulty:** Medium
**Topic:** Linked Lists

## Description

A cargo conveyor is modeled as a singly linked list, where each node holds
the weight (in kg) of one crate, ordered from the loading dock (`head`)
toward the exit.

The conveyor is divided into consecutive **batches** of exactly `k` crates,
starting from the head. If the final batch has fewer than `k` crates, it is
an incomplete batch and is never touched.

For every complete batch, add up the weights of its `k` crates:

- If the sum is **even**, the batch is flipped: the order of its `k` crates
  is reversed.
- If the sum is **odd**, the batch stays exactly as it is.

Batches are decided independently, using the original weights (flipping a
batch never changes its sum, and batches never share crates).

Given the head of the list and the integer `k`, return the head of the
rearranged list. Rearrange by **relinking the existing nodes** — do not
create new nodes or overwrite node values.

Your solution should run in **O(n) time and O(1) additional space**.

## Examples

**Example 1**

```
Input:  crates = [2, 4, 1, 2, 3, 5, 7], k = 2
Output: [4, 2, 1, 2, 5, 3, 7]
```

Explanation: The batches are `[2,4]`, `[1,2]`, `[3,5]`, and the leftover
`[7]`. Sums are `6` (even, flip), `3` (odd, keep), `8` (even, flip). The
leftover has fewer than `k = 2` crates, so it is untouched.

**Example 2**

```
Input:  crates = [1, 2, 4, 6, 2, 2, 9, 9], k = 3
Output: [1, 2, 4, 2, 2, 6, 9, 9]
```

Explanation: The batches are `[1,2,4]`, `[6,2,2]`, and the leftover
`[9,9]`. Sums are `7` (odd, keep) and `10` (even, flip, giving `[2,2,6]`).
The leftover is incomplete and stays as is.

**Example 3**

```
Input:  crates = [1, 2, 3, 4, 5, 6, 7, 8], k = 4
Output: [4, 3, 2, 1, 8, 7, 6, 5]
```

Explanation: The batches are `[1,2,3,4]` (sum `10`, even) and `[5,6,7,8]`
(sum `26`, even). Both are flipped.

## Constraints

- `1 <= n <= 10^5` (number of crates)
- `1 <= crates[i] <= 1000`
- `1 <= k <= 10^5` (`k` may exceed `n`, in which case nothing changes)

## Follow-up

Instead of sum parity, suppose a batch is flipped when its sum is divisible
by a given integer `m`. Does your approach change? What if you must process
the list in a single pass without first measuring its length?
