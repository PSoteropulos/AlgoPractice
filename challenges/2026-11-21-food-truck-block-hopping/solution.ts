function maxRouteEarnings(earnings: number[][], moveCost: number): number {
    // TODO: implement
    return -2;
}

const wideM = 50000;
const wide: number[][] = [new Array(wideM).fill(0), new Array(wideM).fill(0)];
wide[0][0] = 100000;
wide[1][wideM - 1] = 100000;
const tall: number[][] = Array.from({ length: 100000 }, () => [100000]);

const tests: Array<[string, number[][], number, number]> = [
    ["example 1", [[3, 1, 4], [1, 5, 1], [2, 1, 6]], 1, 13],
    ["example 2", [[10, 0, 0, 0, 9], [0, 0, 0, 0, 9], [10, 0, 0, 0, 0]], 3, 20],
    ["example 3", [[-5], [-2], [7]], 4, 0],
    ["extra: free driving takes each day's max", [[2, 9, 1, 0], [8, 0, 0, 3]], 0, 17],
    ["extra: single all-negative day", [[-3, -1, -7]], 5, -1],
    ["extra: wide street, long drive pays off", wide, 1, 150001],
    ["extra: totals exceed 32-bit", tall, 7, 10000000000],
];

for (const [name, earnings, moveCost, expected] of tests) {
    const got = maxRouteEarnings(earnings, moveCost);
    console.log(`${got === expected ? "PASS" : "FAIL"} ${name}: expected=${expected} got=${got}`);
}
