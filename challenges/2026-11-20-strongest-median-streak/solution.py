from typing import List


def strongest_median(nums: List[int], k: int) -> int:
    """Return the greatest median of any contiguous streak of nums with
    length at least k. For an even length, the median is the smaller of the
    two middle elements (see problem.md)."""
    # TODO: implement
    return 0


def _run_self_checks() -> None:
    n = 100_000
    increasing = list(range(1, n + 1))
    alternating = [1_000_000_000 if i % 2 == 0 else 1 for i in range(n)]
    cases = [
        ("example 1", [1, 2, 3, 2, 1], 3, 2),
        ("example 2", [5, 1, 8, 7, 2, 9], 2, 7),
        ("example 3", [3, 9, 1, 9, 1, 9, 2], 4, 9),
        ("extra: single hour", [7], 1, 7),
        ("extra: even length takes the smaller middle", [4, 8], 2, 4),
        ("extra: odd-length streak beats every pair", [6, 2, 6, 2, 6, 2], 2, 6),
        ("extra: 100000 increasing, k = 50000", increasing, 50_000, 75_000),
        ("extra: 100000 alternating, whole array", alternating, n, 1),
        ("extra: 100000 alternating, k = n - 1", alternating, n - 1, 1_000_000_000),
    ]

    for name, nums, k, expected in cases:
        actual = strongest_median(nums[:], k)
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected} actual={actual}")


if __name__ == "__main__":
    _run_self_checks()
