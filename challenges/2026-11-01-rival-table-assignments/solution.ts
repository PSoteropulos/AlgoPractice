function countSeatings(n: number, rivals: number[][]): number {
    // TODO: implement
    return 0;
}

const MOD = 1_000_000_007;
function pow2(e: number): number {
    let r = 1;
    for (let i = 0; i < e; i++) r = (r * 2) % MOD;
    return r;
}

const chain: number[][] = [];
for (let i = 0; i < 99999; i++) chain.push([i, i + 1]);

const tests: Array<[number, number[][], number]> = [
    [4, [[0, 1], [1, 2]], 4],
    [3, [[0, 1], [1, 2], [2, 0]], 0],
    [5, [], 32],
    [1, [], 2], // extra: lone guest
    [6, [[0, 1], [2, 3], [4, 5], [1, 0]], 8], // extra: duplicate pair
    [4, [[0, 1], [1, 2], [2, 3], [3, 0]], 2], // extra: even cycle
    [100000, chain, 2], // extra: long path
    [100000, [], pow2(100000)], // extra: modulo needed
];

for (const [n, rivals, expected] of tests) {
    const got = countSeatings(n, rivals);
    const status = got === expected ? "PASS" : "FAIL";
    console.log(`${status} n=${n} rivals=${rivals.length} expected=${expected} got=${got}`);
}
