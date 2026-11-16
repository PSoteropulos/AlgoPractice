function earliestArrival(n: number, ferries: number[][], k: number): number {
    // TODO: implement
    return 0;
}

const chain: number[][] = Array.from({ length: 9999 }, (_, i) => [i, i + 1, 1, 2]);

const tests: Array<[string, number, number[][], number, number]> = [
    ["example 1", 4, [[0, 1, 2, 5], [1, 3, 3, 4], [0, 2, 4, 3], [2, 3, 1, 10]], 0, 7],
    ["example 2", 5, [[0, 1, 3, 1], [1, 4, 2, 20], [0, 2, 1, 1], [2, 3, 1, 1], [3, 4, 6, 1]], 1, 5],
    ["example 3", 3, [[0, 1, 5, 2]], 2, -1],
    ["extra: example 2 without vouchers", 5, [[0, 1, 3, 1], [1, 4, 2, 20], [0, 2, 1, 1], [2, 3, 1, 1], [3, 4, 6, 1]], 0, 8],
    ["extra: parallel routes, slower ride wins", 3, [[0, 1, 4, 7], [0, 1, 9, 1], [1, 2, 3, 5]], 0, 8],
    ["extra: one voucher can't fix a two-wait chain", 4, [[0, 1, 1, 1], [1, 2, 1, 9], [2, 3, 1, 9], [1, 3, 5, 1]], 1, 6],
    ["extra: two vouchers unlock the chain", 4, [[0, 1, 1, 1], [1, 2, 1, 9], [2, 3, 1, 9], [1, 3, 5, 1]], 2, 3],
    ["extra: 10000-island chain, no vouchers", 10000, chain, 0, 19997],
    ["extra: 10000-island chain, 10 vouchers", 10000, chain, 10, 19977],
];

for (const [name, n, ferries, k, expected] of tests) {
    const got = earliestArrival(n, ferries.map((f) => [...f]), k);
    const status = got === expected ? "PASS" : "FAIL";
    console.log(`${status} ${name}: expected=${expected} got=${got}`);
}
