from typing import List


def max_beacon_signal(beacons: List[int]) -> int:
    """Maximum XOR value obtainable by activating any non-empty subset of
    beacons."""
    # TODO: implement
    pass


def _run_self_checks() -> None:
    cases = [
        ("example 1", [3, 10, 5, 25, 2, 8], 31),
        ("example 2", [6, 6, 6], 6),
        ("example 3", [42], 42),
        ("edge: zeros mixed in don't help", [0, 0, 5], 5),
        ("edge: disjoint bits XOR to the OR of all", [1, 2, 4, 8], 15),
    ]

    for name, beacons, expected in cases:
        actual = max_beacon_signal(beacons)
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected} actual={actual}")


if __name__ == "__main__":
    _run_self_checks()
