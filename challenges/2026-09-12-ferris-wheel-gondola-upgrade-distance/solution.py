from typing import List


def gondola_upgrade_distance(capacity: List[int]) -> List[int]:
    """For each gondola, return how many steps clockwise to the first
    strictly larger gondola (searching each other gondola at most once),
    or -1 if none is found."""
    # TODO: implement
    pass


def _run_self_checks() -> None:
    cases = [
        ("example 1", [3, 1, 2, 4], [3, 1, 1, -1]),
        ("example 2", [5, 5, 5, 5], [-1, -1, -1, -1]),
        ("example 3", [2, 4, 3, 6, 1], [1, 2, 1, -1, 1]),
        ("edge: single gondola", [1], [-1]),
        ("edge: two gondolas ascending", [1, 2], [1, -1]),
    ]

    for name, capacity, expected in cases:
        actual = gondola_upgrade_distance(capacity)
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected!r} actual={actual!r}")


if __name__ == "__main__":
    _run_self_checks()
