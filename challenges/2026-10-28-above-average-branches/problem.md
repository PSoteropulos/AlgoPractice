# Above-Average Branches

**Difficulty:** Easy
**Topic:** Trees

## Description

A hiking club maps a trail network as a binary tree. Each node is a
junction, and its value (`Node.val`) is the **elevation score** of that
junction. The root is the trailhead.

For any junction other than the root, look at the junction's **ancestors**:
every node on the path from the root down to (and including) the junction's
parent. A junction is a **standout** if its own score is **strictly greater**
than the average score of its ancestors.

Return the number of standout junctions in the tree. The root has no
ancestors, so it is never a standout.

The tree is given in the standard compact level-order format: values are
listed breadth-first, left-to-right, and `null` marks a missing child (a
`null` entry does not have children of its own listed after it). The tree
is guaranteed to be non-empty.

## Examples

**Example 1**

```
Input:  root = [10,4,12,3,5,13,20]
Output: 3
```

```
        10
       /  \
      4    12
     / \   / \
    3   5 13  20
```

Explanation: `4` vs ancestors `{10}` (avg 10): no. `12` vs `{10}`: yes.
`3` vs `{10,4}` (avg 7): no. `5` vs `{10,4}`: no. `13` vs `{10,12}`
(avg 11): yes. `20` vs `{10,12}`: yes. Three standouts.

**Example 2**

```
Input:  root = [5,null,6,null,7]
Output: 2
```

```
5
 \
  6
   \
    7
```

Explanation: `6` vs `{5}`: 6 > 5, yes. `7` vs `{5,6}` (avg 5.5): yes.

**Example 3**

```
Input:  root = [2,1,null,1,null,10]
Output: 1
```

```
2
|
1
|
1
|
10
```

(Each node is the left child of the one above it.)

Explanation: the first `1` vs `{2}`: no. The second `1` vs `{2,1}` (avg
1.5): no. `10` vs `{2,1,1}` (avg 4/3): yes. Note that averages need not be
whole numbers.

## Constraints

- The number of nodes in the tree is in the range `[1, 10^4]`.
- `0 <= Node.val <= 10^5`.

## Follow-up

Can you avoid floating-point arithmetic entirely? Can you do it with an
iterative traversal (no recursion), so a very deep, skinny tree cannot
overflow the call stack?
