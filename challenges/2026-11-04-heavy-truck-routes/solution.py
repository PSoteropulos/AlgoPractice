from typing import List


def reachable_by_truck(n: int, bridges: List[List[int]], queries: List[List[int]]) -> List[bool]:
    """For each [src, dst, load], return whether src can reach dst using only
    bridges with cap >= load."""
    # TODO: implement
    return [False] * len(queries)


if __name__ == "__main__":
    tests = [
        ("example 1", 5, [[0, 1, 8], [1, 2, 5], [2, 3, 9], [3, 4, 2]],
         [[0, 2, 5], [0, 2, 6], [2, 4, 2], [2, 4, 3], [3, 3, 100]],
         [True, False, True, False, True]),
        ("example 2", 4, [[0, 1, 3], [0, 1, 7], [2, 3, 4]],
         [[0, 1, 7], [0, 1, 8], [1, 2, 1]], [True, False, False]),
        ("example 3", 3, [], [[0, 2, 1], [1, 1, 1]], [False, True]),
        ("extra: single town", 1, [], [[0, 0, 1]], [True]),
        ("extra: large chain", 100000, [[i, i + 1, 5] for i in range(99999)],
         [[0, 99999, 5], [0, 99999, 6], [50000, 50001, 1]], [True, False, True]),
    ]
    for name, n, bridges, queries, expected in tests:
        got = reachable_by_truck(n, bridges, queries)
        status = "PASS" if got == expected else "FAIL"
        print(f"{status} {name}: expected={expected[:5]} got={got[:5]}")
