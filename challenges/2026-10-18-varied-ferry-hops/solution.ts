function minTotalFee(fees: number[]): number {
  // TODO: implement
  return -1;
}

const cases: [string, number[], number][] = [
  ["example 1", [4, 1, 5, 2, 3], 5],
  ["example 2", [3, 9, 1, 1], 3],
  ["example 3", [1, 1, 1, 1, 1, 1, 1], 3],
  ["edge: single dock", [7], 0],
  ["edge: two docks", [5, 2], 5],
  ["edge: eight equal fees", [2, 2, 2, 2, 2, 2, 2, 2], 6],
  ["edge: thirteen unit fees", [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5],
  ["edge: large fees", [1000000000, 1000000000, 1000000000, 1000000000], 1000000000],
];

for (const [name, fees, expected] of cases) {
  const actual = minTotalFee([...fees]);
  console.log(`[${actual === expected ? "PASS" : "FAIL"}] ${name}: expected=${expected} actual=${actual}`);
}
