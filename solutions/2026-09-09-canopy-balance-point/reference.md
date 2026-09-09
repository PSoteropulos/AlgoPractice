# Canopy Balance Point — Reference Solution

## Approach

Break the problem into two clean passes.

**Pass 1 — post-order, compute every node's balance.**
Write a helper `subtreeSum(node)` that returns the sum of `node.val` plus
everything in its subtree, and along the way records `balance(node) =
|leftSum - rightSum|` for every node it visits (leaves get `0`, since
both sums are `0`). Because a node's balance depends on its children's
subtree sums, this has to be computed bottom-up (post-order): recurse
into `left` and `right` first, *then* compute and record the current
node's balance.

**Pass 2 — pre-order, find the first minimum.**
Once every node's balance is known, take the minimum over all of them.
Then walk the tree again in pre-order (node, left, right) and return the
first node whose balance equals that minimum — pre-order visits a node
before anything in its subtrees, so this naturally respects the
"first in pre-order" tie-break rule.

```python
def find_min_balance_node(root):
    balances = {}

    def subtree_sum(node):
        if node is None:
            return 0
        left_sum = subtree_sum(node.left)
        right_sum = subtree_sum(node.right)
        balances[id(node)] = abs(left_sum - right_sum)
        return left_sum + right_sum + node.val

    subtree_sum(root)
    min_balance = min(balances.values())

    def preorder(node):
        if node is None:
            return None
        if balances[id(node)] == min_balance:
            return (node.val, balances[id(node)])
        return preorder(node.left) or preorder(node.right)

    return preorder(root)
```

## Why this is correct

- `subtree_sum` only records a node's balance after both of its
  children's subtree sums are known, so every recorded balance is exact
  by the time pass 1 finishes.
- The global minimum balance is well-defined since the tree is
  non-empty (there's always at least one node, hence at least one
  balance value).
- Pre-order traversal visits a parent strictly before any node in its
  subtrees, so the first node pass 2 finds with `balance == min_balance`
  is guaranteed to be the earliest such node in pre-order order — exactly
  the tie-break the problem asks for.

## Complexity

- **Time:** `O(n)` — pass 1 visits every node once to compute sums and
  balances; pass 2 visits at most every node once more (it stops as soon
  as it finds a match).
- **Space:** `O(n)` for the `balances` map plus `O(h)` recursion depth
  (`h` = tree height) for each pass.

## Follow-up: single traversal

The two-pass version above needs the global minimum before it can start
the pre-order search. To avoid that, restructure the recursion so each
call returns not just its subtree sum, but also **the best (earliest
pre-order, minimum-balance) candidate found so far within that
subtree** — computed bottom-up in the same pass:

```python
def find_min_balance_node(root):
    def solve(node):
        # returns (subtree_sum, best_value, best_balance)
        if node is None:
            return 0, None, None
        left_sum, lv, lb = solve(node.left)
        right_sum, rv, rb = solve(node.right)
        self_bal = abs(left_sum - right_sum)

        best_val, best_bal = node.val, self_bal
        if lb is not None and lb < best_bal:
            best_val, best_bal = lv, lb
        if rb is not None and rb < best_bal:
            best_val, best_bal = rv, rb

        return left_sum + right_sum + node.val, best_val, best_bal

    _, value, balance = solve(root)
    return value, balance
```

At each node, the candidate is chosen among three options, checked in
pre-order priority — **self**, then the **left** subtree's own best
candidate, then the **right** subtree's — and a later option only
overrides an earlier one when its balance is *strictly* smaller (never
on a tie). Since the left and right candidates were themselves already
resolved the same way, this correctly propagates the earliest-pre-order
minimum-balance node all the way up to the root in a single traversal.

- **Time:** `O(n)`, one recursive pass.
- **Space:** `O(h)` — no auxiliary map, just the recursion stack.
