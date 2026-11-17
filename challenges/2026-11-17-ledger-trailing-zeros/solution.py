from typing import List


def trailing_zeros_of_product(nums: List[int]) -> int:
    """Return the number of trailing zeros in the decimal form of the
    product of all values in nums (see problem.md)."""
    # TODO: implement
    return -1


def _run_self_checks() -> None:
    cases = [
        ("example 1", [25, 8, 3], 2),
        ("example 2", [125, 4, 7, 10], 3),
        ("example 3", [3, 9, 11], 0),
        ("extra: single 1", [1], 0),
        ("extra: many fives, one two", [5] * 20 + [2], 1),
        ("extra: 2^10 * 5^8", [1024, 390625], 8),
        ("extra: 100000 copies of 10^9", [1000000000] * 100000, 900000),
    ]

    for name, nums, expected in cases:
        actual = trailing_zeros_of_product(list(nums))
        status = "PASS" if actual == expected else "FAIL"
        print(f"{status} {name}: expected={expected} got={actual}")


if __name__ == "__main__":
    _run_self_checks()
