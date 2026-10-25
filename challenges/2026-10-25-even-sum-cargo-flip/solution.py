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
    out = []
    while head is not None:
        out.append(head.val)
        head = head.next
    return out


def reverse_even_sum_groups(head: Optional[ListNode], k: int) -> Optional[ListNode]:
    """Reverse each complete batch of k nodes whose sum is even; return the new head."""
    # TODO: implement
    pass


if __name__ == "__main__":
    tests = [
        ([2, 4, 1, 2, 3, 5, 7], 2, [4, 2, 1, 2, 5, 3, 7]),
        ([1, 2, 4, 6, 2, 2, 9, 9], 3, [1, 2, 4, 2, 2, 6, 9, 9]),
        ([1, 2, 3, 4, 5, 6, 7, 8], 4, [4, 3, 2, 1, 8, 7, 6, 5]),
        ([1, 3], 2, [3, 1]),  # extra: single even batch
        ([1, 2], 2, [1, 2]),  # extra: single odd batch
        ([2, 2], 3, [2, 2]),  # extra: k exceeds n, nothing changes
        ([3, 4, 5], 1, [3, 4, 5]),  # extra: k = 1 changes nothing
    ]

    for values, k, expected in tests:
        got = to_list(reverse_even_sum_groups(build_list(values), k))
        status = "PASS" if got == expected else "FAIL"
        print(f"{status} crates={values} k={k} expected={expected} got={got}")
