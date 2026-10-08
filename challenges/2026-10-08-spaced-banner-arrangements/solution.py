def count_arrangements(tiles: str) -> int:
    """Return the number of distinct rows using all tiles with no equal neighbors."""
    # TODO: implement
    pass


def _run_self_checks() -> None:
    cases = [
        ("example 1", "AAB", 1),
        ("example 2", "AABBC", 12),
        ("example 3", "AAA", 0),
        ("edge: single tile", "A", 1),
        ("edge: all distinct", "ABCDEFGHI", 362880),
        ("edge: two colors balanced", "AAAABBBB", 2),
        ("edge: mixed multiplicities", "AABBCCDDE", 8760),
    ]

    for name, tiles, expected in cases:
        actual = count_arrangements(tiles)
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected!r} actual={actual!r}")


if __name__ == "__main__":
    _run_self_checks()
