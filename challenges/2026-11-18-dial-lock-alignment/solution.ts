function minDialRotations(ring: string, target: string): number {
    // TODO: implement
    return -2;
}

const longRing = "a".repeat(99999) + "b";
const longTarget = "a".repeat(49999) + "b" + "a".repeat(50000);

const tests: Array<[string, string, string, number]> = [
    ["example 1", "abcde", "deabc", 2],
    ["example 2", "abcabcabc", "cabcabcab", 1],
    ["example 3", "abc", "acb", -1],
    ["extra: already aligned", "xyz", "xyz", 0],
    ["extra: single letter", "q", "q", 0],
    ["extra: anagram but not a rotation", "aabb", "abab", -1],
    ["extra: long ring, lone 'b' halfway around", longRing, longTarget, 50000],
];

for (const [name, ring, target, expected] of tests) {
    const got = minDialRotations(ring, target);
    console.log(`${got === expected ? "PASS" : "FAIL"} ${name}: expected=${expected} got=${got}`);
}
