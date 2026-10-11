from typing import List, Optional


class ListNode:
    def __init__(self, val: int = 0, next: "Optional[ListNode]" = None):
        self.val = val
        self.next = next


def build_list(values: List[int]) -> Optional[ListNode]:
    dummy = ListNode(0)
    cur = dummy
    for v in values:
        cur.next = ListNode(v)
        cur = cur.next
    return dummy.next


def to_array(head: Optional[ListNode]) -> List[int]:
    out = []
    while head:
        out.append(head.val)
        head = head.next
    return out


def ridge_line_sorter(head: Optional[ListNode]) -> Optional[ListNode]:
    """Relink the ridge-shaped list into non-decreasing order; return the new head."""
    # TODO: implement
    pass


def _run_self_checks() -> None:
    cases = [
        ('example 1', [1, 4, 6, 5, 2], [1, 2, 4, 5, 6]),
        ('example 2', [3, 3, 7, 7, 7, 1, 1], [1, 1, 3, 3, 7, 7, 7]),
        ('example 3', [9, 8, 5], [5, 8, 9]),
        ('edge: empty list', [], []),
        ('edge: single node', [5], [5]),
        ('edge: already ascending', [1, 2, 3], [1, 2, 3]),
        ('edge: all equal', [2, 2, 2], [2, 2, 2]),
        ('edge: negatives and plateau at peak', [-4, 1, 5, 5, 3, 3, 0, -4, -9], [-9, -4, -4, 0, 1, 3, 3, 5, 5]),
    ]

    for name, values, expected in cases:
        actual = to_array(ridge_line_sorter(build_list(values)))
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected!r} actual={actual!r}")


if __name__ == "__main__":
    _run_self_checks()
