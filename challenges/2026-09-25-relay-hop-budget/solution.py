from typing import List


def min_relay_cost(n: int, edges: List[List[int]], src: int, dst: int, max_hops: int) -> int:
    """Return the minimum total cost to relay a signal from `src` to `dst`
    using at most `max_hops` links, or -1 if no such route exists."""
    # TODO: implement
    pass


def _run_self_checks() -> None:
    edges = [[0, 1, 100], [1, 2, 100], [0, 2, 500], [2, 3, 100], [1, 3, 300]]
    cases = [
        ("example 1", (4, edges, 0, 3, 2), 400),
        ("example 2", (4, edges, 0, 3, 1), -1),
        ("example 3", (4, edges, 0, 3, 3), 300),
        ("edge: zero hop budget", (4, edges, 0, 3, 0), -1),
        ("edge: unreachable dst", (4, [[0, 1, 5]], 0, 3, 3), -1),
        ("edge: cheaper duplicate direct link wins", (2, [[0, 1, 7], [0, 1, 3]], 0, 1, 1), 3),
    ]

    for name, args, expected in cases:
        actual = min_relay_cost(*args)
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected!r} actual={actual!r}")


if __name__ == "__main__":
    _run_self_checks()
