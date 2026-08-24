# Second-Deepest Level Sum — Reference Solution

## Approach

The key idea is to do this in a **single breadth-first pass**, keeping only
two things in flight at once: the *current* level's list of nodes, and the
sum of the *previous* level (the level one shallower). We never need to know
the max depth ahead of time — we just keep sliding these two levels forward
until we run out of tree.

1. If `root` is `null`, there is no level at all — return `0`.
2. Start with `level = [root]` and `prevSum = 0`.
3. Repeat:
   - Build `nextLevel` by collecting the children of every node in `level`.
   - If `nextLevel` is empty, `level` is the deepest level that exists,
     which means `prevSum` (computed on the *previous* iteration) already
     holds the sum of the level directly above it — stop.
   - Otherwise, set `prevSum` to the sum of the values in `level` (since
     `level` is about to be superseded by `nextLevel`, `level` is a
     candidate for "the level above the deepest one"), then advance
     `level = nextLevel`.
4. Return `prevSum`.

Because `prevSum` is only committed to a level *after* we've confirmed a
level exists below it, it always ends up holding the sum of the true
second-deepest level. If the tree is empty or has just one level, the loop
breaks on its very first iteration (before `prevSum` is ever set away from
its initial `0`), which naturally produces the `0` the problem asks for.

```python
def second_deepest_level_sum(root):
    if root is None:
        return 0
    level = [root]
    prev_sum = 0
    while True:
        next_level = []
        for node in level:
            if node.left:
                next_level.append(node.left)
            if node.right:
                next_level.append(node.right)
        if not next_level:
            break
        prev_sum = sum(n.val for n in level)
        level = next_level
    return prev_sum
```

### Follow-up

This is already a single traversal using only `O(w)` extra space, where `w`
is the widest level (for the `level` / `next_level` lists) — no second pass
over the tree is needed, and the max depth is never computed explicitly.

To also report the depth at which the sum occurs without extra traversal,
just track a `depth` counter alongside `prev_sum` and commit both together:

```python
def second_deepest_level_sum_with_depth(root):
    if root is None:
        return 0, -1
    level = [root]
    prev_sum, prev_depth, depth = 0, -1, 0
    while True:
        next_level = []
        for node in level:
            if node.left:
                next_level.append(node.left)
            if node.right:
                next_level.append(node.right)
        if not next_level:
            break
        prev_sum, prev_depth = sum(n.val for n in level), depth
        level = next_level
        depth += 1
    return prev_sum, prev_depth
```

## Why this is correct

- `level` always holds exactly the nodes at the current BFS depth, since it
  is rebuilt each iteration from the children of the previous `level`.
- The loop only stops once a level (`level`) produces no children at all —
  by definition, that makes `level` the deepest level in the tree.
- `prev_sum` is overwritten with the sum of `level` on every iteration
  *before* checking whether the resulting `next_level` will itself be the
  last one — so the value left in `prev_sum` when the loop exits is always
  the sum of the level immediately above the (just-confirmed) deepest one.
- The single-node and empty-tree cases both break out of the loop on the
  first check, before `prev_sum` is ever reassigned, correctly returning
  `0`.

## Complexity

- **Time:** `O(n)`, where `n` is the number of nodes — every node is
  visited exactly once, either while summing its level or while collecting
  its children for the next level.
- **Space:** `O(w)`, where `w` is the width of the widest level in the
  tree — `level` and `next_level` never hold more nodes than exist at a
  single depth. In the worst case (a wide, shallow tree) `w` can be
  `O(n)`; in the best case (a narrow, deep tree) it is `O(1)`.
