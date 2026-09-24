function longestBalancedStaffingWindow(changes: number[]): number {
  // TODO: implement
  return 0;
}

function runSelfChecks(): void {
  const cases: [string, number[], number][] = [
    ["example 1", [3, -3, 4, -2, 2, -4], 6],
    ["example 2", [1, -1, 1, -1, 5], 4],
    ["example 3", [2, 3, -1], 0],
    ["edge: single zero", [0], 1],
    ["edge: no balance possible", [1, 2, 3], 0],
  ];

  for (const [name, changes, expected] of cases) {
    const actual = longestBalancedStaffingWindow(changes);
    const status = actual === expected ? "PASS" : "FAIL";
    console.log(`[${status}] ${name}: expected=${expected} actual=${actual}`);
  }
}

runSelfChecks();
