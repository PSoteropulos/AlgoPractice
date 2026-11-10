from typing import List


def best_hub(n: int, edges: List[List[int]], weights: List[int]) -> List[int]:
    """Return [hub, min_cost]; ties go to the smallest hub index."""
    # TODO: implement
    return [-1, -1]


if __name__ == "__main__":
    big_n = 100000
    tests = [
        ("example 1", 5, [[0, 1], [0, 2], [2, 3], [2, 4]], [1, 2, 3, 4, 5], [2, 14]),
        ("example 2", 4, [[0, 1], [1, 2], [2, 3]], [1, 0, 0, 1], [0, 3]),
        ("example 3", 6, [[3, 0], [3, 1], [3, 2], [3, 4], [3, 5]], [0] * 6, [0, 0]),
        ("extra: single node", 1, [], [7], [0, 0]),
        ("extra: heavy leaf", 5, [[0, 1], [1, 2], [2, 3], [3, 4]], [1, 1, 1, 1, 100], [4, 10]),
        ("extra: unsorted edges", 7, [[4, 6], [2, 0], [5, 3], [1, 4], [3, 1], [0, 3]], [2, 9, 1, 4, 3, 8, 5], [1, 40]),
        ("extra: long path", big_n, [[i, i + 1] for i in range(big_n - 1)], [1] * big_n, [49999, 2500000000]),
    ]
    for name, n, edges, weights, expected in tests:
        got = best_hub(n, edges, weights)
        print(f"{'PASS' if got == expected else 'FAIL'} {name}: expected={expected} got={got}")
