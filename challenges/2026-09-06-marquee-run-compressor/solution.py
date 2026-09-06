def compress_marquee(s: str) -> str:
    """Compress runs of length >= 3 into '<count><letter>'; runs of length
    1 or 2 are left untouched."""
    # TODO: implement
    pass


def _run_self_checks() -> None:
    cases = [
        ("example 1", "AAAABBBCCD", "4A3BCCD"),
        ("example 2", "ABCD", "ABCD"),
        ("example 3", "AABBBBCCCCCC", "AA4B6C"),
        ("edge: empty string", "", ""),
        ("edge: long run", "A" * 12, "12A"),
    ]

    for name, s, expected in cases:
        actual = compress_marquee(s)
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected!r} actual={actual!r}")


if __name__ == "__main__":
    _run_self_checks()
