from typing import List


def mixer_friend_circles(n: int, introductions: List[List[int]]) -> List[int]:
    """Group attendees into friend circles and return
    [largestCircleSize, soloCount]."""
    # TODO: implement
    pass


def _run_self_checks() -> None:
    cases = [
        ("example 1", 5, [[0, 1], [1, 2], [3, 4]], [3, 0]),
        ("example 2", 6, [[0, 1], [2, 3]], [2, 2]),
        ("example 3", 1, [], [1, 1]),
        ("edge: duplicate introductions", 3, [[0, 1], [1, 0], [0, 1]], [2, 1]),
        ("edge: full chain merges everyone", 4, [[0, 1], [1, 2], [2, 3]], [4, 0]),
    ]

    for name, n, introductions, expected in cases:
        actual = mixer_friend_circles(n, introductions)
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected!r} actual={actual!r}")


if __name__ == "__main__":
    _run_self_checks()
