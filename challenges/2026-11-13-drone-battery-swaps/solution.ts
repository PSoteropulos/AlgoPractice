function minBatterySwaps(stations: number[], destination: number, batteryRange: number): number {
    // TODO: implement
    return -1;
}

const tests: Array<[string, number[], number, number, number]> = [
    ["example 1", [3, 7, 9, 14], 16, 6, 3],
    ["example 2", [2, 4], 5, 5, 0],
    ["example 3", [2, 5, 11], 15, 5, -1],
    ["extra: no stations, too far", [], 10, 3, -1],
    ["extra: exact-boundary hops", [4], 8, 4, 1],
    ["extra: must use every station", [1, 2, 3, 4], 5, 1, 4],
    ["extra: 100000 evenly spaced stations", Array.from({ length: 100000 }, (_, i) => 10 * (i + 1)), 1000010, 10, 100000],
];

for (const [name, stations, destination, batteryRange, expected] of tests) {
    const got = minBatterySwaps(stations, destination, batteryRange);
    console.log(`${got === expected ? "PASS" : "FAIL"} ${name}: expected=${expected} got=${got}`);
}
