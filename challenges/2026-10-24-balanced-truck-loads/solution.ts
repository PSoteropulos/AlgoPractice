function minMaxTruckLoad(weights: number[], k: number): number {
  // TODO: implement
  return 0;
}

const cases: [string, number[], number, number][] = [
  ["example 1", [3,5,2,7], 2, 9],
  ["example 2", [4,4,4,4,4], 3, 8],
  ["example 3", [9,1,1,1], 2, 9],
  ["edge: single crate", [8], 1, 8],
  ["edge: one crate per truck", [7,7,7,7], 4, 7],
  ["edge: mixed weights", [6,5,4,3,3,3], 3, 9],
  ["edge: split 1..7 over two trucks", [1,2,3,4,5,6,7], 2, 14],
];

for (const [name, weights, k, expected] of cases) {
  const actual = minMaxTruckLoad([...weights], k);
  const ok = actual === expected;
  console.log(`[${ok ? "PASS" : "FAIL"}] ${name}: expected=${expected} actual=${actual}`);
}
