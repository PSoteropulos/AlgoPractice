from typing import List


def min_max_truck_load(weights: List[int], k: int) -> int:
    """Return the smallest achievable maximum truck load using k trucks."""
    # TODO: implement
    pass


def _run_self_checks() -> None:
    cases = [
        ('example 1', [3, 5, 2, 7], 2, 9),
        ('example 2', [4, 4, 4, 4, 4], 3, 8),
        ('example 3', [9, 1, 1, 1], 2, 9),
        ('edge: single crate', [8], 1, 8),
        ('edge: one crate per truck', [7, 7, 7, 7], 4, 7),
        ('edge: mixed weights', [6, 5, 4, 3, 3, 3], 3, 9),
        ('edge: split 1..7 over two trucks', [1, 2, 3, 4, 5, 6, 7], 2, 14),
    ]

    for name, weights, k, expected in cases:
        actual = min_max_truck_load(list(weights), k)
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected!r} actual={actual!r}")


if __name__ == "__main__":
    _run_self_checks()
