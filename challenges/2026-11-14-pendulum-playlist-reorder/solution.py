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


def to_list(head: Optional[ListNode], limit: int = 10**6) -> List[int]:
    result = []
    node = head
    while node is not None and len(result) < limit:
        result.append(node.val)
        node = node.next
    return result


def collect_nodes(head: Optional[ListNode]) -> List[ListNode]:
    nodes = []
    node = head
    while node is not None:
        nodes.append(node)
        node = node.next
    return nodes


def pendulum_reorder(head: Optional[ListNode], k: int) -> Optional[ListNode]:
    """Reorder the list by alternately taking up to k unplaced nodes from the
    front (in order) and up to k unplaced nodes from the back (last node
    first), re-linking the existing nodes. Return the new head."""
    # TODO: implement
    return head


def _run_self_checks() -> None:
    cases = [
        ("example 1", [1, 2, 3, 4, 5, 6, 7], 2, [1, 2, 7, 6, 3, 4, 5]),
        ("example 2", [1, 2, 3, 4, 5], 1, [1, 5, 2, 4, 3]),
        ("example 3: k > n", [10, 20, 30], 5, [10, 20, 30]),
        ("edge: single node", [42], 1, [42]),
        ("edge: n=8, k=3, short final front block", [1, 2, 3, 4, 5, 6, 7, 8], 3,
         [1, 2, 3, 8, 7, 6, 4, 5]),
        ("edge: duplicates and negatives", [5, -1, 5, 0, -1, 9, 9, 2, 3, 4], 4,
         [5, -1, 5, 0, 4, 3, 2, 9, -1, 9]),
    ]

    for name, values, k, expected in cases:
        head = build_list(values)
        original_ids = {id(n) for n in collect_nodes(head)}
        result = pendulum_reorder(head, k)
        # The limit guards against accidental cycles in the returned list.
        actual = to_list(result, limit=len(values) + 1)
        ok = actual == expected
        note = ""
        if ok and {id(n) for n in collect_nodes(result)} != original_ids:
            ok = False
            note = " (result must re-link the original nodes, not new ones)"
        status = "PASS" if ok else "FAIL"
        print(f"[{status}] {name}: expected={expected} actual={actual}{note}")


if __name__ == "__main__":
    _run_self_checks()
