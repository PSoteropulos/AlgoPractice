function trailingZerosOfProduct(nums: number[]): number {
    // TODO: implement
    return -1;
}

const tests: Array<[string, number[], number]> = [
    ["example 1", [25, 8, 3], 2],
    ["example 2", [125, 4, 7, 10], 3],
    ["example 3", [3, 9, 11], 0],
    ["extra: single 1", [1], 0],
    ["extra: many fives, one two", [...Array(20).fill(5), 2], 1],
    ["extra: 2^10 * 5^8", [1024, 390625], 8],
    ["extra: 100000 copies of 10^9", Array(100000).fill(1000000000), 900000],
];

for (const [name, nums, expected] of tests) {
    const got = trailingZerosOfProduct([...nums]);
    console.log(`${got === expected ? "PASS" : "FAIL"} ${name}: expected=${expected} got=${got}`);
}
