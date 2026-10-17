function daysUntilHigher(levels: number[]): number[] {
  // TODO: implement
  return [];
}

const cases: [string, number[], number[]][] = [
  ["example 1", [3, 1, 4, 1, 5], [2, 1, 2, 1, 0]],
  ["example 2", [5, 5, 5], [0, 0, 0]],
  ["example 3", [9, 7, 5, 6], [0, 0, 1, 0]],
  ["edge: single day", [1], [0]],
  ["edge: strictly increasing", [1, 2, 3, 4], [1, 1, 1, 0]],
  ["edge: strictly decreasing", [4, 3, 2, 1], [0, 0, 0, 0]],
  ["edge: zero then big", [0, 0, 1000000000, 0, 1000000000], [2, 1, 0, 1, 0]],
];

for (const [name, levels, expected] of cases) {
  const actual = daysUntilHigher([...levels]);
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`[${ok ? "PASS" : "FAIL"}] ${name}: expected=${JSON.stringify(expected)} actual=${JSON.stringify(actual)}`);
}
