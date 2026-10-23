from typing import List


def count_quiet_pairs(masks: List[int]) -> int:
    """Return the number of pairs i < j where masks[i] & masks[j] == 0."""
    # TODO: implement
    pass


def _run_self_checks() -> None:
    cases = [
        ('example 1', [1, 2, 3], 1),
        ('example 2', [6, 9, 5, 10], 2),
        ('example 3', [0, 0, 5], 3),
        ('edge: single transmitter', [7], 0),
        ('edge: identical masks overlap', [4, 4, 4], 0),
        ('edge: max mask with zero', [1048575, 0], 1),
        ('edge: all distinct single channels', [1, 2, 4, 8, 16], 10),
    ]

    for name, masks, expected in cases:
        actual = count_quiet_pairs(list(masks))
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected!r} actual={actual!r}")


if __name__ == "__main__":
    _run_self_checks()
