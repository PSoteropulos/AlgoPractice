from typing import List


def redundant_trails(n: int, trails: List[List[int]]) -> List[int]:
    """Return the indices (increasing) of trails that were redundant at the
    moment they were built (see problem.md)."""
    # TODO: implement
    return [-1]


def _run_self_checks() -> None:
    big_n = 100000
    big_trails = [[i, i + 1] for i in range(big_n - 1)] + [[big_n - 1, 0]]
    cases = [
        ("example 1", 4, [[0, 1], [1, 2], [0, 2], [3, 3], [2, 3]], [2, 3]),
        ("example 2", 3, [[0, 1], [1, 0], [0, 1]], [1, 2]),
        ("example 3", 6, [[0, 1], [2, 3], [4, 5], [1, 2], [3, 4]], []),
        ("extra: no trails", 5, [], []),
        ("extra: single clearing, only loops", 1, [[0, 0], [0, 0]], [0, 1]),
        ("extra: cycle closed by last trail", 5, [[0, 1], [2, 3], [3, 4], [1, 2], [4, 0]], [4]),
        ("extra: long path then closing trail", big_n, big_trails, [big_n - 1]),
    ]

    for name, n, trails, expected in cases:
        actual = redundant_trails(n, trails)
        status = "PASS" if actual == expected else "FAIL"
        shown = actual if len(actual) <= 20 else f"{actual[:20]}... ({len(actual)} items)"
        print(f"{status} {name}: expected={expected} got={shown}")


if __name__ == "__main__":
    _run_self_checks()
