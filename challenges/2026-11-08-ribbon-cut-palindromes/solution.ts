function ribbonCuts(ribbon: string, minLen: number): string[][] {
    // TODO: implement
    return [["TODO"]];
}

const tests: Array<[string, string, number, string[]]> = [
    ["example 1", "aab", 1, ["a|a|b", "aa|b"]],
    ["example 2", "abba", 2, ["abba"]],
    ["example 3", "aaaaaa", 2, ["aa|aa|aa", "aa|aaaa", "aaa|aaa", "aaaa|aa", "aaaaaa"]],
    ["extra: no plan", "abc", 2, []],
    ["extra: single char", "a", 1, ["a"]],
    ["extra: all compositions", "aaa", 1, ["a|a|a", "a|aa", "aa|a", "aaa"]],
];

for (const [name, s, m, expected] of tests) {
    const got = ribbonCuts(s, m).map((p) => p.join("|"));
    const ok = JSON.stringify(got) === JSON.stringify(expected);
    console.log(`${ok ? "PASS" : "FAIL"} ${name}: expected=${JSON.stringify(expected)} got=${JSON.stringify(got)}`);
}
