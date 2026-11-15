function assignBays(vehicles: number[][], m: number): number[][] {
    // TODO: implement
    return [];
}

function sameResult(a: number[][], b: number[][]): boolean {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (!a[i] || a[i].length !== 2 || a[i][0] !== b[i][0] || a[i][1] !== b[i][1]) return false;
    }
    return true;
}

const many: number[][] = Array.from({ length: 100000 }, () => [0, 1]);
const manyExpected: number[][] = Array.from({ length: 100000 }, (_, i) => [0, i + 1]);

const tests: Array<[string, number[][], number, number[][]]> = [
    ["example 1", [[0, 5], [1, 2], [1, 1], [2, 3], [6, 1]], 2, [[0, 5], [1, 4], [1, 2], [1, 7], [0, 7]]],
    ["example 2", [[3, 2], [0, 4], [2, 2], [4, 1]], 1, [[0, 9], [0, 4], [0, 7], [0, 5]]],
    ["example 3", [[0, 4], [0, 4], [2, 1], [3, 2]], 3, [[0, 4], [1, 4], [2, 3], [2, 5]]],
    ["extra: idle gap between arrivals", [[0, 1], [10, 1]], 1, [[0, 1], [0, 11]]],
    ["extra: full ties broken by index", [[5, 3], [5, 3], [5, 3], [0, 10]], 2, [[1, 8], [1, 11], [0, 13], [0, 10]]],
    ["extra: more bays than buses", [[7, 3], [7, 3]], 5, [[0, 10], [1, 10]]],
    ["extra: 100000 buses, one bay", many, 1, manyExpected],
];

for (const [name, vehicles, m, expected] of tests) {
    const got = assignBays(vehicles.map((v) => [...v]), m);
    const status = sameResult(got, expected) ? "PASS" : "FAIL";
    if (expected.length > 10) {
        console.log(`${status} ${name}`);
    } else {
        console.log(`${status} ${name}: expected=${JSON.stringify(expected)} got=${JSON.stringify(got)}`);
    }
}
