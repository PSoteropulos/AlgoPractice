function redundantTrails(n: number, trails: number[][]): number[] {
    // TODO: implement
    return [-1];
}

const bigN = 100000;
const bigTrails: number[][] = [];
for (let i = 0; i < bigN - 1; i++) bigTrails.push([i, i + 1]);
bigTrails.push([bigN - 1, 0]);

const tests: Array<[string, number, number[][], number[]]> = [
    ["example 1", 4, [[0, 1], [1, 2], [0, 2], [3, 3], [2, 3]], [2, 3]],
    ["example 2", 3, [[0, 1], [1, 0], [0, 1]], [1, 2]],
    ["example 3", 6, [[0, 1], [2, 3], [4, 5], [1, 2], [3, 4]], []],
    ["extra: no trails", 5, [], []],
    ["extra: single clearing, only loops", 1, [[0, 0], [0, 0]], [0, 1]],
    ["extra: cycle closed by last trail", 5, [[0, 1], [2, 3], [3, 4], [1, 2], [4, 0]], [4]],
    ["extra: long path then closing trail", bigN, bigTrails, [bigN - 1]],
];

const fmt = (a: number[]): string => "[" + a.join(",") + "]";

for (const [name, n, trails, expected] of tests) {
    const got = redundantTrails(n, trails);
    const ok = got.length === expected.length && got.every((v, i) => v === expected[i]);
    console.log(`${ok ? "PASS" : "FAIL"} ${name}: expected=${fmt(expected)} got=${fmt(got)}`);
}
