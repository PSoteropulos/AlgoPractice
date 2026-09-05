function minStorageBins(batchCodes: number[]): number {
  // TODO: implement
  return -1;
}

function runSelfChecks(): void {
  const cases: [string, number[], number][] = [
    ["example 1", [6, 10, 15], 3],
    ["example 2", [4, 9, 25, 6], 2],
    ["example 3", [2, 4, 8, 16], 4],
    ["edge: single sample", [7], 1],
    ["edge: chain conflict needs two bins", [2, 3, 4], 2],
  ];

  for (const [name, batchCodes, expected] of cases) {
    const actual = minStorageBins(batchCodes);
    const status = actual === expected ? "PASS" : "FAIL";
    console.log(`[${status}] ${name}: expected=${expected} actual=${actual}`);
  }
}

runSelfChecks();
