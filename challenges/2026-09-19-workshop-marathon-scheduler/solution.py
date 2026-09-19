import heapq
from typing import List


def max_workshops(workshops: List[List[int]]) -> int:
    """Return the maximum number of workshops that can be completed by
    their deadlines when run one at a time, back to back, starting at
    time 0, in any chosen order."""
    # TODO: implement
    pass


def _run_self_checks() -> None:
    cases = [
        ("example 1", [[2, 5], [3, 5], [4, 7], [5, 10]], 3),
        ("example 2", [[4, 6], [5, 5], [2, 6]], 2),
        ("example 3", [[10, 3]], 0),
        ("edge: tie deadlines both fit", [[2, 4], [1, 4]], 2),
        ("edge: tie deadlines only one fits", [[3, 4], [2, 4]], 1),
    ]

    for name, workshops, expected in cases:
        actual = max_workshops(workshops)
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected!r} actual={actual!r}")


if __name__ == "__main__":
    _run_self_checks()
