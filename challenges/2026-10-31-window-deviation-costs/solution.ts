function windowDeviationCosts(nums: number[], k: number): number[] {
    // TODO: implement
    return [];
}

const big: number[] = Array.from({ length: 100000 }, (_, i) => (i % 2 === 0 ? -1e9 : 1e9));
const tests: Array<[number[], number, number[]]> = [
    [[1, 3, 2, 6, 4], 3, [2, 4, 4]],
    [[5, 5, 5, 5], 2, [0, 0, 0]],
    [[1, 10, 4, 7], 4, [12]],
    [[9], 1, [0]], // extra: single reading
    [[-3, 8, -1, 2, 2, 9], 2, [11, 9, 3, 0, 7]], // extra: negatives, even k
    [[-5, -1, -9, 4], 3, [8, 13]], // extra: negatives, odd k
    [big, 100000, [1e14]], // extra: large result (exact in a double)
];

for (const [nums, k, expected] of tests) {
    const got = windowDeviationCosts(nums, k);
    const ok = got.length === expected.length && got.every((v, i) => v === expected[i]);
    const status = ok ? "PASS" : "FAIL";
    console.log(`${status} n=${nums.length} k=${k} expected=[${expected}] got=[${got}]`);
}
