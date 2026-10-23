function countQuietPairs(masks: number[]): number {
  // TODO: implement
  return 0;
}

const cases: [string, number[], number][] = [
  ["example 1", [1, 2, 3], 1],
  ["example 2", [6, 9, 5, 10], 2],
  ["example 3", [0, 0, 5], 3],
  ["edge: single transmitter", [7], 0],
  ["edge: identical masks overlap", [4, 4, 4], 0],
  ["edge: max mask with zero", [1048575, 0], 1],
  ["edge: all distinct single channels", [1, 2, 4, 8, 16], 10],
];

for (const [name, masks, expected] of cases) {
  const actual = countQuietPairs([...masks]);
  const ok = actual === expected;
  console.log(`[${ok ? "PASS" : "FAIL"}] ${name}: expected=${expected} actual=${actual}`);
}
