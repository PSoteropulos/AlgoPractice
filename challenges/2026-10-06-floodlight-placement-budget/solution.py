from typing import List


def min_floodlight_cost(x: List[int], w: List[int], c: int) -> int:
    """Return the minimum of c * (#lights) + sum(w[i] * dist to nearest light),
    where lights sit on stalls and at least one light is installed."""
    # TODO: implement
    pass


def _run_self_checks() -> None:
    cases = [
        ("example 1", [1, 2, 6, 7, 8], [3, 1, 2, 2, 1], 5, 14),
        ("example 2", [0, 10, 20], [1, 1, 1], 100, 120),
        ("example 3", [4], [7], 3, 3),
        ("edge: free lights, every stall lit", [0, 5], [2, 2], 0, 0),
        ("edge: uniform line", [0, 1, 2, 3, 4, 5], [1, 1, 1, 1, 1, 1], 2, 8),
        ("edge: large answer", [0, 1000000, 2000000, 3000000], [10000, 10000, 10000, 10000], 1000000000, 4000000000),
    ]

    for name, x, w, c, expected in cases:
        actual = min_floodlight_cost(list(x), list(w), c)
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected!r} actual={actual!r}")


if __name__ == "__main__":
    _run_self_checks()
