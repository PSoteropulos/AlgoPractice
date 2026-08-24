# Second-Deepest Level Sum

**Difficulty:** Medium
**Topic:** Trees

## Description

You are given the root of a binary tree. Define the **depth** of the root
node as `0`, and the depth of any other node as one more than the depth of
its parent. The **deepest level** of the tree is the largest depth at which
at least one node exists.

Return the sum of the values of all nodes whose depth is exactly
`deepest level - 1` — that is, the level directly above the deepest one.

If the tree is empty, or the tree has only a single level (just a root
with no children), there is no level above the deepest one, so return `0`.

The tree is given in the standard compact level-order format: values are
listed breadth-first, left-to-right, and `null` marks a missing child (a
`null` entry does not have children of its own listed after it).

## Examples

**Example 1**

```
Input:  root = [1,2,3,4,5]
Output: 5
```

```
        1
      /   \
     2     3
    / \
   4   5
```

Explanation: The deepest level is depth 2, containing nodes `4` and `5`.
The level directly above it, depth 1, contains nodes `2` and `3`, whose
values sum to `2 + 3 = 5`.

**Example 2**

```
Input:  root = [10]
Output: 0
```

Explanation: The tree has only one level (the root itself), so there is
no level above the deepest one.

**Example 3**

```
Input:  root = [1,2,null,3,null,4,null]
Output: 3
```

```
1
└── 2
    └── 3
        └── 4
```

Explanation: This is a left-leaning chain of depth 3 (node `4` is the
deepest, at depth 3). The level directly above it, depth 2, contains only
node `3`, so the sum is `3`.

## Constraints

- The number of nodes in the tree is in the range `[0, 10^4]`.
- `-10^5 <= Node.val <= 10^5`

## Follow-up

A natural first attempt computes the tree's max depth in one pass, then
sums the nodes at `max depth - 1` in a second pass. Can you produce the
answer in a **single traversal**, without knowing the max depth in
advance, using only `O(w)` extra space where `w` is the widest level's
width? As a bonus, extend your solution to also report the depth at which
the returned sum occurs, without any extra traversal.
