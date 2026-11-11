function countBookendPairs(tags: string[]): number {
    // TODO: implement
    return -1;
}

const tests: Array<[string, string[], number]> = [
    ["example 1", ["a", "aba", "ababa", "aa"], 4],
    ["example 2", ["xyz", "xyzxy", "xy", "xyzxy"], 2],
    ["example 3", ["ab", "b", "ba", "abab"], 1],
    ["extra: single tag", ["zzz"], 0],
    ["extra: longer before shorter", ["aa", "a"], 0],
    ["extra: nested bookends", ["a", "aa", "aaa", "aaaa"], 6],
    ["extra: 100000 identical tags", new Array(100000).fill("q"), 4999950000],
];

for (const [name, tags, expected] of tests) {
    const got = countBookendPairs([...tags]);
    console.log(`${got === expected ? "PASS" : "FAIL"} ${name}: expected=${expected} got=${got}`);
}
