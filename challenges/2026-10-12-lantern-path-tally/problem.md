# Lantern Path Tally

**Difficulty:** Medium
**Topic:** Trees (with Hashing / prefix sums)

## Description

A hillside garden is lit by lanterns hung at the junctions of a branching
footpath. The footpath forms a binary tree, and each node holds an integer
**glow** value (`Node.val`). A glow can be negative: some lanterns are
"shade lanterns" that dim the light around them.

A **descending walk** starts at any node and moves only from a parent to
one of its children, stopping at any node at or below the start. A walk
always contains at least one node, and it must never turn back upward. Its
**total glow** is the sum of the values of all nodes on it.

Given the `root` of the tree and an integer `target`, return the number of
descending walks whose total glow is **exactly** `target`.

Two walks are different if they differ in their start node or their end
node. (Walks never need to begin at the root or end at a leaf.)

The tree is given in compact level-order format: values are listed
breadth-first, left to right, and `null` marks a missing child (a `null`
has no children listed after it). The tree may be empty (`[]`), in which case
the answer is `0`.

## Examples

**Example 1**

```
Input:  root = [5,3,-2,2,1,null,4], target = 5
Output: 2
```

```
      5
     / \
    3   -2
   / \    \
  2   1    4
```

Explanation: The walks with total `5` are `5` (the root alone) and
`3 -> 2`. All other walks sum to something else, e.g. `5 -> 3 = 8`,
`3 -> 1 = 4`, `-2 -> 4 = 2`, `5 -> -2 -> 4 = 7`.

**Example 2**

```
Input:  root = [0,null,0,null,0], target = 0
Output: 6
```

```
0
 \
  0
   \
    0
```

Explanation: A chain of three zero-glow nodes. Every contiguous piece of
the chain is a valid walk: 3 single-node walks, 2 two-node walks and 1
three-node walk, all with total `0`. That is `3 + 2 + 1 = 6`.

**Example 3**

```
Input:  root = [2,-2,null,2,null,-2], target = 0
Output: 4
```

```
2
|
-2
|
2
|
-2
```

(Each node is the left child of the one above it.)

Explanation: The chain is `2, -2, 2, -2`. Walks summing to `0`: the three
adjacent pairs `(2,-2)`, `(-2,2)`, `(2,-2)`, plus the whole chain
`2 + -2 + 2 + -2 = 0`. Three-node walks sum to `2` or `-2`, and single
nodes are non-zero, so the answer is `4`.

## Constraints

- The number of nodes is in the range `[0, 10^4]`.
- `-1000 <= Node.val <= 1000`.
- `-10^6 <= target <= 10^6`.

## Follow-up

Checking every start node separately takes `O(n * depth)` time, which is
`O(n^2)` on a long chain. Can you reach `O(n)` time with a single traversal?
Think about what a running sum from the root tells you about a walk that
starts in the middle of a root-to-node path, and remember to undo your
bookkeeping when you leave a subtree so that sibling branches don't see it.
