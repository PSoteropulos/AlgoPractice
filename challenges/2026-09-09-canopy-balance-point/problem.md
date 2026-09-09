# Canopy Balance Point

**Difficulty:** Medium
**Topic:** Trees

## Description

You are given the root of a binary tree representing the fork points of a
garden trellis. Each node has a positive integer **weight** (`Node.val`),
representing how much foliage hangs directly at that fork.

For any node, define:

- `leftLoad(node)` — the sum of the weights of every node in `node`'s left
  subtree (an empty subtree has a load of `0`).
- `rightLoad(node)` — the sum of the weights of every node in `node`'s right
  subtree (an empty subtree has a load of `0`).
- `balance(node) = |leftLoad(node) - rightLoad(node)|`.

Note that a leaf's two subtrees are both empty, so every leaf trivially has
`balance == 0`.

Find the node with the **minimum** `balance` value in the whole tree. If
several nodes tie for the minimum, return the one that appears **first in a
pre-order traversal** (visit node, then left subtree, then right subtree).

Return a pair `(value, balance)` — the winning node's own weight and its
balance value.

The tree is given in the standard compact level-order format: values are
listed breadth-first, left-to-right, and `null` marks a missing child (a
`null` entry does not have children of its own listed after it). The tree
is guaranteed to be non-empty.

## Examples

**Example 1**

```
Input:  root = [4,2,7,1,3,6,9]
Output: (1, 0)
```

```
        4
      /   \
     2     7
    / \   / \
   1   3 6   9
```

Explanation: This is a perfect binary tree, so every leaf (`1`, `3`, `6`,
`9`) has `balance == 0` (both of its subtrees are empty). None of the
internal nodes reach `0`: `balance(2) = |1-3| = 2`, `balance(7) = |6-9| =
3`, `balance(4) = |(2+1+3)-(7+6+9)| = |6-22| = 16`. The minimum balance
overall is `0`, tied among the four leaves. In pre-order (`4, 2, 1, 3, 7,
6, 9`) the first of them is `1`, so the answer is `(1, 0)`.

**Example 2**

```
Input:  root = [1,null,2,null,3]
Output: (3, 0)
```

```
1
 \
  2
   \
    3
```

Explanation: A right-leaning chain. `balance(3) = |0-0| = 0` (leaf).
`balance(2) = |0-3| = 3` (its right subtree is just node `3`).
`balance(1) = |0-5| = 5` (its right subtree is `2` and `3`, weights `2+3
= 5`). The only node with `balance == 0` is `3`, so the answer is `(3,
0)`.

**Example 3**

```
Input:  root = [5,3,3,1,1,1,1]
Output: (5, 0)
```

```
          5
        /   \
       3     3
      / \   / \
     1   1 1   1
```

Explanation: Every fork here is perfectly balanced: each `3` has
`leftLoad = rightLoad = 1`, and the root has `leftLoad = rightLoad = 3+1+1
= 5`. So *every* node in the tree has `balance == 0`, including the root
itself. Since the root is first in pre-order, it wins the tie, giving
`(5, 0)`.

## Constraints

- The number of nodes in the tree is in the range `[1, 10^4]`.
- `1 <= Node.val <= 10^5`.

## Follow-up

The straightforward approach computes every subtree sum in one post-order
pass, then walks the tree a second time in pre-order to find the first
node whose balance matches the global minimum. Can you do it in a
**single traversal**, without knowing the global minimum balance in
advance? (Hint: a post-order pass alone gives you each node's balance as
soon as it's computed, but not the *pre-order* rank you need for
tie-breaking — think about what extra piece of information you'd have to
carry back up from each call.)
