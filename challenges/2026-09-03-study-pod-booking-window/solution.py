from typing import List


def max_bookings(bookings: List[List[int]]) -> int:
    """Return the max number of non-overlapping bookings that can be accepted."""
    # TODO: implement
    pass


if __name__ == "__main__":
    tests = [
        ([[1, 3], [2, 4], [3, 5]], 2),
        ([[0, 1], [1, 2], [2, 3], [3, 4]], 4),
        ([[5, 10], [0, 2], [3, 6], [6, 8], [8, 9]], 4),
        ([[2, 5]], 1),                              # extra: single booking
        ([[1, 10], [1, 2], [1, 3]], 1),              # extra: same start, only one fits
    ]

    for bookings, expected in tests:
        got = max_bookings(bookings)
        status = "PASS" if got == expected else "FAIL"
        print(f"{status} bookings={bookings} expected={expected} got={got}")
