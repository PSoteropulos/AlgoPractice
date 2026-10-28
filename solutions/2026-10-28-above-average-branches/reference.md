# Above-Average Branches — Reference Solution

## Approach

A node's ancestors are exactly the nodes on the path from the root to its
parent, so a single top-down traversal can carry two numbers down with it:
`s`, the sum of the ancestors' values, and `k`, how many ancestors there are.

For a non-root node (`k > 0`) the condition `val > s / k` is rewritten as
`val * k > s`, which avoids floating-point entirely. When visiting a child,
pass down `s + node.val` and `k + 1`.

An explicit stack is used instead of recursion so a deep, skinny tree cannot
overflow the call stack.

```python
from collections import deque
from typing import List, Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def build_tree(values: List[Optional[int]]) -> Optional[TreeNode]:
    if not values or values[0] is None:
        return None
    root = TreeNode(values[0])
    queue = deque([root])
    i = 1
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


def count_standouts(root: Optional[TreeNode]) -> int:
    if root is None:
        return 0
    count = 0
    stack = [(root, 0, 0)]  # (node, ancestor sum, ancestor count)
    while stack:
        node, s, k = stack.pop()
        if k > 0 and node.val * k > s:
            count += 1
        for child in (node.left, node.right):
            if child:
                stack.append((child, s + node.val, k + 1))
    return count


if __name__ == "__main__":
    tests = [
        ([10, 4, 12, 3, 5, 13, 20], 3),
        ([5, None, 6, None, 7], 2),
        ([2, 1, None, 1, None, 10], 1),
        ([7], 0),
        ([1, 9, None, 5], 1),
        ([0, 0, 0, 0], 0),
    ]
    for values, expected in tests:
        got = count_standouts(build_tree(values))
        print("PASS" if got == expected else "FAIL", values, expected, got)
```

## Complexity

- **Time:** `O(n)` — each node is visited once.
- **Space:** `O(h)` for the stack in a DFS (`h` = tree height, up to `n` for a
  chain, `O(log n)` for a balanced tree).
