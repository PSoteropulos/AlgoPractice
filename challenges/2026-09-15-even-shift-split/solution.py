from typing import List


def min_max_load(hourly: List[int], shifts: int) -> int:
    """Return the minimum possible value of the maximum total packages
    handled by any single worker, when hourly is split into exactly
    `shifts` contiguous, non-empty blocks."""
    # TODO: implement
    pass


def _run_self_checks() -> None:
    cases = [
        ("example 1", [10, 20, 30, 40], 2, 60),
        ("example 2", [5, 5, 5, 5, 5, 5], 3, 10),
        ("example 3", [3, 1, 4], 1, 8),
        ("edge: shifts equals length", [7, 2, 9], 3, 9),
        ("edge: single hour", [42], 1, 42),
    ]

    for name, hourly, shifts, expected in cases:
        actual = min_max_load(hourly, shifts)
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected!r} actual={actual!r}")


if __name__ == "__main__":
    _run_self_checks()
