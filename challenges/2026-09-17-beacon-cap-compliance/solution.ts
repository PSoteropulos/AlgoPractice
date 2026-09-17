function capCompliance(cap: number, powers: number[]): [number, number] {
  // TODO: implement
  return [0, -1];
}

type Case = [string, number, number[], [number, number]];

const cases: Case[] = [
  ["example 1", 6, [2, 4, 6, 7, 1], [3, 6]],
  ["example 2", 0, [0, 0, 0], [3, 0]],
  ["example 3", 5, [8, 16], [0, -1]],
  ["edge: single drone equal to cap", 9, [9], [1, 9]],
  ["edge: even cap excludes bit 0", 1_000_000_000, [0, 1], [1, 0]],
];

for (const [name, cap, powers, expected] of cases) {
  const actual = capCompliance(cap, powers);
  const status =
    actual[0] === expected[0] && actual[1] === expected[1] ? "PASS" : "FAIL";
  console.log(
    `[${status}] ${name}: expected=${JSON.stringify(expected)} actual=${JSON.stringify(actual)}`
  );
}
