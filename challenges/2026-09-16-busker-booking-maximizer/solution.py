from typing import List


def max_total_donations(slots: List[List[int]]) -> int:
    """Return the maximum total donations obtainable by choosing a subset
    of mutually non-conflicting slots, where each slot is
    [start, end, donation]."""
    # TODO: implement
    pass


def _run_self_checks() -> None:
    cases = [
        ("example 1", [[0, 3, 5], [2, 5, 6], [4, 7, 5], [6, 9, 4]], 10),
        ("example 2", [[1, 4, 3]], 3),
        ("example 3", [[0, 2, 5], [0, 2, 10], [1, 3, 3]], 10),
        ("edge: back-to-back slots both taken", [[0, 2, 3], [2, 4, 4]], 7),
        ("edge: single slot", [[5, 10, 100]], 100),
    ]

    for name, slots, expected in cases:
        actual = max_total_donations(slots)
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected!r} actual={actual!r}")


if __name__ == "__main__":
    _run_self_checks()
