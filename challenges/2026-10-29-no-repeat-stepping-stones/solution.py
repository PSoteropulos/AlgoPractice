from typing import List


def min_hop_cost(cost: List[int]) -> int:
    """Minimum total toll to reach the last stone with jumps of 1-3, never repeating a jump length twice in a row."""
    # TODO: implement
    pass


if __name__ == "__main__":
    tests = [
        ([0, 5, 1, 4, 2], 6),
        ([0, 1, 1, 1, 1, 1, 1], 3),
        ([0, 9, 1, 1, 9, 1], 2),
        ([7], 0),                                # extra: already on the last stone
        ([3, 8], 8),                             # extra: single forced jump (start toll ignored)
        ([0, 2, 100, 3], 3),                     # extra: direct jump of 3
        ([0, 4, 4, 4, 4, 4, 4, 4, 4], 12),       # extra: uniform tolls
    ]

    for cost, expected in tests:
        got = min_hop_cost(cost)
        status = "PASS" if got == expected else "FAIL"
        print(f"{status} cost={cost} expected={expected} got={got}")
