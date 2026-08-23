from typing import List


def capped_team_merges(n: int, max_size: int, requests: List[List[int]]) -> List[int]:
    """Return the final team size of every employee after processing requests."""
    # TODO: implement
    pass


if __name__ == "__main__":
    tests = [
        (5, 3, [[0, 1], [2, 3], [1, 2], [3, 4]], [2, 2, 3, 3, 3]),
        (4, 2, [[0, 1], [1, 2], [2, 3]], [2, 2, 2, 2]),
        (3, 1, [[0, 1], [1, 2]], [1, 1, 1]),
        (1, 1, [], [1]),                                   # extra: single employee, no requests
        (4, 4, [[0, 1], [2, 3], [1, 2]], [4, 4, 4, 4]),     # extra: cap allows full merge
    ]

    for n, max_size, requests, expected in tests:
        got = capped_team_merges(n, max_size, requests)
        status = "PASS" if got == expected else "FAIL"
        print(f"{status} n={n} maxSize={max_size} requests={requests} expected={expected} got={got}")
