from typing import List


def days_until_higher(levels: List[int]) -> List[int]:
    """Return, for each day, the wait in days until a strictly higher level (0 if none)."""
    # TODO: implement
    pass


def _run_self_checks() -> None:
    cases = [
        ('example 1', [3, 1, 4, 1, 5], [2, 1, 2, 1, 0]),
        ('example 2', [5, 5, 5], [0, 0, 0]),
        ('example 3', [9, 7, 5, 6], [0, 0, 1, 0]),
        ('edge: single day', [1], [0]),
        ('edge: strictly increasing', [1, 2, 3, 4], [1, 1, 1, 0]),
        ('edge: strictly decreasing', [4, 3, 2, 1], [0, 0, 0, 0]),
        ('edge: zero then big', [0, 0, 1000000000, 0, 1000000000], [2, 1, 0, 1, 0]),
    ]

    for name, levels, expected in cases:
        actual = days_until_higher(list(levels))
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected!r} actual={actual!r}")


if __name__ == "__main__":
    _run_self_checks()
