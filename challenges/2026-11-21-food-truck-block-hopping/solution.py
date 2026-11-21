from typing import List


def max_route_earnings(earnings: List[List[int]], move_cost: int) -> int:
    """Return the maximum total profit over all days, where each night's
    drive costs move_cost per block (see problem.md)."""
    # TODO: implement
    return -2


def _run_self_checks() -> None:
    wide_m = 50000
    wide = [[0] * wide_m for _ in range(2)]
    wide[0][0] = 100000
    wide[1][wide_m - 1] = 100000
    tall = [[100000] for _ in range(100000)]
    cases = [
        ("example 1", [[3, 1, 4], [1, 5, 1], [2, 1, 6]], 1, 13),
        ("example 2", [[10, 0, 0, 0, 9], [0, 0, 0, 0, 9], [10, 0, 0, 0, 0]], 3, 20),
        ("example 3", [[-5], [-2], [7]], 4, 0),
        ("extra: free driving takes each day's max", [[2, 9, 1, 0], [8, 0, 0, 3]], 0, 17),
        ("extra: single all-negative day", [[-3, -1, -7]], 5, -1),
        ("extra: wide street, long drive pays off", wide, 1, 150001),
        ("extra: totals exceed 32-bit", tall, 7, 10000000000),
    ]

    for name, earnings, move_cost, expected in cases:
        actual = max_route_earnings(earnings, move_cost)
        status = "PASS" if actual == expected else "FAIL"
        print(f"{status} {name}: expected={expected} got={actual}")


if __name__ == "__main__":
    _run_self_checks()
