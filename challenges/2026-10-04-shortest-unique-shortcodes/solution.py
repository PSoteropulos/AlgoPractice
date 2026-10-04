from typing import List


def shortest_unique_shortcodes(names: List[str]) -> List[str]:
    """Return, for each name, its shortest prefix not shared with any other
    name (or the full name if no such prefix exists)."""
    # TODO: implement
    pass


def _run_self_checks() -> None:
    cases = [
        ("example 1", ["apple", "apply", "ape", "bat"], ["apple", "apply", "ape", "b"]),
        ("example 2", ["zebra", "zoo", "zone", "yak"], ["ze", "zoo", "zon", "y"]),
        ("example 3", ["ab", "abc", "abcd"], ["ab", "abc", "abcd"]),
        ("edge: single name", ["hello"], ["h"]),
        ("edge: single letters", ["a", "b", "c"], ["a", "b", "c"]),
        ("edge: deep shared prefix", ["xxxxa", "xxxxb"], ["xxxxa", "xxxxb"]),
    ]

    for name, names, expected in cases:
        actual = shortest_unique_shortcodes(list(names))
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected!r} actual={actual!r}")


if __name__ == "__main__":
    _run_self_checks()
