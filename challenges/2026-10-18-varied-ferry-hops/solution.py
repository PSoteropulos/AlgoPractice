from typing import List


def min_total_fee(fees: List[int]) -> int:
    """Return the minimum total departure fee from dock 0 to the last dock."""
    # TODO: implement
    pass


def _run_self_checks() -> None:
    cases = [
        ('example 1', [4, 1, 5, 2, 3], 5),
        ('example 2', [3, 9, 1, 1], 3),
        ('example 3', [1, 1, 1, 1, 1, 1, 1], 3),
        ('edge: single dock', [7], 0),
        ('edge: two docks', [5, 2], 5),
        ('edge: eight equal fees', [2, 2, 2, 2, 2, 2, 2, 2], 6),
        ('edge: thirteen unit fees', [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5),
        ('edge: large fees', [1000000000, 1000000000, 1000000000, 1000000000], 1000000000),
    ]

    for name, fees, expected in cases:
        actual = min_total_fee(list(fees))
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected!r} actual={actual!r}")


if __name__ == "__main__":
    _run_self_checks()
