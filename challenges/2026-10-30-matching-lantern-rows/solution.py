from typing import List


def count_lantern_rows(heights: List[int]) -> int:
    """Return the number of viewing rows (equal ends, nothing taller inside)."""
    # TODO: implement
    return 0


if __name__ == "__main__":
    tests = [
        ([3, 1, 3], 4),
        ([1, 4, 3, 3, 2], 6),
        ([5, 1, 6, 5], 4),
        ([7], 1),                          # extra: single lantern
        ([4, 4, 1, 4, 4], 11),             # extra: repeated maxima around a dip
        ([2, 2, 2], 6),                    # extra: all equal -> n(n+1)/2
        ([1] * 100000, 5000050000),        # extra: needs 64-bit result
    ]
    for heights, expected in tests:
        got = count_lantern_rows(heights)
        status = "PASS" if got == expected else "FAIL"
        print(f"{status} n={len(heights)} expected={expected} got={got}")
