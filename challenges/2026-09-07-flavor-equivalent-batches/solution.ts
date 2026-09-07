function flavorEquivalentBatches(batches: number[][]): number[] {
  // TODO: implement
  return [];
}

function arraysEqual(a: number[], b: number[]): boolean {
  return a.length === b.length && a.every((v, i) => v === b[i]);
}

function runSelfChecks(): void {
  const cases: [string, number[][], number[]][] = [
    ["example 1", [[1, 2, 3], [3, 2, 1], [4, 5]], [2, 2]],
    ["example 2", [[1, 1, 2], [1, 2, 1], [2, 1, 1], [1, 2]], [3, 2]],
    ["example 3", [[7]], [1, 1]],
    ["edge: all identical", [[1, 2], [2, 1], [1, 2]], [3, 1]],
    ["edge: same values, different multiset", [[1, 1], [1]], [1, 2]],
  ];

  for (const [name, batches, expected] of cases) {
    const actual = flavorEquivalentBatches(batches);
    const status = arraysEqual(actual, expected) ? "PASS" : "FAIL";
    console.log(`[${status}] ${name}: expected=${JSON.stringify(expected)} actual=${JSON.stringify(actual)}`);
  }
}

runSelfChecks();
