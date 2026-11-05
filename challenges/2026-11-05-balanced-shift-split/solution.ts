function minSplitCost(weights: number[], k: number): number {
    // TODO: implement
    return -1;
}

const tests: Array<[string, number[], number, number]> = [
    ["example 1", [1, 2, 3, 4], 2, 52],
    ["example 2", [3, 1, 4, 1, 5], 3, 66],
    ["example 3", [0, 0, 5], 3, 25],
    ["extra: single crate", [7], 1, 49],
    ["extra: k = n", [1, 2, 3, 4], 4, 30],
    ["extra: k = 1", [1, 2, 3, 4], 1, 100],
    ["extra: large uniform", new Array(20000).fill(1), 100, 4000000],
];

for (const [name, w, k, expected] of tests) {
    const got = minSplitCost(w, k);
    console.log(`${got === expected ? "PASS" : "FAIL"} ${name}: expected=${expected} got=${got}`);
}
