from typing import List


def count_special_badges(queries: List[List[int]]) -> List[int]:
    """For each [lo, hi], count integers in [lo, hi] with exactly 3 divisors."""
    # TODO: implement
    pass


def _run_self_checks() -> None:
    cases = [
        ('example 1', [[1, 10], [10, 50], [1, 1]], [2, 2, 0]),
        ('example 2', [[4, 4], [5, 8], [1, 100]], [1, 0, 4]),
        ('example 3', [[1, 10 ** 12]], [78498]),
        ('edge: no squares of primes in range', [[2, 3], [24, 26]], [0, 1]),
        ('edge: square of largest prime below 10^6', [[999966000289, 999966000289]], [1]),
        ('edge: square of composite only', [[36, 36], [16, 16]], [0, 0]),
    ]

    for name, queries, expected in cases:
        actual = count_special_badges([list(q) for q in queries])
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected!r} actual={actual!r}")


if __name__ == "__main__":
    _run_self_checks()
