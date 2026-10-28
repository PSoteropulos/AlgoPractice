from collections import deque
from typing import List, Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def build_tree(values: List[Optional[int]]) -> Optional[TreeNode]:
    """Build a tree from LeetCode-style compact level-order values."""
    if not values or values[0] is None:
        return None
    root = TreeNode(values[0])
    queue = deque([root])
    i = 1
    while queue and i < len(values):
        node = queue.popleft()
        if i < len(values):
            v = values[i]
            i += 1
            if v is not None:
                node.left = TreeNode(v)
                queue.append(node.left)
        if i < len(values):
            v = values[i]
            i += 1
            if v is not None:
                node.right = TreeNode(v)
                queue.append(node.right)
    return root


def count_standouts(root: Optional[TreeNode]) -> int:
    """Count non-root nodes whose value is strictly greater than the average of their ancestors."""
    # TODO: implement
    pass


if __name__ == "__main__":
    tests = [
        ([10, 4, 12, 3, 5, 13, 20], 3),
        ([5, None, 6, None, 7], 2),
        ([2, 1, None, 1, None, 10], 1),
        ([7], 0),                       # extra: root alone is never a standout
        ([1, 9, None, 5], 1),           # extra: 5 equals avg(1, 9), not strictly greater
        ([0, 0, 0, 0], 0),              # extra: all zeros
    ]

    for values, expected in tests:
        root = build_tree(values)
        got = count_standouts(root)
        status = "PASS" if got == expected else "FAIL"
        print(f"{status} root={values} expected={expected} got={got}")
