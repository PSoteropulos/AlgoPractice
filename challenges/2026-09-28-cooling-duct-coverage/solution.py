from typing import List


def max_duct_area(heights: List[int]) -> int:
    """Return the maximum coverage area of a duct panel over a contiguous rack range."""
    # TODO: implement
    pass


def _run_self_checks() -> None:
    cases = [
        ("example 1", [2, 1, 5, 6, 2, 3], 10),
        ("example 2", [6, 2, 5, 4, 5, 1, 6], 12),
        ("example 3", [3, 3, 3, 3], 12),
        ("edge: single rack", [5], 5),
        ("edge: strictly increasing", [1, 2, 3, 4, 5], 9),
    ]

    for name, heights, expected in cases:
        actual = max_duct_area(heights)
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected!r} actual={actual!r}")


if __name__ == "__main__":
    _run_self_checks()
