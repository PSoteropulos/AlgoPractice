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


def count_descending_walks(root: Optional[TreeNode], target: int) -> int:
    """Return the number of parent-to-child walks whose values sum to target."""
    # TODO: implement
    pass


if __name__ == "__main__":
    tests = [
        ([5, 3, -2, 2, 1, None, 4], 5, 2),
        ([0, None, 0, None, 0], 0, 6),
        ([2, -2, None, 2, None, -2], 0, 4),
        ([], 0, 0),                                 # extra: empty tree
        ([7], 7, 1),                                # extra: single node hit
        ([7], 8, 0),                                # extra: single node miss
        ([1, 2, None, 3, None, 4], 6, 1),           # extra: walk starts mid-path
    ]

    for values, target, expected in tests:
        root = build_tree(values)
        got = count_descending_walks(root, target)
        status = "PASS" if got == expected else "FAIL"
        print(f"{status} root={values} target={target} expected={expected} got={got}")
