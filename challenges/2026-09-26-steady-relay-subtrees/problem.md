# Steady Relay Subtrees

**Difficulty:** Medium
**Topic:** Trees

## Description

A telecom crew models its backup relay network as a binary tree of towers.
Every tower may forward to a **primary** relay (left child) and a
**secondary** relay (right child).

For any tower `x`, define its **height** recursively:

- `height(null) = 0` (a missing relay has height `0`).
- `height(x) = 1 + max(height(x.left), height(x.right))`.

Engineers only trust a tower's entire downstream network if it is
**k-steady**: for *every* tower `y` inside that network (including `x`
itself), the two relay chains hanging off `y` must be close enough in
depth —

```
|height(y.left) - height(y.right)| <= k
```

Note that a leaf trivially satisfies this (both of its chains have height
`0`), and a single failing tower anywhere inside the network — even deep
down — disqualifies the whole network rooted at `x`, not just `x` itself.

Given the root of the tower hierarchy and a non-negative integer `k`,
return the **number of towers `x`** whose downstream network (the subtree
rooted at `x`) is k-steady.

The tree is given in the standard compact level-order format: values are
listed breadth-first, left-to-right, and `null` marks a missing child (a
`null` entry has no children listed after it). The tree may be empty.

## Examples

**Example 1**

```
Input:  root = [1,2,3,4,null], k = 1
Output: 4
```

```
      1
     / \
    2   3
   /
  4
```

Explanation: Heights are `height(4)=1`, `height(2)=2`, `height(3)=1`,
`height(1)=3`. Checking every node's own gap: `4` is a leaf (gap `0`),
`3` is a leaf (gap `0`), `2` has gap `|height(4)-height(null)| = |1-0| =
1`, and `1` has gap `|height(2)-height(3)| = |2-1| = 1`. Every gap is
`<= k = 1`, so every tower's downstream network is k-steady: all `4`
towers count.

**Example 2**

```
Input:  root = [1,2,3,4,null], k = 0
Output: 2
```

Explanation: Same tree as Example 1, but now `k = 0`. Tower `2` has gap
`1 > 0`, so tower `2`'s own network is disqualified — and since `2`'s
network fails, tower `1`'s network (which contains `2`) is disqualified
too, regardless of `1`'s own gap. Only the two leaves, `3` and `4`, have
gap `0` and count.

**Example 3**

```
Input:  root = [10,5,15,3,8,null,20,1], k = 0
Output: 3
```

```
            10
          /    \
         5      15
        / \       \
       3   8       20
      /
     1
```

Explanation: Heights: `height(1)=1`, `height(3)=2`, `height(8)=1`,
`height(5)=3`, `height(20)=1`, `height(15)=2`, `height(10)=4`. With
`k = 0`, every internal tower here (`3`, `5`, `15`, `10`) has a left/right
height gap of exactly `1`, which disqualifies each of their networks. Only
the three leaves — `1`, `8`, `20` — have gap `0` and count.

## Constraints

- The number of towers is in the range `[0, 10^4]`. An empty tree has `0`
  qualifying towers.
- `0 <= k <= 10^4`.
- `-1000 <= Node.val <= 1000` (values are just tower labels and do not
  otherwise affect the answer).

## Follow-up

The natural solution recomputes each subtree's height and k-steady status
bottom-up in one pass. Now suppose the network changes over time — towers
are added or removed one at a time — and after each change you must report
the current count of k-steady towers. Recomputing from scratch after every
change costs `O(n)` per update. Can you describe a strategy that avoids
redoing all the work each time, updating only what's affected along the
path from the change back to the root?
