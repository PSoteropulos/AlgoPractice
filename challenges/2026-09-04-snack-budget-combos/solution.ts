function countSnackCombos(prices: number[], budget: number): number {
  // TODO: implement
  return -1;
}

function runSelfChecks(): void {
  const cases: [string, number[], number, number][] = [
    ["example 1", [1, 2, 3, 4, 3], 6, 3],
    ["example 2", [5, 3, 3, 5], 8, 1],
    ["example 3", [10], 10, 0],
    ["edge: empty prices", [], 5, 0],
    ["edge: all duplicates", [2, 2, 2, 2], 4, 1],
  ];

  for (const [name, prices, budget, expected] of cases) {
    const actual = countSnackCombos(prices, budget);
    const status = actual === expected ? "PASS" : "FAIL";
    console.log(`[${status}] ${name}: expected=${expected} actual=${actual}`);
  }
}

runSelfChecks();
