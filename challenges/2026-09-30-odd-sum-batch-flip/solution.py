from typing import List, Optional


class ListNode:
    def __init__(self, val: int = 0, next: "Optional[ListNode]" = None):
        self.val = val
        self.next = next


def build_list(values: List[int]) -> Optional[ListNode]:
    dummy = ListNode()
    cur = dummy
    for v in values:
        cur.next = ListNode(v)
        cur = cur.next
    return dummy.next


def to_list(head: Optional[ListNode]) -> List[int]:
    result = []
    node = head
    while node is not None:
        result.append(node.val)
        node = node.next
    return result


def flip_odd_batches(head: Optional[ListNode], k: int) -> Optional[ListNode]:
    """Split the list into consecutive batches of exactly k nodes (a short
    final batch is left alone). Reverse each full batch whose sum is odd.
    Re-link existing nodes; return the new head."""
    # TODO: implement
    pass


def _run_self_checks() -> None:
    cases = [
        ("example 1", [1, 2, 3, 4, 5, 6], 3, [1, 2, 3, 6, 5, 4]),
        ("example 2", [2, 7, 4, 2, 8, 5, 9], 2, [7, 2, 4, 2, 5, 8, 9]),
        ("example 3: fewer than k nodes", [5, 3, 1], 4, [5, 3, 1]),
        ("edge: empty list", [], 2, []),
        ("edge: k = 1 never changes anything", [1, 2, 3], 1, [1, 2, 3]),
        ("edge: whole list is one odd batch", [1, 2, 4], 3, [4, 2, 1]),
        ("edge: all even sums", [0, 0, 0, 0], 2, [0, 0, 0, 0]),
        ("edge: consecutive odd batches", [1, 2, 3, 4, 5, 6], 2, [2, 1, 4, 3, 6, 5]),
    ]

    for name, values, k, expected in cases:
        actual = to_list(flip_odd_batches(build_list(values), k))
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected!r} actual={actual!r}")


if __name__ == "__main__":
    _run_self_checks()
