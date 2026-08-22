"""
Longest Balanced Parity Subarray

See problem.md for the full statement.
"""

from typing import List


def longest_balanced_parity_subarray(nums: List[int], k: int) -> int:
    """
    Return the length of the longest contiguous, non-empty subarray of
    `nums` whose balance (|#even - #odd|) is at most `k`.
    """
    # TODO: implement
    n = len(nums)
    even = 0
    odd = 0
    diff = 0
    return diff  # placeholder, remove me


def _run_self_checks():
    cases = [
        (([1, 2, 3, 4, 5], 1), 5),
        (([2, 4, 6, 1, 3], 0), 4),
        (([2, 4, 6, 8], 2), 2),
        # extra edge cases
        (([7], 5), 1),
        (([2, 4, 6, 8], 0), 0),
    ]

    all_passed = True
    for i, (args, expected) in enumerate(cases, 1):
        nums, k = args
        actual = longest_balanced_parity_subarray(list(nums), k)
        status = "PASS" if actual == expected else "FAIL"
        if status == "FAIL":
            all_passed = False
        print(f"Case {i}: {status} (nums={nums}, k={k} -> got {actual}, expected {expected})")

    if all_passed:
        print("All cases passed.")
    else:
        print("Some cases failed.")


if __name__ == "__main__":
    _run_self_checks()
