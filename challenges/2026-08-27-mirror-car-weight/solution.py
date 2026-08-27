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


def mirror_car_weight(head: Optional[ListNode], k: int) -> int:
    """Return the weight of the mirror car of position k, or -1 if out of range."""
    # TODO: implement
    pass


if __name__ == "__main__":
    tests = [
        ([10, 20, 30, 40, 50], 2, 40),
        ([9], 1, 9),
        ([3, 6, 9], 5, -1),
        ([7, 14], 1, 14),      # extra: mirror maps to the last car
        ([1, 2, 3, 4], 4, 1),  # extra: k equals n, mirror maps to the first car
    ]

    for values, k, expected in tests:
        head = build_list(values)
        got = mirror_car_weight(head, k)
        status = "PASS" if got == expected else "FAIL"
        print(f"{status} cars={values} k={k} expected={expected} got={got}")
