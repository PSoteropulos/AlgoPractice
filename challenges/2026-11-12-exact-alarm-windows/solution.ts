function countExactAlarmWindows(nums: number[], target: number): number {
    // TODO: implement
    return -1;
}

const tests: Array<[string, number[], number, number]> = [
    ["example 1", [1, 2, 3, 4], 3, 4],
    ["example 2", [5, 5, 5], 5, 6],
    ["example 3", [0, 2, 0, 1], 2, 4],
    ["extra: target zero counts quiet runs", [0, 0, 1, 0], 0, 4],
    ["extra: target bit never appears alone", [7], 3, 0],
    ["extra: stray bit splits windows", [4, 1, 2, 4, 2], 6, 3],
    ["extra: 100000 ones (64-bit answer)", new Array(100000).fill(1), 1, 5000050000],
];

for (const [name, nums, target, expected] of tests) {
    const got = countExactAlarmWindows(nums, target);
    console.log(`${got === expected ? "PASS" : "FAIL"} ${name}: expected=${expected} got=${got}`);
}
