# Steady Relay Subtrees — Reference Solution

## Approach

This is a bottom-up (post-order) tree recursion where each call needs to
report two things to its parent:

1. Its own **height**, so the parent can check its own gap.
2. Whether its **entire subtree** is k-steady, so the parent's own
   k-steadiness doesn't wrongly pass when a descendant already failed.

Write a helper that returns `(height, isSteady)` for the subtree rooted at
`node`:

- An empty subtree (`null`) has height `0` and is trivially steady (there's
  nothing inside it that could violate the rule).
- Otherwise, recurse into `left` and `right` first to get
  `(leftHeight, leftSteady)` and `(rightHeight, rightSteady)`.
- The current node's height is `1 + max(leftHeight, rightHeight)`.
- The current node's subtree is steady only if **both** children's
  subtrees were already steady **and** the node's own gap,
  `|leftHeight - rightHeight|`, is at most `k`. A single deep violation
  anywhere below propagates `false` all the way up, so a parent can never
  be marked steady on top of a broken child.
- Every time a node's subtree comes back steady, increment a running
  counter — that counter is the final answer.

```python
def count_steady_subtrees(root, k):
    count = 0

    def helper(node):
        nonlocal count
        if node is None:
            return 0, True
        lh, l_ok = helper(node.left)
        rh, r_ok = helper(node.right)
        height = 1 + max(lh, rh)
        ok = l_ok and r_ok and abs(lh - rh) <= k
        if ok:
            count += 1
        return height, ok

    helper(root)
    return count
```

## Why this is correct

- Height is computed exactly the standard way, bottom-up, so by the time a
  node's own gap is checked, both children's heights are already final.
- k-steadiness is defined over *every* node in the subtree, not just the
  root of that subtree — the recursion enforces this by requiring both
  `left_ok` and `right_ok` before even considering the node's own gap. A
  node whose own gap is fine but whose child subtree already contains a
  violation correctly comes back `False`.
- Because the check is bottom-up, a node is counted exactly once, the
  moment its own `(height, ok)` pair is computed, and never revisited.

## Complexity

- **Time:** `O(n)` — the helper visits each node exactly once and does
  `O(1)` work per node beyond the two recursive calls.
- **Space:** `O(h)` for the recursion stack, where `h` is the height of
  the tree (`O(n)` worst case for a completely skewed tree, `O(log n)`
  for a balanced one). No auxiliary data structures are needed.

## Follow-up: incremental updates

For a single insertion or deletion, only the ancestors of the changed
node have their height or steadiness potentially affected — everything
elsewhere in the tree is untouched. If each node caches its own
`(height, isSteady)` pair, an update can walk from the changed node back
up to the root, recomputing only that path's cached values from its
(already up to date) children, and adjusting the running steady-count by
the number of nodes on that path whose `isSteady` flag flips. That turns
each update into `O(h)` work instead of a full `O(n)` recount, at the
cost of maintaining the cached pair at every node.
