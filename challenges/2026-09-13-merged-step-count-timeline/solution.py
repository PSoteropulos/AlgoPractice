from typing import List, Optional, Tuple


class ListNode:
    def __init__(
        self,
        timestamp: int = 0,
        steps: int = 0,
        next: "Optional[ListNode]" = None,
    ):
        self.timestamp = timestamp
        self.steps = steps
        self.next = next


def build_list(values: List[Tuple[int, int]]) -> Optional[ListNode]:
    dummy = ListNode()
    cur = dummy
    for timestamp, steps in values:
        cur.next = ListNode(timestamp, steps)
        cur = cur.next
    return dummy.next


def to_list(head: Optional[ListNode]) -> List[Tuple[int, int]]:
    result = []
    node = head
    while node is not None:
        result.append((node.timestamp, node.steps))
        node = node.next
    return result


def merge_step_timelines(
    head_a: Optional[ListNode], head_b: Optional[ListNode]
) -> Optional[ListNode]:
    """Merge two timestamp-sorted checkpoint lists into one list sorted by
    non-decreasing timestamp. On a timestamp tie, the checkpoint from
    head_a must come immediately before the checkpoint from head_b."""
    # TODO: implement
    pass


def _run_self_checks() -> None:
    cases = [
        (
            "example 1",
            [(0, 0), (30, 1200), (60, 2500)],
            [(15, 600), (45, 1900)],
            [(0, 0), (15, 600), (30, 1200), (45, 1900), (60, 2500)],
        ),
        (
            "example 2: tie at timestamp 10",
            [(10, 500), (20, 1000)],
            [(10, 480), (25, 1100)],
            [(10, 500), (10, 480), (20, 1000), (25, 1100)],
        ),
        (
            "example 3: A empty",
            [],
            [(5, 200), (10, 450)],
            [(5, 200), (10, 450)],
        ),
        (
            "edge: both empty",
            [],
            [],
            [],
        ),
        (
            "edge: B empty",
            [(1, 10), (2, 20)],
            [],
            [(1, 10), (2, 20)],
        ),
    ]

    for name, a_values, b_values, expected in cases:
        head_a = build_list(a_values)
        head_b = build_list(b_values)
        merged = merge_step_timelines(head_a, head_b)
        actual = to_list(merged)
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected!r} actual={actual!r}")


if __name__ == "__main__":
    _run_self_checks()
