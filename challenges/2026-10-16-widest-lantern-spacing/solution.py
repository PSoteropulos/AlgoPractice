from typing import List


def widest_spacing(posts: List[int], k: int) -> int:
    """Return the largest achievable minimum distance between k chosen posts."""
    # TODO: implement
    pass


def _run_self_checks() -> None:
    cases = [
        ('example 1', [1, 2, 8, 4, 9], 3, 3),
        ('example 2', [5, 5, 5, 5], 2, 0),
        ('example 3', [10, 1, 6], 2, 9),
        ('edge: lamp on every post', [7, 1, 3], 3, 2),
        ('edge: two posts', [1000000000, 1], 2, 999999999),
        ('edge: uneven clusters', [1, 2, 3, 100, 101, 102], 3, 2),
        ('edge: two lamps spread over many posts', [3, 9, 27, 81, 243], 2, 240),
    ]

    for name, posts, k, expected in cases:
        actual = widest_spacing(list(posts), k)
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected!r} actual={actual!r}")


if __name__ == "__main__":
    _run_self_checks()
