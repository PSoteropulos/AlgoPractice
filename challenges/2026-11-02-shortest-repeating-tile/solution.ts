function shortestTile(s: string): number {
    // TODO: implement
    return 0;
}

const tests: Array<[string, number]> = [
    ["abcabcab", 3],
    ["aabaaab", 4],
    ["abcd", 4],
    ["a", 1], // extra: single character
    ["aaaaaaaa", 1], // extra: one repeated letter
    ["abaababaab", 5], // extra: complete repeats
    ["a".repeat(99999) + "b", 100000], // extra: large, no shorter tile
    ["abc".repeat(33333) + "ab", 3], // extra: large, partial last copy
];

for (const [s, expected] of tests) {
    const got = shortestTile(s);
    const status = got === expected ? "PASS" : "FAIL";
    console.log(`${status} len=${s.length} expected=${expected} got=${got}`);
}
