from typing import List


def high_score_combinations(reels: List[List[str]], banned_prefixes: List[str]) -> List[str]:
    """Return every valid 3-letter initials string obtainable by picking one
    letter from each reel in order, excluding any whose 1-, 2-, or 3-letter
    prefix matches an entry in banned_prefixes, sorted ascending."""
    # TODO: implement
    pass


def _run_self_checks() -> None:
    cases = [
        (
            "example 1",
            [["A", "B"], ["C", "D"], ["E", "F"]],
            ["BD"],
            ["ACE", "ACF", "ADE", "ADF", "BCE", "BCF"],
        ),
        (
            "example 2",
            [["X"], ["Y", "Z"], ["A", "B", "C"]],
            ["XZ", "XYB"],
            ["XYA", "XYC"],
        ),
        (
            "example 3",
            [["A"], ["B"], ["C"]],
            [],
            ["ABC"],
        ),
        (
            "edge: first letter banned prunes everything",
            [["A"], ["B"], ["C"]],
            ["A"],
            [],
        ),
        (
            "edge: mid-level banned prefix prunes a branch",
            [["P", "Q"], ["R"], ["S", "T"]],
            ["QR"],
            ["PRS", "PRT"],
        ),
    ]

    for name, reels, banned_prefixes, expected in cases:
        actual = high_score_combinations(reels, banned_prefixes)
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected!r} actual={actual!r}")


if __name__ == "__main__":
    _run_self_checks()
