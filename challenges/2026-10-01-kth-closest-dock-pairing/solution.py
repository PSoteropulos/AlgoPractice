from typing import List


def kth_closest_gap(a: List[int], b: List[int], k: int) -> int:
    """Return the k-th smallest (1-indexed) value of |a[i] - b[j]| over all
    index pairs (i, j)."""
    # TODO: implement
    pass


def _run_self_checks() -> None:
    cases = [
        ("example 1", [8, 1, 4], [6, 2], 4, 2),
        ("example 2", [5, 5], [5], 2, 0),
        ("example 3", [7, -3, 0], [10, -1], 4, 8),
        ("edge: k = 1 smallest gap", [8, 1, 4], [6, 2], 1, 1),
        ("edge: k = last, largest gap", [8, 1, 4], [6, 2], 6, 6),
        ("edge: extreme values need 64-bit-safe math", [-1000000000], [1000000000], 1, 2000000000),
        ("edge: all equal", [3, 3, 3], [3, 3], 6, 0),
    ]

    for name, a, b, k, expected in cases:
        actual = kth_closest_gap(list(a), list(b), k)
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected!r} actual={actual!r}")


if __name__ == "__main__":
    _run_self_checks()
