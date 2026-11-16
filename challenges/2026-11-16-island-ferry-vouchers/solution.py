from typing import List


def earliest_arrival(n: int, ferries: List[List[int]], k: int) -> int:
    """Return the earliest time you can reach island n - 1 when starting from
    island 0 at time 0, with scheduled ferries and up to k charter vouchers
    (see problem.md). Return -1 if island n - 1 can't be reached."""
    # TODO: implement
    return 0


def _run_self_checks() -> None:
    chain = [[i, i + 1, 1, 2] for i in range(9999)]
    cases = [
        ("example 1", 4, [[0, 1, 2, 5], [1, 3, 3, 4], [0, 2, 4, 3], [2, 3, 1, 10]], 0, 7),
        ("example 2", 5, [[0, 1, 3, 1], [1, 4, 2, 20], [0, 2, 1, 1], [2, 3, 1, 1], [3, 4, 6, 1]], 1, 5),
        ("example 3", 3, [[0, 1, 5, 2]], 2, -1),
        ("extra: example 2 without vouchers", 5,
         [[0, 1, 3, 1], [1, 4, 2, 20], [0, 2, 1, 1], [2, 3, 1, 1], [3, 4, 6, 1]], 0, 8),
        ("extra: parallel routes, slower ride wins", 3, [[0, 1, 4, 7], [0, 1, 9, 1], [1, 2, 3, 5]], 0, 8),
        ("extra: one voucher can't fix a two-wait chain", 4,
         [[0, 1, 1, 1], [1, 2, 1, 9], [2, 3, 1, 9], [1, 3, 5, 1]], 1, 6),
        ("extra: two vouchers unlock the chain", 4,
         [[0, 1, 1, 1], [1, 2, 1, 9], [2, 3, 1, 9], [1, 3, 5, 1]], 2, 3),
        ("extra: 10000-island chain, no vouchers", 10000, chain, 0, 19997),
        ("extra: 10000-island chain, 10 vouchers", 10000, chain, 10, 19977),
    ]

    for name, n, ferries, k, expected in cases:
        actual = earliest_arrival(n, [f[:] for f in ferries], k)
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected} actual={actual}")


if __name__ == "__main__":
    _run_self_checks()
