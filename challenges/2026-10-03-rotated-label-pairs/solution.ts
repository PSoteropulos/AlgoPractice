function countTwinPairs(labels: string[]): number {
  // TODO: implement
  return -1;
}

function runSelfChecks(): void {
  const cases: Array<[string, string[], number]> = [
    ["example 1", ["abc", "bca", "cab", "abd"], 3],
    ["example 2", ["aab", "aba", "baa", "aab"], 6],
    ["example 3", ["ab", "ba", "abc"], 1],
    ["edge: single label", ["a"], 0],
    ["edge: no twins", ["abc", "acb", "abd"], 0],
    ["edge: 100000 identical labels", new Array(100000).fill("a"), 4999950000],
  ];

  for (const [name, labels, expected] of cases) {
    const actual = countTwinPairs([...labels]);
    const status = actual === expected ? "PASS" : "FAIL";
    console.log(`[${status}] ${name}: expected=${expected} actual=${actual}`);
  }
}

runSelfChecks();
