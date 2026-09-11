function maxOrdersCompleted(orders: number[][]): number {
  // TODO: implement
  return 0;
}

function runSelfChecks(): void {
  const cases: [string, number[][], number][] = [
    ["example 1", [[5, 9], [2, 6], [3, 9], [4, 15], [6, 15]], 4],
    ["example 2", [[3, 3], [2, 3]], 1],
    ["example 3", [[5, 3]], 0],
    ["edge: no orders at all", [], 0],
    ["edge: everything comfortably fits", [[1, 10], [2, 10], [3, 10]], 3],
  ];

  for (const [name, orders, expected] of cases) {
    const actual = maxOrdersCompleted(orders);
    const status = actual === expected ? "PASS" : "FAIL";
    console.log(`[${status}] ${name}: expected=${expected} actual=${actual}`);
  }
}

runSelfChecks();
