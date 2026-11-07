from typing import List


def crate_chain_reaction(crates: List[int], k: int) -> List[int]:
    """Return the labels left after repeatedly removing k adjacent equal crates."""
    # TODO: implement
    return [-1]


if __name__ == "__main__":
    tests = [
        ("example 1", [2, 2, 3, 3, 3, 2], 3, []),
        ("example 2", [1, 1, 2, 2, 1], 2, [1]),
        ("example 3", [5, 5, 5, 5, 5], 3, [5, 5]),
        ("extra: single crate", [7], 2, [7]),
        ("extra: nested cancel", [1, 2, 3, 3, 2, 1], 2, []),
        ("extra: gap rejoins", [1, 2, 2, 1, 1, 2], 2, [1, 2]),
        ("extra: large uniform", [1] * 100000, 3, [1]),
    ]
    for name, c, k, expected in tests:
        got = crate_chain_reaction(list(c), k)
        status = "PASS" if got == expected else "FAIL"
        print(f"{status} {name}: expected={expected} got={got if len(got) < 20 else '...'}")
