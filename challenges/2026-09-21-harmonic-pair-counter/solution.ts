function countHarmonicPairs(freq: number[], k: number): number {
  // TODO: implement
  return 0;
}

function runSelfChecks(): void {
  const cases: [string, number[], number, number][] = [
    ["example 1", [4, 6, 8, 10, 3], 2, 5],
    ["example 2", [2, 4, 8, 16], 4, 2],
    ["example 3", [5, 7, 11], 5, 0],
    ["edge: k larger than every value", [2, 4, 6], 100, 0],
    ["edge: all elements equal to k", [7, 7, 7], 7, 3],
  ];

  for (const [name, freq, k, expected] of cases) {
    const actual = countHarmonicPairs(freq, k);
    const status = actual === expected ? "PASS" : "FAIL";
    console.log(`[${status}] ${name}: expected=${expected} actual=${actual}`);
  }
}

runSelfChecks();
