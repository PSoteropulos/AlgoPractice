from typing import List


def min_storage_bins(batch_codes: List[int]) -> int:
    """Minimum number of bins needed so that every pair of samples sharing
    a bin has gcd == 1 (no two samples with a common prime factor may share
    a bin)."""
    # TODO: implement
    pass


def _run_self_checks() -> None:
    cases = [
        ("example 1", [6, 10, 15], 3),
        ("example 2", [4, 9, 25, 6], 2),
        ("example 3", [2, 4, 8, 16], 4),
        ("edge: single sample", [7], 1),
        ("edge: chain conflict needs two bins", [2, 3, 4], 2),
    ]

    for name, batch_codes, expected in cases:
        actual = min_storage_bins(batch_codes)
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected} actual={actual}")


if __name__ == "__main__":
    _run_self_checks()
