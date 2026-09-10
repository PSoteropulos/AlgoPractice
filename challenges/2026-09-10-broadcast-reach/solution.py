from typing import List


def broadcast_reach(n: int, edges: List[List[int]], start: int) -> int:
    """Return the count of distinct towers reachable from start,
    including start itself, following directed edges."""
    # TODO: implement
    pass


def _run_self_checks() -> None:
    cases = [
        ("example 1", 6, [[0, 1], [0, 2], [1, 3], [2, 3], [3, 4]], 0, 5),
        ("example 2", 4, [[1, 2], [2, 3]], 0, 1),
        ("example 3", 3, [[0, 1], [1, 2], [2, 0]], 1, 3),
        ("edge: no edges at all", 1, [], 0, 1),
        ("edge: duplicate edges", 3, [[0, 1], [0, 1], [1, 2]], 0, 3),
    ]

    for name, n, edges, start, expected in cases:
        actual = broadcast_reach(n, edges, start)
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected!r} actual={actual!r}")


if __name__ == "__main__":
    _run_self_checks()
