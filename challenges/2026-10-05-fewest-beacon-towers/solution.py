from typing import List


def fewest_beacon_towers(houses: List[int], r: int) -> int:
    """Return the minimum number of towers, each built at a house position and
    serving positions within distance r, needed to serve every house."""
    # TODO: implement
    pass


def _run_self_checks() -> None:
    cases = [
        ("example 1", [1, 2, 3, 4, 5], 1, 2),
        ("example 2", [1, 5, 9], 2, 3),
        ("example 3", [7, 3, 1, 10, 4, 12, 8], 3, 2),
        ("edge: single house", [42], 0, 1),
        ("edge: duplicates, r=0", [5, 5, 5], 0, 1),
        ("edge: r=0 distinct", [3, 1, 2], 0, 3),
        ("edge: large values", [1000000000, 0, 500000000], 1000000000, 1),
    ]

    for name, houses, r, expected in cases:
        actual = fewest_beacon_towers(list(houses), r)
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected!r} actual={actual!r}")


if __name__ == "__main__":
    _run_self_checks()
