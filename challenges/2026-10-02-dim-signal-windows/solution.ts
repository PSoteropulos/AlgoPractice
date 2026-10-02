function countDimWindows(nums: number[]): number {
  // TODO: implement
  return -1;
}

type Case = [string, number[], number];

const cases: Case[] = [
  ["example 1", [1, 2, 3], 4],
  ["example 2", [5, 5, 5], 2],
  ["example 3", [0, 0], 3],
  ["edge: single power of two", [4], 1],
  ["edge: single value with three bits", [7], 0],
  ["edge: two readings", [1, 3], 2],
  ["edge: 200000 zeros need large count", new Array(200000).fill(0), 20000100000],
];

for (const [name, nums, expected] of cases) {
  const actual = countDimWindows([...nums]);
  const status = actual === expected ? "PASS" : "FAIL";
  console.log(`[${status}] ${name}: expected=${expected} actual=${actual}`);
}
