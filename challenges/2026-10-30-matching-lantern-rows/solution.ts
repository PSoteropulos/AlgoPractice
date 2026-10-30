function countLanternRows(heights: number[]): number {
    // TODO: implement
    return 0;
}

const tests: Array<[number[], number]> = [
    [[3, 1, 3], 4],
    [[1, 4, 3, 3, 2], 6],
    [[5, 1, 6, 5], 4],
    [[7], 1], // extra: single lantern
    [[4, 4, 1, 4, 4], 11], // extra: repeated maxima around a dip
    [[2, 2, 2], 6], // extra: all equal -> n(n+1)/2
    [new Array(100000).fill(1), 5000050000], // extra: large result
];

for (const [heights, expected] of tests) {
    const got = countLanternRows(heights);
    const status = got === expected ? "PASS" : "FAIL";
    console.log(`${status} n=${heights.length} expected=${expected} got=${got}`);
}
