from typing import List


def find_tier(thresholds: List[int], points: int) -> int:
    """Return the highest tier index i with thresholds[i] <= points, or -1."""
    # TODO: implement
    pass


if __name__ == "__main__":
    tests = [
        ([100, 250, 500, 1000], 300, 1),
        ([100, 250, 500, 1000], 50, -1),
        ([100, 250, 500, 1000], 1000, 3),
        ([100, 250, 500, 1000], 249, 0),   # extra: just below the next threshold
        ([5], 5, 0),                        # extra: single-tier array, exact match
    ]

    for thresholds, points, expected in tests:
        got = find_tier(thresholds, points)
        status = "PASS" if got == expected else "FAIL"
        print(f"{status} thresholds={thresholds} points={points} expected={expected} got={got}")
