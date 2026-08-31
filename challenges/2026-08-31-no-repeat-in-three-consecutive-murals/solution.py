from typing import List


def min_mural_cost(n: int, k: int, cost: List[List[int]]) -> int:
    """Minimum cost to paint n panels with k themes so that no theme
    repeats among any 3 consecutive panels."""
    # TODO: implement
    pass


def _run_self_checks() -> None:
    cases = [
        ("example 1", 3, 3, [[1, 2, 3], [3, 2, 1], [2, 1, 3]], 3),
        ("example 2", 4, 3, [[1, 5, 3], [2, 9, 4], [5, 1, 2], [3, 6, 4]], 9),
        ("example 3", 1, 3, [[5, 2, 9]], 2),
        ("edge: n=2, k=3", 2, 3, [[4, 1, 9], [2, 3, 8]], 3),
        (
            "edge: all-equal costs force any valid pattern to same total",
            5,
            3,
            [[2, 2, 2]] * 5,
            10,
        ),
    ]

    for name, n, k, cost, expected in cases:
        actual = min_mural_cost(n, k, cost)
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected} actual={actual}")


if __name__ == "__main__":
    _run_self_checks()
