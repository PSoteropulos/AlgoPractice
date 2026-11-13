def min_battery_swaps(stations: list[int], destination: int, battery_range: int) -> int:
    """Return the minimum number of battery swaps the drone needs to reach
    `destination`, or -1 if it is unreachable."""
    # TODO: implement
    return -1


if __name__ == "__main__":
    tests = [
        ("example 1", [3, 7, 9, 14], 16, 6, 3),
        ("example 2", [2, 4], 5, 5, 0),
        ("example 3", [2, 5, 11], 15, 5, -1),
        ("extra: no stations, too far", [], 10, 3, -1),
        ("extra: exact-boundary hops", [4], 8, 4, 1),
        ("extra: must use every station", [1, 2, 3, 4], 5, 1, 4),
        ("extra: 100000 evenly spaced stations", [10 * (i + 1) for i in range(100000)], 1000010, 10, 100000),
    ]
    for name, stations, destination, battery_range, expected in tests:
        got = min_battery_swaps(stations, destination, battery_range)
        status = "PASS" if got == expected else "FAIL"
        print(f"{status} {name}: expected={expected} got={got}")
