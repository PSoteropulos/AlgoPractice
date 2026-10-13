from typing import List


def min_extra_tunnels(n: int, tunnels: List[List[int]]) -> int:
    """Return the minimum number of new tunnels so that no tunnel is fragile."""
    # TODO: implement
    pass


if __name__ == "__main__":
    tests = [
        (5, [[0, 1], [0, 2], [0, 3], [0, 4]], 2),
        (6, [[0, 1], [1, 2], [2, 0], [2, 3], [3, 4], [3, 5]], 2),
        (4, [[0, 1], [1, 2], [2, 3], [3, 0]], 0),
        (1, [], 0),  # extra: single chamber
        (3, [[0, 1], [0, 1], [1, 2]], 1),  # extra: parallel tunnels, one fragile
        (6, [[0, 1], [1, 2], [2, 0], [2, 3], [3, 4], [4, 5], [5, 3]], 1),  # extra: two loops joined by a bridge
        (6, [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]], 1),  # extra: path of six
    ]

    for n, tunnels, expected in tests:
        got = min_extra_tunnels(n, tunnels)
        status = "PASS" if got == expected else "FAIL"
        print(f"{status} n={n} tunnels={tunnels} expected={expected} got={got}")
