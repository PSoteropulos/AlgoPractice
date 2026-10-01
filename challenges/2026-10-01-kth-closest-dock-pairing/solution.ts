function kthClosestGap(a: number[], b: number[], k: number): number {
  // TODO: implement
  return -1;
}

type Case = [string, number[], number[], number, number];

const cases: Case[] = [
  ["example 1", [8, 1, 4], [6, 2], 4, 2],
  ["example 2", [5, 5], [5], 2, 0],
  ["example 3", [7, -3, 0], [10, -1], 4, 8],
  ["edge: k = 1 smallest gap", [8, 1, 4], [6, 2], 1, 1],
  ["edge: k = last, largest gap", [8, 1, 4], [6, 2], 6, 6],
  ["edge: extreme values", [-1000000000], [1000000000], 1, 2000000000],
  ["edge: all equal", [3, 3, 3], [3, 3], 6, 0],
];

for (const [name, a, b, k, expected] of cases) {
  const actual = kthClosestGap([...a], [...b], k);
  const status = actual === expected ? "PASS" : "FAIL";
  console.log(`[${status}] ${name}: expected=${expected} actual=${actual}`);
}
