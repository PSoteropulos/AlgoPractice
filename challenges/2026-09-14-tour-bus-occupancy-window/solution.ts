function longestSteadyWindow(
  occupancy: number[],
  tolerance: number,
  minPeak: number,
): number {
  // TODO: implement
  return 0;
}

type Case = [string, number[], number, number, number];

const cases: Case[] = [
  ["example 1", [4, 6, 5, 7, 9, 8, 3], 3, 8, 3],
  ["example 2", [2, 2, 2, 2], 0, 5, 0],
  ["example 3", [10, 10, 10, 10, 10], 0, 10, 5],
  ["edge: single element meets peak", [5], 0, 5, 1],
  ["edge: single element below peak", [5], 0, 6, 0],
];

for (const [name, occupancy, tolerance, minPeak, expected] of cases) {
  const actual = longestSteadyWindow(occupancy, tolerance, minPeak);
  const status = actual === expected ? "PASS" : "FAIL";
  console.log(`[${status}] ${name}: expected=${expected} actual=${actual}`);
}
