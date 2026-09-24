from typing import List


def longest_balanced_staffing_window(changes: List[int]) -> int:
    """Return the length of the longest contiguous run of `changes`
    that sums to exactly 0."""
    # TODO: implement
    pass


def _run_self_checks() -> None:
    cases = [
        ("example 1", [3, -3, 4, -2, 2, -4], 6),
        ("example 2", [1, -1, 1, -1, 5], 4),
        ("example 3", [2, 3, -1], 0),
        ("edge: single zero", [0], 1),
        ("edge: no balance possible", [1, 2, 3], 0),
    ]

    for name, changes, expected in cases:
        actual = longest_balanced_staffing_window(changes)
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected!r} actual={actual!r}")


if __name__ == "__main__":
    _run_self_checks()
