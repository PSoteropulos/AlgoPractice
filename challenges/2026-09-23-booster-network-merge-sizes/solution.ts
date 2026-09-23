function boosterNetworkMergeSizes(n: number, cables: number[][]): number[] {
  // TODO: implement
  return [];
}

function arraysEqual(a: number[], b: number[]): boolean {
  return a.length === b.length && a.every((v, i) => v === b[i]);
}

function runSelfChecks(): void {
  const cases: [string, number, number[][], number[]][] = [
    ["example 1", 5, [[0, 1], [1, 2], [3, 4], [2, 3]], [2, 3, 2, 5]],
    ["example 2", 3, [[0, 1], [0, 1]], [2, 2]],
    ["example 3", 4, [[0, 1], [2, 3], [1, 3]], [2, 2, 4]],
    ["edge: no cables", 3, [], []],
    ["edge: single booster network never grows", 1, [], []],
    ["edge: long chain", 4, [[0, 1], [1, 2], [2, 3]], [2, 3, 4]],
  ];

  for (const [name, n, cables, expected] of cases) {
    const actual = boosterNetworkMergeSizes(n, cables);
    const status = arraysEqual(actual, expected) ? "PASS" : "FAIL";
    console.log(`[${status}] ${name}: expected=${JSON.stringify(expected)} actual=${JSON.stringify(actual)}`);
  }
}

runSelfChecks();
