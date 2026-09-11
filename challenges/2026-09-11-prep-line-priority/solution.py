from typing import List


def max_orders_completed(orders: List[List[int]]) -> int:
    """Return the maximum number of orders the chef can complete without
    any of the chosen orders missing its own spoilBy deadline."""
    # TODO: implement
    pass


def _run_self_checks() -> None:
    cases = [
        ("example 1", [[5, 9], [2, 6], [3, 9], [4, 15], [6, 15]], 4),
        ("example 2", [[3, 3], [2, 3]], 1),
        ("example 3", [[5, 3]], 0),
        ("edge: no orders at all", [], 0),
        ("edge: everything comfortably fits", [[1, 10], [2, 10], [3, 10]], 3),
    ]

    for name, orders, expected in cases:
        actual = max_orders_completed(orders)
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected!r} actual={actual!r}")


if __name__ == "__main__":
    _run_self_checks()
