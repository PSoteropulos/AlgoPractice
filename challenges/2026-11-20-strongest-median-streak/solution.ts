function strongestMedian(nums: number[], k: number): number {
    // TODO: implement
    return 0;
}

const N = 100000;
const increasing: number[] = Array.from({ length: N }, (_, i) => i + 1);
const alternating: number[] = Array.from({ length: N }, (_, i) => (i % 2 === 0 ? 1000000000 : 1));

const tests: Array<[string, number[], number, number]> = [
    ["example 1", [1, 2, 3, 2, 1], 3, 2],
    ["example 2", [5, 1, 8, 7, 2, 9], 2, 7],
    ["example 3", [3, 9, 1, 9, 1, 9, 2], 4, 9],
    ["extra: single hour", [7], 1, 7],
    ["extra: even length takes the smaller middle", [4, 8], 2, 4],
    ["extra: odd-length streak beats every pair", [6, 2, 6, 2, 6, 2], 2, 6],
    ["extra: 100000 increasing, k = 50000", increasing, 50000, 75000],
    ["extra: 100000 alternating, whole array", alternating, N, 1],
    ["extra: 100000 alternating, k = n - 1", alternating, N - 1, 1000000000],
];

for (const [name, nums, k, expected] of tests) {
    const got = strongestMedian([...nums], k);
    const status = got === expected ? "PASS" : "FAIL";
    console.log(`${status} ${name}: expected=${expected} got=${got}`);
}
