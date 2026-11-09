def longest_balanced_run(log: str) -> int:
    """Return the length of the longest contiguous stretch of `log` in which
    the counts of 'A', 'B' and 'C' are all equal (0 if none)."""
    # TODO: implement
    return -1


if __name__ == "__main__":
    tests = [
        ("example 1", "AAABCCB", 6),
        ("example 2", "AABBAC", 3),
        ("example 3", "AAAB", 0),
        ("extra: single char", "A", 0),
        ("extra: exactly one of each", "ABC", 3),
        ("extra: balanced in the middle", "CBACBAAAB", 6),
        ("extra: only one category", "AAAAA", 0),
    ]
    for name, log, expected in tests:
        got = longest_balanced_run(log)
        status = "PASS" if got == expected else "FAIL"
        print(f"{status} {name}: expected={expected} got={got}")
