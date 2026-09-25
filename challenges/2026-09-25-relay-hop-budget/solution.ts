function minRelayCost(
  n: number,
  edges: number[][],
  src: number,
  dst: number,
  maxHops: number
): number {
  // TODO: implement
  return 0;
}

function runSelfChecks(): void {
  const edges = [
    [0, 1, 100],
    [1, 2, 100],
    [0, 2, 500],
    [2, 3, 100],
    [1, 3, 300],
  ];
  const cases: [string, [number, number[][], number, number, number], number][] = [
    ["example 1", [4, edges, 0, 3, 2], 400],
    ["example 2", [4, edges, 0, 3, 1], -1],
    ["example 3", [4, edges, 0, 3, 3], 300],
    ["edge: zero hop budget", [4, edges, 0, 3, 0], -1],
    ["edge: unreachable dst", [4, [[0, 1, 5]], 0, 3, 3], -1],
    ["edge: cheaper duplicate direct link wins", [2, [[0, 1, 7], [0, 1, 3]], 0, 1, 1], 3],
  ];

  for (const [name, args, expected] of cases) {
    const actual = minRelayCost(...args);
    const status = actual === expected ? "PASS" : "FAIL";
    console.log(`[${status}] ${name}: expected=${expected} actual=${actual}`);
  }
}

runSelfChecks();
