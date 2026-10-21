from typing import List


def prefix_popularity(words: List[str], k: int) -> List[int]:
    """For each word, sum the popularity of its prefixes of length >= k."""
    # TODO: implement
    pass


def _run_self_checks() -> None:
    cases = [
        ("example 1", ["abc", "ab", "bc", "b"], 2, [3, 2, 1, 0]),
        ("example 2", ["aa", "aa", "a"], 1, [5, 5, 3]),
        ("example 3", ["cat", "car", "cart", "dog"], 3, [1, 2, 3, 1]),
        ("edge: k longer than every word", ["z"], 2, [0]),
        ("edge: duplicate single letters", ["a", "a"], 1, [2, 2]),
        ("edge: triple duplicate words", ["ab", "ab", "ab"], 1, [6, 6, 6]),
        ("edge: nested shared stems", ["hello", "help", "he"], 2, [7, 6, 3]),
    ]

    for name, words, k, expected in cases:
        actual = prefix_popularity(list(words), k)
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected!r} actual={actual!r}")


if __name__ == "__main__":
    _run_self_checks()
