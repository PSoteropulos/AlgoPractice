from typing import List


def max_total_tips(tips: List[int], d: int) -> int:
    """Return the maximum total earnings with any two chosen patios >= d apart."""
    # TODO: implement
    pass


def _run_self_checks() -> None:
    cases = [
        ("example 1", [4, 1, 7, 3, 6], 2, 17),
        ("example 2", [5, 10, 5, 10], 3, 15),
        ("example 3", [-3, -1, -2], 2, 0),
        ("edge: d = 1 takes all positives", [2, -1, 3], 1, 5),
        ("edge: d larger than n", [9, 8, 7], 5, 9),
        ("edge: single negative", [-5], 1, 0),
    ]

    for name, tips, d, expected in cases:
        actual = max_total_tips(tips, d)
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected!r} actual={actual!r}")


if __name__ == "__main__":
    _run_self_checks()
