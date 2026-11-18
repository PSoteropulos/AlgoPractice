def min_dial_rotations(ring: str, target: str) -> int:
    """Return the minimum number of single-notch left/right turns that make
    the dial read target, or -1 if impossible (see problem.md)."""
    # TODO: implement
    return -2


def _run_self_checks() -> None:
    long_ring = "a" * 99999 + "b"
    long_target = "a" * 49999 + "b" + "a" * 50000
    cases = [
        ("example 1", "abcde", "deabc", 2),
        ("example 2", "abcabcabc", "cabcabcab", 1),
        ("example 3", "abc", "acb", -1),
        ("extra: already aligned", "xyz", "xyz", 0),
        ("extra: single letter", "q", "q", 0),
        ("extra: anagram but not a rotation", "aabb", "abab", -1),
        ("extra: long ring, lone 'b' halfway around", long_ring, long_target, 50000),
    ]

    for name, ring, target, expected in cases:
        actual = min_dial_rotations(ring, target)
        status = "PASS" if actual == expected else "FAIL"
        print(f"{status} {name}: expected={expected} got={actual}")


if __name__ == "__main__":
    _run_self_checks()
