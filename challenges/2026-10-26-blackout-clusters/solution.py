from typing import List


def max_cluster_after_shutdowns(weights: List[int], edges: List[List[int]], order: List[int]) -> List[int]:
    """Return, after each shutdown in order, the largest total weight of a connected group of live towers."""
    # TODO: implement
    pass


if __name__ == "__main__":
    tests = [
        ([4,1,3,2], [[0,1],[1,2],[2,3]], [1,2,0,3], [5,4,2,0]),
        ([5,5,5], [[0,1],[1,2],[0,2]], [0,1,2], [10,5,0]),
        ([2,7,1,3,6], [[0,1],[1,2],[3,4]], [4,0,2,1,3], [10,8,7,3,0]),
        ([7], [], [0], [0]),  # extra: single tower, no edges
        ([1,1,1,1], [[0,1],[0,2],[0,3]], [0,1,2,3], [1,1,1,0]),  # extra: removing the hub shatters a star
        ([1000000000,1000000000,1000000000,1000000000], [[0,1],[1,2],[2,3]], [3,2,1,0], [3000000000,2000000000,1000000000,0]),  # extra: sums exceed 32-bit range
    ]

    for weights, edges, order, expected in tests:
        got = max_cluster_after_shutdowns(weights, edges, order)
        status = "PASS" if got == expected else "FAIL"
        print(f"{status} weights={weights} edges={edges} order={order} expected={expected} got={got}")
