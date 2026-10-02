from typing import List


def count_dim_windows(nums: List[int]) -> int:
    """Return the number of non-empty contiguous windows whose XOR has at
    most one bit set."""
    # TODO: implement
    pass


def _run_self_checks() -> None:
    cases = [
        ("example 1", [1, 2, 3], 4),
        ("example 2", [5, 5, 5], 2),
        ("example 3", [0, 0], 3),
        ("edge: single power of two", [4], 1),
        ("edge: single value with three bits", [7], 0),
        ("edge: two readings", [1, 3], 2),
        ("edge: 200000 zeros need 64-bit count", [0] * 200000, 20000100000),
    ]

    for name, nums, expected in cases:
        actual = count_dim_windows(list(nums))
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected!r} actual={actual!r}")


if __name__ == "__main__":
    _run_self_checks()
