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


def second_deepest_level_sum(root: Optional[TreeNode]) -> int:
    """Return the sum of node values at the level directly above the deepest level."""
    # TODO: implement
    pass


if __name__ == "__main__":
    tests = [
        ([1, 2, 3, 4, 5], 5),
        ([10], 0),
        ([1, 2, None, 3, None, 4, None], 3),
        ([], 0),                          # extra: empty tree
        ([5, 3, 8], 5),                   # extra: two levels, second-deepest is the root level
    ]

    for values, expected in tests:
        root = build_tree(values)
        got = second_deepest_level_sum(root)
        status = "PASS" if got == expected else "FAIL"
        print(f"{status} root={values} expected={expected} got={got}")
