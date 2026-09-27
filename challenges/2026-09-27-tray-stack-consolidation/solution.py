from typing import List


def min_consolidation_effort(heights: List[int]) -> int:
    """Return the minimum total effort to combine all tray stacks into one."""
    # TODO: implement
    pass


def _run_self_checks() -> None:
    cases = [
        ("example 1", [4, 3, 2, 6], 29),
        ("example 2", [1, 8, 3, 5], 30),
        ("example 3", [7], 0),
        ("edge: no stacks at all", [], 0),
        ("edge: exactly two stacks", [2, 9], 11),
    ]

    for name, heights, expected in cases:
        actual = min_consolidation_effort(heights)
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected!r} actual={actual!r}")


if __name__ == "__main__":
    _run_self_checks()
