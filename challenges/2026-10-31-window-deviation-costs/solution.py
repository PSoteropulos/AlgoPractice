from typing import List


def window_deviation_costs(nums: List[int], k: int) -> List[int]:
    """Return the deviation cost of every window of k consecutive readings."""
    # TODO: implement
    return []


if __name__ == "__main__":
    big = [(-10**9 if i % 2 == 0 else 10**9) for i in range(100000)]
    tests = [
        (([1, 3, 2, 6, 4], 3), [2, 4, 4]),
        (([5, 5, 5, 5], 2), [0, 0, 0]),
        (([1, 10, 4, 7], 4), [12]),
        (([9], 1), [0]),                                    # extra: single reading
        (([-3, 8, -1, 2, 2, 9], 2), [11, 9, 3, 0, 7]),      # extra: negatives, even k
        (([-5, -1, -9, 4], 3), [8, 13]),                    # extra: negatives, odd k
        ((big, 100000), [10**14]),                          # extra: needs 64-bit result
    ]
    for (nums, k), expected in tests:
        got = window_deviation_costs(nums, k)
        status = "PASS" if got == expected else "FAIL"
        print(f"{status} n={len(nums)} k={k} expected={expected} got={got}")
