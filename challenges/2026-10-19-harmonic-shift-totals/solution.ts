function countBalancedSegments(deltas: number[], k: number): number {
  // TODO: implement
  return -1;
}

const cases: [string, number[], number, number][] = [
  ["example 1", [4, 5, 0, -2, -3, 1], 5, 5],
  ["example 2", [2, 2, 2], 2, 3],
  ["example 3", [-7, 3, 4, -5, 5], 5, 4],
  ["edge: all zeros", [0, 0, 0, 0], 3, 6],
  ["edge: k is one", [-1, 1, 9, 4, -6], 1, 10],
  ["edge: no valid segment", [1, 2, 4], 7, 1],
  ["edge: large values", [1000000000, 1000000000, 1000000000], 1000000000, 3],
  ["edge: single hour", [3], 7, 0],
];

for (const [name, deltas, k, expected] of cases) {
  const actual = countBalancedSegments([...deltas], k);
  console.log(`[${actual === expected ? "PASS" : "FAIL"}] ${name}: expected=${expected} actual=${actual}`);
}
