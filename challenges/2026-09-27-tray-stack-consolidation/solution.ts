function minConsolidationEffort(heights: number[]): number {
  // TODO: implement
  return 0;
}

function runSelfChecks(): void {
  const cases: [string, number[], number][] = [
    ["example 1", [4, 3, 2, 6], 29],
    ["example 2", [1, 8, 3, 5], 30],
    ["example 3", [7], 0],
    ["edge: no stacks at all", [], 0],
    ["edge: exactly two stacks", [2, 9], 11],
  ];

  for (const [name, heights, expected] of cases) {
    const actual = minConsolidationEffort(heights);
    const status = actual === expected ? "PASS" : "FAIL";
    console.log(`[${status}] ${name}: expected=${expected} actual=${actual}`);
  }
}

runSelfChecks();
