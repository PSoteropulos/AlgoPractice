function maxTotalTips(tips: number[], d: number): number {
  // TODO: implement
  return 0;
}

function runSelfChecks(): void {
  const cases: [string, number[], number, number][] = [
    ["example 1", [4, 1, 7, 3, 6], 2, 17],
    ["example 2", [5, 10, 5, 10], 3, 15],
    ["example 3", [-3, -1, -2], 2, 0],
    ["edge: d = 1 takes all positives", [2, -1, 3], 1, 5],
    ["edge: d larger than n", [9, 8, 7], 5, 9],
    ["edge: single negative", [-5], 1, 0],
  ];

  for (const [name, tips, d, expected] of cases) {
    const actual = maxTotalTips(tips, d);
    const status = actual === expected ? "PASS" : "FAIL";
    console.log(`[${status}] ${name}: expected=${expected} actual=${actual}`);
  }
}

runSelfChecks();
