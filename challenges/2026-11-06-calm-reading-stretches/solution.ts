function countCalmStretches(readings: number[], tolerance: number): number {
    // TODO: implement
    return -1;
}

const tests: Array<[string, number[], number, number]> = [
    ["example 1", [1, 3, 2, 5], 1, 5],
    ["example 2", [4, 4, 4], 0, 6],
    ["example 3", [2, 5, 3, 4, 8], 2, 8],
    ["extra: single reading", [10], 0, 1],
    ["extra: huge tolerance", [1, 1000000000, 5], 1000000000, 6],
    ["extra: increasing", [1, 2, 3, 4, 5], 1, 9],
    ["extra: large uniform", new Array(100000).fill(1), 0, 5000050000],
];

for (const [name, r, t, expected] of tests) {
    const got = countCalmStretches(r, t);
    console.log(`${got === expected ? "PASS" : "FAIL"} ${name}: expected=${expected} got=${got}`);
}
