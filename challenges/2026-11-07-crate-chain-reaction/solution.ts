function crateChainReaction(crates: number[], k: number): number[] {
    // TODO: implement
    return [-1];
}

const tests: Array<[string, number[], number, number[]]> = [
    ["example 1", [2, 2, 3, 3, 3, 2], 3, []],
    ["example 2", [1, 1, 2, 2, 1], 2, [1]],
    ["example 3", [5, 5, 5, 5, 5], 3, [5, 5]],
    ["extra: single crate", [7], 2, [7]],
    ["extra: nested cancel", [1, 2, 3, 3, 2, 1], 2, []],
    ["extra: gap rejoins", [1, 2, 2, 1, 1, 2], 2, [1, 2]],
    ["extra: large uniform", new Array(100000).fill(1), 3, [1]],
];

for (const [name, c, k, expected] of tests) {
    const got = crateChainReaction([...c], k);
    const ok = got.length === expected.length && got.every((v, i) => v === expected[i]);
    console.log(`${ok ? "PASS" : "FAIL"} ${name}: expected=[${expected}] got=[${got.length < 20 ? got : "..."}]`);
}
