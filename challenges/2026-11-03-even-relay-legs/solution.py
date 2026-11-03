from typing import List


def min_longest_leg(distances: List[int], k: int) -> int:
    """Return the smallest possible length of the longest leg when `distances`
    is split into exactly k non-empty consecutive legs."""
    # TODO: implement
    return 0


if __name__ == "__main__":
    tests = [
        ([4, 9, 3, 6, 2, 8], 3, 13),
        ([5, 5, 5, 5], 2, 10),
        ([12, 1, 1], 3, 12),
        ([7], 1, 7),  # extra: single checkpoint gap
        ([0, 0, 0], 2, 0),  # extra: all zero gaps
        ([1, 2, 3, 4, 5], 1, 15),  # extra: one runner takes everything
        ([3, 1, 4, 1, 5, 9, 2, 6], 8, 9),  # extra: one gap per runner
        ([10000] * 100000, 50000, 20000),  # extra: large input
    ]
    for distances, k, expected in tests:
        got = min_longest_leg(distances, k)
        status = "PASS" if got == expected else "FAIL"
        print(f"{status} n={len(distances)} k={k} expected={expected} got={got}")
