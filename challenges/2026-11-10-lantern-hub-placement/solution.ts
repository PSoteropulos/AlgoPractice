function bestHub(n: number, edges: number[][], weights: number[]): number[] {
    // TODO: implement
    return [-1, -1];
}

const bigN = 100000;
const bigEdges: number[][] = [];
for (let i = 0; i < bigN - 1; i++) bigEdges.push([i, i + 1]);

const tests: Array<[string, number, number[][], number[], number[]]> = [
    ["example 1", 5, [[0, 1], [0, 2], [2, 3], [2, 4]], [1, 2, 3, 4, 5], [2, 14]],
    ["example 2", 4, [[0, 1], [1, 2], [2, 3]], [1, 0, 0, 1], [0, 3]],
    ["example 3", 6, [[3, 0], [3, 1], [3, 2], [3, 4], [3, 5]], [0, 0, 0, 0, 0, 0], [0, 0]],
    ["extra: single node", 1, [], [7], [0, 0]],
    ["extra: heavy leaf", 5, [[0, 1], [1, 2], [2, 3], [3, 4]], [1, 1, 1, 1, 100], [4, 10]],
    ["extra: unsorted edges", 7, [[4, 6], [2, 0], [5, 3], [1, 4], [3, 1], [0, 3]], [2, 9, 1, 4, 3, 8, 5], [1, 40]],
    ["extra: long path", bigN, bigEdges, new Array(bigN).fill(1), [49999, 2500000000]],
];

for (const [name, n, edges, weights, expected] of tests) {
    const got = bestHub(n, edges, weights);
    const ok = got.length === 2 && got[0] === expected[0] && got[1] === expected[1];
    console.log(`${ok ? "PASS" : "FAIL"} ${name}: expected=[${expected}] got=[${got}]`);
}
