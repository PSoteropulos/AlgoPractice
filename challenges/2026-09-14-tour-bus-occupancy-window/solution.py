from typing import List


def longest_steady_window(occupancy: List[int], tolerance: int, min_peak: int) -> int:
    """Return the length of the longest contiguous run of stops where
    max(occupancy) - min(occupancy) <= tolerance and at least one stop in
    the run has occupancy >= min_peak. Return 0 if no such run exists."""
    # TODO: implement
    pass


def _run_self_checks() -> None:
    cases = [
        ("example 1", [4, 6, 5, 7, 9, 8, 3], 3, 8, 3),
        ("example 2", [2, 2, 2, 2], 0, 5, 0),
        ("example 3", [10, 10, 10, 10, 10], 0, 10, 5),
        ("edge: single element meets peak", [5], 0, 5, 1),
        ("edge: single element below peak", [5], 0, 6, 0),
    ]

    for name, occupancy, tolerance, min_peak, expected in cases:
        actual = longest_steady_window(occupancy, tolerance, min_peak)
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected!r} actual={actual!r}")


if __name__ == "__main__":
    _run_self_checks()
