function countSpecialBadges(queries: number[][]): number[] {
  // TODO: implement
  return [];
}

const cases: [string, number[][], number[]][] = [
  ["example 1", [[1, 10], [10, 50], [1, 1]], [2, 2, 0]],
  ["example 2", [[4, 4], [5, 8], [1, 100]], [1, 0, 4]],
  ["example 3", [[1, 1000000000000]], [78498]],
  ["edge: no squares of primes in range", [[2, 3], [24, 26]], [0, 1]],
  ["edge: square of largest prime below 10^6", [[999966000289, 999966000289]], [1]],
  ["edge: square of composite only", [[36, 36], [16, 16]], [0, 0]],
];

for (const [name, queries, expected] of cases) {
  const actual = countSpecialBadges(queries.map((q) => [...q]));
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`[${ok ? "PASS" : "FAIL"}] ${name}: expected=${JSON.stringify(expected)} actual=${JSON.stringify(actual)}`);
}
