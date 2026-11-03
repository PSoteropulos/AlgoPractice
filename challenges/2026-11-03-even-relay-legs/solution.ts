function minLongestLeg(distances: number[], k: number): number {
    // TODO: implement
    return 0;
}

const tests: Array<[number[], number, number]> = [
    [[4, 9, 3, 6, 2, 8], 3, 13],
    [[5, 5, 5, 5], 2, 10],
    [[12, 1, 1], 3, 12],
    [[7], 1, 7], // extra: single checkpoint gap
    [[0, 0, 0], 2, 0], // extra: all zero gaps
    [[1, 2, 3, 4, 5], 1, 15], // extra: one runner takes everything
    [[3, 1, 4, 1, 5, 9, 2, 6], 8, 9], // extra: one gap per runner
    [new Array(100000).fill(10000), 50000, 20000], // extra: large input
];

for (const [distances, k, expected] of tests) {
    const got = minLongestLeg(distances, k);
    const status = got === expected ? "PASS" : "FAIL";
    console.log(`${status} n=${distances.length} k=${k} expected=${expected} got=${got}`);
}
