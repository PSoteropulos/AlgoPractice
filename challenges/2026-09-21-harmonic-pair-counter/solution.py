from typing import List


def count_harmonic_pairs(freq: List[int], k: int) -> int:
    """Return the number of index pairs (i, j), i < j, whose gcd(freq[i],
    freq[j]) is exactly k."""
    # TODO: implement
    pass


def _run_self_checks() -> None:
    cases = [
        ("example 1", [4, 6, 8, 10, 3], 2, 5),
        ("example 2", [2, 4, 8, 16], 4, 2),
        ("example 3", [5, 7, 11], 5, 0),
        ("edge: k larger than every value", [2, 4, 6], 100, 0),
        ("edge: all elements equal to k", [7, 7, 7], 7, 3),
    ]

    for name, freq, k, expected in cases:
        actual = count_harmonic_pairs(freq, k)
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected!r} actual={actual!r}")


if __name__ == "__main__":
    _run_self_checks()
