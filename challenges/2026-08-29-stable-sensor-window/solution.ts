function longestStableWindow(readings: number[], tolerance: number): number {
  // TODO: implement
  return 0;
}

type Case = [number[], number, number];

const tests: Case[] = [
  [[4, 8, 5, 1, 7, 9], 4, 3],
  [[5, 2, 2, 3, 9, 1], 3, 4],
  [[3, 3, 3, 3, 3, 3], 0, 6],
  [[], 3, 0], // extra: empty readings
  [[10], 5, 1], // extra: single reading
];

for (const [readings, tolerance, expected] of tests) {
  const got = longestStableWindow(readings, tolerance);
  const status = got === expected ? "PASS" : "FAIL";
  console.log(
    `${status} readings=${JSON.stringify(readings)} tolerance=${tolerance} expected=${expected} got=${got}`
  );
}
