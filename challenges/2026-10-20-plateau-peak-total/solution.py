from typing import List


def peak_plateau_total(h: List[int]) -> int:
    """Return the total number of checkpoints inside peak plateaus."""
    # TODO: implement
    pass


def _run_self_checks() -> None:
    cases = [
        ("example 1", [1, 3, 3, 2, 2, 5, 4, 4, 4], 3),
        ("example 2", [7, 7, 7], 3),
        ("example 3", [1, 2, 3, 4], 1),
        ("edge: single element", [9], 1),
        ("edge: valley between peaks", [5, 1, 5], 2),
        ("edge: alternating with wide ends", [2, 2, 1, 2, 1, 1], 3),
        ("edge: descending negatives", [-1, -2, -2, -3], 1),
    ]

    for name, h, expected in cases:
        actual = peak_plateau_total(list(h))
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected!r} actual={actual!r}")


if __name__ == "__main__":
    _run_self_checks()
