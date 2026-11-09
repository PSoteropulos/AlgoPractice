function longestBalancedRun(log: string): number {
    // TODO: implement
    return -1;
}

const tests: Array<[string, string, number]> = [
    ["example 1", "AAABCCB", 6],
    ["example 2", "AABBAC", 3],
    ["example 3", "AAAB", 0],
    ["extra: single char", "A", 0],
    ["extra: exactly one of each", "ABC", 3],
    ["extra: balanced in the middle", "CBACBAAAB", 6],
    ["extra: only one category", "AAAAA", 0],
];

for (const [name, log, expected] of tests) {
    const got = longestBalancedRun(log);
    console.log(`${got === expected ? "PASS" : "FAIL"} ${name}: expected=${expected} got=${got}`);
}
