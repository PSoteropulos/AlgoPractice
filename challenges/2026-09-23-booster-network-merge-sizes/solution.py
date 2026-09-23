from typing import List


def booster_network_merge_sizes(n: int, cables: List[List[int]]) -> List[int]:
    """After each cable installation, return the size of the merged
    network containing both endpoints."""
    # TODO: implement
    pass


def _run_self_checks() -> None:
    cases = [
        ("example 1", 5, [[0, 1], [1, 2], [3, 4], [2, 3]], [2, 3, 2, 5]),
        ("example 2", 3, [[0, 1], [0, 1]], [2, 2]),
        ("example 3", 4, [[0, 1], [2, 3], [1, 3]], [2, 2, 4]),
        ("edge: no cables", 3, [], []),
        ("edge: single booster network never grows", 1, [], []),
        ("edge: long chain", 4, [[0, 1], [1, 2], [2, 3]], [2, 3, 4]),
    ]

    for name, n, cables, expected in cases:
        actual = booster_network_merge_sizes(n, cables)
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected!r} actual={actual!r}")


if __name__ == "__main__":
    _run_self_checks()
