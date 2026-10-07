function countGrandFlashes(p: number[], T: number): number {
  // TODO: implement
  return 0;
}

const cases: [string, number[], number, number][] = [
  ["example 1", [4, 6], 40, 3],
  ["example 2", [5, 7, 35], 100, 2],
  ["example 3", [1000000000, 999999999], 1000000000000000, 0],
  ["edge: single lantern period 1", [1], 1, 1],
  ["edge: period larger than limit", [3], 2, 0],
  ["edge: duplicate periods", [7, 7, 7], 49, 7],
  ["edge: first nine primes", [2, 3, 5, 7, 11, 13, 17, 19, 23], 1000000000000000, 4482438],
];

for (const [name, p, T, expected] of cases) {
  const actual = countGrandFlashes([...p], T);
  const status = actual === expected ? "PASS" : "FAIL";
  console.log(`[${status}] ${name}: expected=${expected} actual=${actual}`);
}
