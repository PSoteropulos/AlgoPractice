def count_exact_alarm_windows(nums: list[int], target: int) -> int:
    """Return the number of non-empty contiguous windows of `nums` whose
    bitwise OR is exactly `target`."""
    # TODO: implement
    return -1


if __name__ == "__main__":
    tests = [
        ("example 1", [1, 2, 3, 4], 3, 4),
        ("example 2", [5, 5, 5], 5, 6),
        ("example 3", [0, 2, 0, 1], 2, 4),
        ("extra: target zero counts quiet runs", [0, 0, 1, 0], 0, 4),
        ("extra: target bit never appears alone", [7], 3, 0),
        ("extra: stray bit splits windows", [4, 1, 2, 4, 2], 6, 3),
        ("extra: 100000 ones (64-bit answer)", [1] * 100000, 1, 5000050000),
    ]
    for name, nums, target, expected in tests:
        got = count_exact_alarm_windows(nums, target)
        status = "PASS" if got == expected else "FAIL"
        print(f"{status} {name}: expected={expected} got={got}")
