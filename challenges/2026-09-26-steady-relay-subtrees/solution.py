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


def count_steady_subtrees(root: Optional[TreeNode], k: int) -> int:
    """Return the number of nodes whose subtree is k-steady."""
    # TODO: implement
    pass


if __name__ == "__main__":
    tests = [
        ([1, 2, 3, 4, None], 1, 4),
        ([1, 2, 3, 4, None], 0, 2),
        ([10, 5, 15, 3, 8, None, 20, 1], 0, 3),
        ([], 3, 0),                                    # extra: empty tree
        ([5], 0, 1),                                   # extra: single node
        ([1, 2, None, 3, None], 2, 3),                 # extra: left-leaning chain
    ]

    for values, k, expected in tests:
        root = build_tree(values)
        got = count_steady_subtrees(root, k)
        status = "PASS" if got == expected else "FAIL"
        print(f"{status} root={values} k={k} expected={expected} got={got}")
