function findScanGlitch(scans: number[]): number[] {
  // TODO: implement
  return [0, 0];
}

function runSelfChecks(): void {
  const cases: [string, number[], number[]][] = [
    ["example 1", [1, 2, 2, 4], [2, 3]],
    ["example 2", [1, 1], [1, 2]],
    ["example 3", [3, 2, 3, 4, 5, 1], [3, 6]],
    ["edge: duplicate is smallest value, missing is largest", [2, 2], [2, 1]],
    ["edge: larger roster", [7, 3, 4, 5, 6, 3, 1], [3, 2]],
  ];

  for (const [name, scans, expected] of cases) {
    const actual = findScanGlitch(scans);
    const status =
      actual.length === expected.length && actual.every((v, i) => v === expected[i])
        ? "PASS"
        : "FAIL";
    console.log(`[${status}] ${name}: expected=${JSON.stringify(expected)} actual=${JSON.stringify(actual)}`);
  }
}

runSelfChecks();
