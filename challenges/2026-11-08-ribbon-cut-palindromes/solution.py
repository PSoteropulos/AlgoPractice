from typing import List


def ribbon_cuts(ribbon: str, min_len: int) -> List[List[str]]:
    """Return every way to cut `ribbon` into palindromic pieces, each of
    length >= min_len, ordered by piece lengths left to right (shorter first)."""
    # TODO: implement
    return [["TODO"]]


def fmt(plans: List[List[str]]) -> List[str]:
    return ["|".join(p) for p in plans]


if __name__ == "__main__":
    tests = [
        ("example 1", "aab", 1, ["a|a|b", "aa|b"]),
        ("example 2", "abba", 2, ["abba"]),
        ("example 3", "aaaaaa", 2, ["aa|aa|aa", "aa|aaaa", "aaa|aaa", "aaaa|aa", "aaaaaa"]),
        ("extra: no plan", "abc", 2, []),
        ("extra: single char", "a", 1, ["a"]),
        ("extra: all compositions", "aaa", 1, ["a|a|a", "a|aa", "aa|a", "aaa"]),
    ]
    for name, s, m, expected in tests:
        got = fmt(ribbon_cuts(s, m))
        status = "PASS" if got == expected else "FAIL"
        print(f"{status} {name}: expected={expected} got={got}")
