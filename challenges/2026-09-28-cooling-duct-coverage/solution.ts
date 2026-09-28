function maxDuctArea(heights: number[]): number {
  // TODO: implement
  return 0;
}

function runSelfChecks(): void {
  const cases: [string, number[], number][] = [
    ["example 1", [2, 1, 5, 6, 2, 3], 10],
    ["example 2", [6, 2, 5, 4, 5, 1, 6], 12],
    ["example 3", [3, 3, 3, 3], 12],
    ["edge: single rack", [5], 5],
    ["edge: strictly increasing", [1, 2, 3, 4, 5], 9],
  ];

  for (const [name, heights, expected] of cases) {
    const actual = maxDuctArea(heights);
    const status = actual === expected ? "PASS" : "FAIL";
    console.log(`[${status}] ${name}: expected=${expected} actual=${actual}`);
  }
}

runSelfChecks();
