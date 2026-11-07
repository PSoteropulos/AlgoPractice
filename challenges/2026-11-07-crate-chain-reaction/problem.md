# Crate Chain Reaction

**Difficulty:** Easy
**Topic:** Stacks / Queues

## Description

A warehouse conveyor belt carries a row of crates, each stamped with an integer
label. You are given the integer array `crates` (listed from the front of the
belt to the back) and an integer `k`.

The crates are unusually reactive: whenever `k` **adjacent** crates on the belt
carry the **same** label, those `k` crates immediately vanish and the crates on
either side of the gap slide together. The newly adjacent crates may then form
another group of `k` equal labels, which vanishes too, and so on. The reaction
continues until no `k` adjacent crates share a label.

Return the labels of the crates that remain, in their original relative order.
(It can be shown that the final belt does not depend on the order in which
groups are removed.)

## Examples

**Example 1**

```
Input:  crates = [2,2,3,3,3,2], k = 3
Output: []
```
Explanation: the three `3`s vanish, leaving `[2,2,2]`, and those three `2`s
then vanish as well.

**Example 2**

```
Input:  crates = [1,1,2,2,1], k = 2
Output: [1]
```
Explanation: the two `1`s at the front vanish, then the two `2`s vanish (or in
the other order, same result), leaving the single trailing `1`.

**Example 3**

```
Input:  crates = [5,5,5,5,5], k = 3
Output: [5,5]
```
Explanation: any three of the five `5`s vanish, leaving two crates, which is
fewer than `k`, so the reaction stops.

## Constraints

- `1 <= len(crates) <= 100000`
- `1 <= crates[i] <= 10^9`
- `2 <= k <= 10^4`

## Follow-up

Can you do it in a single left-to-right pass using `O(n)` time, without ever
rescanning the belt from the start after a removal? Think about what you need to
remember about the crates that are still on the belt.
