function broadcastReach(n: number, edges: number[][], start: number): number {
  // TODO: implement
  return 0;
}

function runSelfChecks(): void {
  const cases: [string, number, number[][], number, number][] = [
    ["example 1", 6, [[0, 1], [0, 2], [1, 3], [2, 3], [3, 4]], 0, 5],
    ["example 2", 4, [[1, 2], [2, 3]], 0, 1],
    ["example 3", 3, [[0, 1], [1, 2], [2, 0]], 1, 3],
    ["edge: no edges at all", 1, [], 0, 1],
    ["edge: duplicate edges", 3, [[0, 1], [0, 1], [1, 2]], 0, 3],
  ];

  for (const [name, n, edges, start, expected] of cases) {
    const actual = broadcastReach(n, edges, start);
    const status = actual === expected ? "PASS" : "FAIL";
    console.log(`[${status}] ${name}: expected=${expected} actual=${actual}`);
  }
}

runSelfChecks();
