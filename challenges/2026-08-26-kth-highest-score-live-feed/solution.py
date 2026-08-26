from typing import List


def kth_highest_scores(k: int, scores: List[int]) -> List[int]:
    """Return, for each prefix of scores, the k-th highest value seen so far (or -1)."""
    # TODO: implement
    pass


if __name__ == "__main__":
    tests = [
        (2, [3, 5, 10, 1, 7], [-1, 3, 5, 5, 7]),
        (1, [4, 4, 4], [4, 4, 4]),
        (3, [9, 1], [-1, -1]),
        (1, [-5, -1, -10], [-5, -1, -1]),          # extra: negative scores
        (3, [2, 8, 5], [-1, -1, 2]),                # extra: k equals length
    ]

    for k, scores, expected in tests:
        got = kth_highest_scores(k, scores)
        status = "PASS" if got == expected else "FAIL"
        print(f"{status} k={k} scores={scores} expected={expected} got={got}")
