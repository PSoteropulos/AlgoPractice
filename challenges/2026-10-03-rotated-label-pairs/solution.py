from typing import List


def count_twin_pairs(labels: List[str]) -> int:
    """Return the number of pairs (i < j) where labels[j] is a rotation of
    labels[i]."""
    # TODO: implement
    pass


def _run_self_checks() -> None:
    cases = [
        ("example 1", ["abc", "bca", "cab", "abd"], 3),
        ("example 2", ["aab", "aba", "baa", "aab"], 6),
        ("example 3", ["ab", "ba", "abc"], 1),
        ("edge: single label", ["a"], 0),
        ("edge: no twins", ["abc", "acb", "abd"], 0),
        ("edge: 100000 identical labels need 64-bit count", ["a"] * 100000, 4999950000),
    ]

    for name, labels, expected in cases:
        actual = count_twin_pairs(list(labels))
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected!r} actual={actual!r}")


if __name__ == "__main__":
    _run_self_checks()
