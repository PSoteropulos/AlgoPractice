from typing import List


def longest_doubling_chain(nums: List[int]) -> int:
    """Return the length of the longest doubling chain formable from nums."""
    # TODO: implement
    pass


if __name__ == "__main__":
    tests = [
        ([1, 2, 4, 8, 3, 10], 4),
        ([-2, -4, -8, -1], 4),
        ([0, 0, 5], 1),
        ([7], 1),          # extra: single element
        ([5, 5, 5], 1),    # extra: all duplicates, odd, no successor
    ]

    for nums, expected in tests:
        got = longest_doubling_chain(nums)
        status = "PASS" if got == expected else "FAIL"
        print(f"{status} nums={nums} expected={expected} got={got}")
