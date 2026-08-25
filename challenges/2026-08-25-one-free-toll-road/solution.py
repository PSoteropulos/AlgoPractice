from typing import List


def one_free_toll_road(n: int, roads: List[List[int]], src: int, dst: int) -> int:
    """Return the minimum cost from src to dst using at most one free road crossing."""
    # TODO: implement
    pass


if __name__ == "__main__":
    roads1 = [[0, 1, 3], [1, 2, 3], [2, 3, 3], [0, 2, 8]]
    roads3 = [[0, 1, 2], [2, 3, 4]]

    tests = [
        (4, roads1, 0, 3, 3),
        (4, roads1, 0, 2, 0),
        (5, roads3, 0, 4, -1),
        (4, roads1, 2, 2, 0),                    # extra: src == dst
        (1, [], 0, 0, 0),                        # extra: single city, no roads
    ]

    for n, roads, src, dst, expected in tests:
        got = one_free_toll_road(n, roads, src, dst)
        status = "PASS" if got == expected else "FAIL"
        print(f"{status} n={n} roads={roads} src={src} dst={dst} expected={expected} got={got}")
