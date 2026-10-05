function fewestBeaconTowers(houses: number[], r: number): number {
  // TODO: implement
  return 0;
}

function runSelfChecks(): void {
  const cases: Array<[string, number[], number, number]> = [
    ["example 1", [1, 2, 3, 4, 5], 1, 2],
    ["example 2", [1, 5, 9], 2, 3],
    ["example 3", [7, 3, 1, 10, 4, 12, 8], 3, 2],
    ["edge: single house", [42], 0, 1],
    ["edge: duplicates, r=0", [5, 5, 5], 0, 1],
    ["edge: r=0 distinct", [3, 1, 2], 0, 3],
    ["edge: large values", [1000000000, 0, 500000000], 1000000000, 1],
  ];

  for (const [name, houses, r, expected] of cases) {
    const actual = fewestBeaconTowers([...houses], r);
    const status = actual === expected ? "PASS" : "FAIL";
    console.log(`[${status}] ${name}: expected=${expected} actual=${actual}`);
  }
}

runSelfChecks();
