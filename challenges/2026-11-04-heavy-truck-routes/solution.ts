function reachableByTruck(n: number, bridges: number[][], queries: number[][]): boolean[] {
    // TODO: implement
    return queries.map(() => false);
}

const chain: number[][] = [];
for (let i = 0; i < 99999; i++) chain.push([i, i + 1, 5]);

const tests: Array<[string, number, number[][], number[][], boolean[]]> = [
    ["example 1", 5, [[0, 1, 8], [1, 2, 5], [2, 3, 9], [3, 4, 2]],
        [[0, 2, 5], [0, 2, 6], [2, 4, 2], [2, 4, 3], [3, 3, 100]],
        [true, false, true, false, true]],
    ["example 2", 4, [[0, 1, 3], [0, 1, 7], [2, 3, 4]],
        [[0, 1, 7], [0, 1, 8], [1, 2, 1]], [true, false, false]],
    ["example 3", 3, [], [[0, 2, 1], [1, 1, 1]], [false, true]],
    ["extra: single town", 1, [], [[0, 0, 1]], [true]],
    ["extra: large chain", 100000, chain,
        [[0, 99999, 5], [0, 99999, 6], [50000, 50001, 1]], [true, false, true]],
];

for (const [name, n, bridges, queries, expected] of tests) {
    const got = reachableByTruck(n, bridges, queries);
    const ok = got.length === expected.length && got.every((v, i) => v === expected[i]);
    console.log(`${ok ? "PASS" : "FAIL"} ${name}: expected=[${expected.slice(0, 5)}] got=[${got.slice(0, 5)}]`);
}
