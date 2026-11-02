def shortest_tile(s: str) -> int:
    """Return the length of the shortest tile whose repetition, cut off at len(s), gives s."""
    # TODO: implement
    return 0


if __name__ == "__main__":
    tests = [
        ("abcabcab", 3),
        ("aabaaab", 4),
        ("abcd", 4),
        ("a", 1),                                   # extra: single character
        ("aaaaaaaa", 1),                            # extra: one repeated letter
        ("abaababaab", 5),                          # extra: complete repeats
        ("a" * 99999 + "b", 100000),                # extra: large, no shorter tile
        ("abc" * 33333 + "ab", 3),                  # extra: large, partial last copy
    ]
    for s, expected in tests:
        got = shortest_tile(s)
        status = "PASS" if got == expected else "FAIL"
        print(f"{status} len={len(s)} expected={expected} got={got}")
