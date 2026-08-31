function minMuralCost(n: number, k: number, cost: number[][]): number {
  // TODO: implement
  return -1;
}

function runSelfChecks(): void {
  const cases: [string, number, number, number[][], number][] = [
    ["example 1", 3, 3, [[1, 2, 3], [3, 2, 1], [2, 1, 3]], 3],
    ["example 2", 4, 3, [[1, 5, 3], [2, 9, 4], [5, 1, 2], [3, 6, 4]], 9],
    ["example 3", 1, 3, [[5, 2, 9]], 2],
    ["edge: n=2, k=3", 2, 3, [[4, 1, 9], [2, 3, 8]], 3],
    [
      "edge: all-equal costs force any valid pattern to same total",
      5,
      3,
      [[2, 2, 2], [2, 2, 2], [2, 2, 2], [2, 2, 2], [2, 2, 2]],
      10,
    ],
  ];

  for (const [name, n, k, cost, expected] of cases) {
    const actual = minMuralCost(n, k, cost);
    const status = actual === expected ? "PASS" : "FAIL";
    console.log(`[${status}] ${name}: expected=${expected} actual=${actual}`);
  }
}

runSelfChecks();
