from typing import List


def count_snack_combos(prices: List[int], budget: int) -> int:
    """Number of distinct price multisets of length >= 2 from `prices`
    that sum exactly to `budget`."""
    # TODO: implement
    pass


def _run_self_checks() -> None:
    cases = [
        ("example 1", [1, 2, 3, 4, 3], 6, 3),
        ("example 2", [5, 3, 3, 5], 8, 1),
        ("example 3", [10], 10, 0),
        ("edge: empty prices", [], 5, 0),
        ("edge: all duplicates", [2, 2, 2, 2], 4, 1),
    ]

    for name, prices, budget, expected in cases:
        actual = count_snack_combos(prices, budget)
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected} actual={actual}")


if __name__ == "__main__":
    _run_self_checks()
