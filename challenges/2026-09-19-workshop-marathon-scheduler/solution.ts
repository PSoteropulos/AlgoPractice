function maxWorkshops(workshops: number[][]): number {
  // TODO: implement
  return 0;
}

function runSelfChecks(): void {
  const cases: [string, number[][], number][] = [
    ["example 1", [[2, 5], [3, 5], [4, 7], [5, 10]], 3],
    ["example 2", [[4, 6], [5, 5], [2, 6]], 2],
    ["example 3", [[10, 3]], 0],
    ["edge: tie deadlines both fit", [[2, 4], [1, 4]], 2],
    ["edge: tie deadlines only one fits", [[3, 4], [2, 4]], 1],
  ];

  for (const [name, workshops, expected] of cases) {
    const actual = maxWorkshops(workshops);
    const status = actual === expected ? "PASS" : "FAIL";
    console.log(`[${status}] ${name}: expected=${expected} actual=${actual}`);
  }
}

runSelfChecks();
