from typing import List


def count_calm_stretches(readings: List[int], tolerance: int) -> int:
    """Return the number of contiguous non-empty subarrays whose
    (max - min) <= tolerance."""
    # TODO: implement
    return -1


if __name__ == "__main__":
    tests = [
        ("example 1", [1, 3, 2, 5], 1, 5),
        ("example 2", [4, 4, 4], 0, 6),
        ("example 3", [2, 5, 3, 4, 8], 2, 8),
        ("extra: single reading", [10], 0, 1),
        ("extra: huge tolerance", [1, 1000000000, 5], 1000000000, 6),
        ("extra: increasing", [1, 2, 3, 4, 5], 1, 9),
        ("extra: large uniform", [1] * 100000, 0, 5000050000),
    ]
    for name, r, t, expected in tests:
        got = count_calm_stretches(r, t)
        status = "PASS" if got == expected else "FAIL"
        print(f"{status} {name}: expected={expected} got={got}")
