function peakPlateauTotal(h: number[]): number {
  // TODO: implement
  return 0;
}

const cases: [string, number[], number][] = [
  ["example 1", [1, 3, 3, 2, 2, 5, 4, 4, 4], 3],
  ["example 2", [7, 7, 7], 3],
  ["example 3", [1, 2, 3, 4], 1],
  ["edge: single element", [9], 1],
  ["edge: valley between peaks", [5, 1, 5], 2],
  ["edge: alternating with wide ends", [2, 2, 1, 2, 1, 1], 3],
  ["edge: descending negatives", [-1, -2, -2, -3], 1],
];

for (const [name, h, expected] of cases) {
  const actual = peakPlateauTotal([...h]);
  const status = actual === expected ? "PASS" : "FAIL";
  console.log(`[${status}] ${name}: expected=${expected} actual=${actual}`);
}
