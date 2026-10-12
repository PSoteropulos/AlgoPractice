# Lantern Path Tally — Reference Solution

## Approach

Let `pre(v)` be the sum of values on the root-to-`v` path. A descending walk
that starts just below ancestor `a` and ends at `v` has total
`pre(v) - pre(a)`. So walks ending at `v` with total `target` correspond to
ancestors `a` (including the virtual "before the root" position with
`pre = 0`) satisfying `pre(a) = pre(v) - target`.

Run a DFS that carries the running sum and a hash map counting how many
times each prefix sum occurs on the **current root-to-node path**:

1. Seed the map with `{0: 1}` (a walk may start at the root).
2. At node `v`, update `pre += v.val`, add `map[pre - target]` to the answer.
3. Increment `map[pre]`, recurse into both children, then decrement
   `map[pre]` on the way out so sibling branches don't see this path.

Zeros and negatives are handled naturally because the map counts
occurrences (the chain `0,0,0` gives `3 + 2 + 1 = 6`).

```python
from collections import defaultdict, deque


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right


def build_tree(values):
    if not values or values[0] is None:
        return None
    root = TreeNode(values[0])
    queue, i = deque([root]), 1
    while queue and i < len(values):
        node = queue.popleft()
        for side in ("left", "right"):
            if i < len(values):
                v = values[i]
                i += 1
                if v is not None:
                    child = TreeNode(v)
                    setattr(node, side, child)
                    queue.append(child)
    return root


def count_descending_walks(root, target):
    seen = defaultdict(int)
    seen[0] = 1
    total = 0

    def dfs(node, pre):
        nonlocal total
        if node is None:
            return
        pre += node.val
        total += seen[pre - target]
        seen[pre] += 1
        dfs(node.left, pre)
        dfs(node.right, pre)
        seen[pre] -= 1

    dfs(root, 0)
    return total


if __name__ == "__main__":
    tests = [
        ([5, 3, -2, 2, 1, None, 4], 5, 2),
        ([0, None, 0, None, 0], 0, 6),
        ([2, -2, None, 2, None, -2], 0, 4),
        ([], 0, 0),
        ([7], 7, 1),
        ([7], 8, 0),
        ([1, 2, None, 3, None, 4], 6, 1),
    ]
    for values, target, expected in tests:
        got = count_descending_walks(build_tree(values), target)
        print("PASS" if got == expected else "FAIL", values, target, expected, got)
```

## Complexity

- **Time:** `O(n)` — each node is visited once with `O(1)` average hash work.
- **Space:** `O(h)` for the recursion stack and the map (at most `h + 1`
  distinct live prefix sums), where `h` is the tree height; `O(n)` worst case
  on a chain. For very deep chains use an iterative DFS to avoid recursion
  limits (Python's default limit is 1000, while `n` can be `10^4`).
