from typing import List


def count_bookend_pairs(tags: List[str]) -> int:
    """Count pairs i < j where tags[i] is both a prefix and a suffix of tags[j]."""
    # TODO: implement
    return -1


if __name__ == "__main__":
    tests = [
        ("example 1", ["a", "aba", "ababa", "aa"], 4),
        ("example 2", ["xyz", "xyzxy", "xy", "xyzxy"], 2),
        ("example 3", ["ab", "b", "ba", "abab"], 1),
        ("extra: single tag", ["zzz"], 0),
        ("extra: longer before shorter", ["aa", "a"], 0),
        ("extra: nested bookends", ["a", "aa", "aaa", "aaaa"], 6),
        ("extra: 100000 identical tags", ["q"] * 100000, 4999950000),
    ]
    for name, tags, expected in tests:
        got = count_bookend_pairs(list(tags))
        status = "PASS" if got == expected else "FAIL"
        print(f"{status} {name}: expected={expected} got={got}")
