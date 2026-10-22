from typing import List


def max_orders(orders: List[List[int]]) -> int:
    """orders[i] = [bake_time, deadline]. Return the max number of orders finished on time."""
    # TODO: implement
    pass


def _run_self_checks() -> None:
    cases = [
        ('example 1', [[3, 5], [2, 6], [4, 7]], 2),
        ('example 2', [[5, 5], [4, 6], [2, 6], [1, 8]], 3),
        ('example 3', [[2, 2], [2, 2], [2, 4]], 2),
        ('edge: bake time exceeds deadline', [[6, 5]], 0),
        ('edge: identical tight orders', [[1, 1], [1, 1], [1, 1]], 1),
        ('edge: unsorted input, swap needed', [[100, 200], [200, 1300], [1000, 1250], [2000, 3200]], 3),
        ('edge: maximum values', [[1000000000, 1000000000], [1000000000, 1000000000], [999999999, 1000000000]], 1),
    ]

    for name, orders, expected in cases:
        actual = max_orders([list(o) for o in orders])
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected!r} actual={actual!r}")


if __name__ == "__main__":
    _run_self_checks()
