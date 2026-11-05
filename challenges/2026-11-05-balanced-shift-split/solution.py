from typing import List


def min_split_cost(weights: List[int], k: int) -> int:
    """Split weights into exactly k non-empty contiguous blocks, minimizing
    the sum of (block sum)^2. Return that minimum."""
    # TODO: implement
    return -1


if __name__ == "__main__":
    tests = [
        ("example 1", [1, 2, 3, 4], 2, 52),
        ("example 2", [3, 1, 4, 1, 5], 3, 66),
        ("example 3", [0, 0, 5], 3, 25),
        ("extra: single crate", [7], 1, 49),
        ("extra: k = n", [1, 2, 3, 4], 4, 30),
        ("extra: k = 1", [1, 2, 3, 4], 1, 100),
        ("extra: large uniform", [1] * 20000, 100, 4000000),
    ]
    for name, w, k, expected in tests:
        got = min_split_cost(w, k)
        status = "PASS" if got == expected else "FAIL"
        print(f"{status} {name}: expected={expected} got={got}")
