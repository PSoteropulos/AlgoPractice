from typing import List, Tuple


def cap_compliance(cap: int, powers: List[int]) -> Tuple[int, int]:
    """Return (count of cap-compliant drones, max compliant power signature),
    where a power signature p is compliant when p & cap == p. If no drone is
    compliant, the max is -1."""
    # TODO: implement
    pass


def _run_self_checks() -> None:
    cases = [
        ("example 1", 6, [2, 4, 6, 7, 1], (3, 6)),
        ("example 2", 0, [0, 0, 0], (3, 0)),
        ("example 3", 5, [8, 16], (0, -1)),
        ("edge: single drone equal to cap", 9, [9], (1, 9)),
        ("edge: even cap excludes bit 0", 1_000_000_000, [0, 1], (1, 0)),
    ]

    for name, cap, powers, expected in cases:
        actual = cap_compliance(cap, powers)
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected!r} actual={actual!r}")


if __name__ == "__main__":
    _run_self_checks()
