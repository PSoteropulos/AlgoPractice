function affordableShiftBlocks(pay: number[], budget: number): number {
  // TODO: implement
  return 0;
}

const cases: [string, number[], number, number][] = [
  ["example 1", [2,1,3], 3, 4],
  ["example 2", [4,5], 3, 0],
  ["example 3", [1,1,1,1], 2, 7],
  ["edge: single shift exactly on budget", [5], 5, 1],
  ["edge: everything affordable", [1,1,1], 100, 6],
  ["edge: answer exceeds 32-bit", new Array(100000).fill(1), 1000000000, 5000050000],
];

for (const [name, pay, budget, expected] of cases) {
  const actual = affordableShiftBlocks(pay, budget);
  console.log(`[${actual === expected ? "PASS" : "FAIL"}] ${name}: expected=${expected} actual=${actual}`);
}
