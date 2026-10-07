from typing import List


def count_grand_flashes(p: List[int], T: int) -> int:
    """Return how many times t in [1, T] are multiples of every period in p."""
    # TODO: implement
    pass


def _run_self_checks() -> None:
    cases = [
        ("example 1", [4, 6], 40, 3),
        ("example 2", [5, 7, 35], 100, 2),
        ("example 3", [1000000000, 999999999], 10**15, 0),
        ("edge: single lantern period 1", [1], 1, 1),
        ("edge: period larger than limit", [3], 2, 0),
        ("edge: duplicate periods", [7, 7, 7], 49, 7),
        ("edge: first nine primes", [2, 3, 5, 7, 11, 13, 17, 19, 23], 10**15, 4482438),
    ]

    for name, p, T, expected in cases:
        actual = count_grand_flashes(list(p), T)
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected!r} actual={actual!r}")


if __name__ == "__main__":
    _run_self_checks()
