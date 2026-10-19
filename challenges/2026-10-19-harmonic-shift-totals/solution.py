from typing import List


def count_balanced_segments(deltas: List[int], k: int) -> int:
    """Count segments of length >= 2 whose sum is divisible by k."""
    # TODO: implement
    pass


def _run_self_checks() -> None:
    cases = [
        ('example 1', [4, 5, 0, -2, -3, 1], 5, 5),
        ('example 2', [2, 2, 2], 2, 3),
        ('example 3', [-7, 3, 4, -5, 5], 5, 4),
        ('edge: all zeros', [0, 0, 0, 0], 3, 6),
        ('edge: k is one', [-1, 1, 9, 4, -6], 1, 10),
        ('edge: no valid segment', [1, 2, 4], 7, 1),
        ('edge: large values', [1000000000, 1000000000, 1000000000], 1000000000, 3),
        ('edge: single hour', [3], 7, 0),
    ]

    for name, deltas, k, expected in cases:
        actual = count_balanced_segments(list(deltas), k)
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected!r} actual={actual!r}")


if __name__ == "__main__":
    _run_self_checks()
