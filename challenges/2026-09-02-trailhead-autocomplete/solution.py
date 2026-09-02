from typing import List


def trailhead_autocomplete(
    markers: List[str], scores: List[int], queries: List[str]
) -> List[List[str]]:
    """For each query prefix, return up to 3 markers starting with it,
    ordered by score descending then alphabetically ascending."""
    # TODO: implement
    pass


if __name__ == "__main__":
    tests = [
        (
            ["trailhead", "trailmap", "trailrun", "bridge"],
            [50, 80, 10, 40],
            ["trail", "bri", "zzz"],
            [["trailmap", "trailhead", "trailrun"], ["bridge"], []],
        ),
        (
            ["cabin", "cave", "camp"],
            [20, 20, 20],
            ["ca"],
            [["cabin", "camp", "cave"]],
        ),
        (
            ["a", "ab", "abc", "abcd", "abcde"],
            [5, 4, 3, 2, 1],
            ["a"],
            [["a", "ab", "abc"]],
        ),
        (
            ["lone"],
            [1],
            ["lone", "lon", "x"],
            [["lone"], ["lone"], []],
        ),
        (
            ["oak", "oakley", "oaks"],
            [3, 3, 5],
            ["oak"],
            [["oaks", "oak", "oakley"]],
        ),
    ]

    for markers, scores, queries, expected in tests:
        got = trailhead_autocomplete(markers, scores, queries)
        status = "PASS" if got == expected else "FAIL"
        print(f"{status} queries={queries} expected={expected} got={got}")
