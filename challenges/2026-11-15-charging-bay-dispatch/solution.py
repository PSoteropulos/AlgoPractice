from typing import List


def assign_bays(vehicles: List[List[int]], m: int) -> List[List[int]]:
    """Return result where result[i] = [bay, finish_time] for bus i, following
    the dispatch rules in problem.md (shortest duration first, ties by earlier
    arrival then smaller index; lowest-numbered free bay)."""
    # TODO: implement
    return []


def _run_self_checks() -> None:
    many = [[0, 1] for _ in range(100000)]
    many_expected = [[0, i + 1] for i in range(100000)]
    cases = [
        ("example 1", [[0, 5], [1, 2], [1, 1], [2, 3], [6, 1]], 2,
         [[0, 5], [1, 4], [1, 2], [1, 7], [0, 7]]),
        ("example 2", [[3, 2], [0, 4], [2, 2], [4, 1]], 1,
         [[0, 9], [0, 4], [0, 7], [0, 5]]),
        ("example 3", [[0, 4], [0, 4], [2, 1], [3, 2]], 3,
         [[0, 4], [1, 4], [2, 3], [2, 5]]),
        ("extra: idle gap between arrivals", [[0, 1], [10, 1]], 1,
         [[0, 1], [0, 11]]),
        ("extra: full ties broken by index", [[5, 3], [5, 3], [5, 3], [0, 10]], 2,
         [[1, 8], [1, 11], [0, 13], [0, 10]]),
        ("extra: more bays than buses", [[7, 3], [7, 3]], 5,
         [[0, 10], [1, 10]]),
        ("extra: 100000 buses, one bay", many, 1, many_expected),
    ]

    for name, vehicles, m, expected in cases:
        actual = assign_bays([v[:] for v in vehicles], m)
        status = "PASS" if actual == expected else "FAIL"
        if len(expected) > 10:
            print(f"[{status}] {name}")
        else:
            print(f"[{status}] {name}: expected={expected} actual={actual}")


if __name__ == "__main__":
    _run_self_checks()
