from typing import List


def find_scan_glitch(scans: List[int]) -> List[int]:
    """Return [duplicate, missing] for the badge-scan glitch described in
    problem.md."""
    # TODO: implement
    pass


def _run_self_checks() -> None:
    cases = [
        ("example 1", [1, 2, 2, 4], [2, 3]),
        ("example 2", [1, 1], [1, 2]),
        ("example 3", [3, 2, 3, 4, 5, 1], [3, 6]),
        ("edge: duplicate is smallest value, missing is largest", [2, 2], [2, 1]),
        ("edge: larger roster", [7, 3, 4, 5, 6, 3, 1], [3, 2]),
    ]

    for name, scans, expected in cases:
        actual = find_scan_glitch(scans)
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected!r} actual={actual!r}")


if __name__ == "__main__":
    _run_self_checks()
