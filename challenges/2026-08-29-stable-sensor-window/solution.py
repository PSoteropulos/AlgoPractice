from typing import List


def longest_stable_window(readings: List[int], tolerance: int) -> int:
    """Return the length of the longest contiguous span whose max-min gap is <= tolerance."""
    # TODO: implement
    pass


if __name__ == "__main__":
    tests = [
        ([4, 8, 5, 1, 7, 9], 4, 3),
        ([5, 2, 2, 3, 9, 1], 3, 4),
        ([3, 3, 3, 3, 3, 3], 0, 6),
        ([], 3, 0),  # extra: empty readings
        ([10], 5, 1),  # extra: single reading
    ]

    for readings, tolerance, expected in tests:
        got = longest_stable_window(readings, tolerance)
        status = "PASS" if got == expected else "FAIL"
        print(f"{status} readings={readings} tolerance={tolerance} expected={expected} got={got}")
