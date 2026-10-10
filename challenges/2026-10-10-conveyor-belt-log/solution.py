from typing import List


def conveyor_belt_log(events: List[int]) -> List[int]:
    """Return the weights left on the belt (front to back) after all events."""
    # TODO: implement
    pass


def _run_self_checks() -> None:
    cases = [
        ('example 1', [5,3,0,4,-1,7], [4,7]),
        ('example 2', [2,6,1,-5,9,0,0], []),
        ('example 3', [3,8,2,-1,0,-2,6], [6]),
        ('edge: removals on empty belt', [0,0,-3], []),
        ('edge: single placement', [4], [4]),
        ('edge: front then back removal interplay', [1,2,3,-2,0,5,-1,0,9], [9]),
    ]

    for name, events, expected in cases:
        actual = conveyor_belt_log(events)
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected!r} actual={actual!r}")


if __name__ == "__main__":
    _run_self_checks()
