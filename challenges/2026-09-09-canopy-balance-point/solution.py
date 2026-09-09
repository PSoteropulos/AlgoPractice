from collections import deque
from typing import List, Optional, Tuple


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


def find_min_balance_node(root: Optional[TreeNode]) -> Tuple[int, int]:
    """Return (value, balance) of the min-balance node, first in pre-order on ties."""
    # TODO: implement
    pass


if __name__ == "__main__":
    tests = [
        ([4, 2, 7, 1, 3, 6, 9], (1, 0)),
        ([1, None, 2, None, 3], (3, 0)),
        ([5, 3, 3, 1, 1, 1, 1], (5, 0)),
        ([7], (7, 0)),                             # extra: single node
        ([1, 2, 100, None, 3], (3, 0)),             # extra: winner is mid-traversal, not root
    ]

    for values, expected in tests:
        root = build_tree(values)
        got = find_min_balance_node(root)
        status = "PASS" if got == expected else "FAIL"
        print(f"{status} root={values} expected={expected} got={got}")
