function minFloodlightCost(x: number[], w: number[], c: number): number {
  // TODO: implement
  return 0;
}

const cases: [string, number[], number[], number, number][] = [
  ["example 1", [1, 2, 6, 7, 8], [3, 1, 2, 2, 1], 5, 14],
  ["example 2", [0, 10, 20], [1, 1, 1], 100, 120],
  ["example 3", [4], [7], 3, 3],
  ["edge: free lights, every stall lit", [0, 5], [2, 2], 0, 0],
  ["edge: uniform line", [0, 1, 2, 3, 4, 5], [1, 1, 1, 1, 1, 1], 2, 8],
  ["edge: large answer", [0, 1000000, 2000000, 3000000], [10000, 10000, 10000, 10000], 1000000000, 4000000000],
];

for (const [name, x, w, c, expected] of cases) {
  const actual = minFloodlightCost([...x], [...w], c);
  const status = actual === expected ? "PASS" : "FAIL";
  console.log(`[${status}] ${name}: expected=${expected} actual=${actual}`);
}
