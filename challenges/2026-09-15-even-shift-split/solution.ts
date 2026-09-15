function minMaxLoad(hourly: number[], shifts: number): number {
  // TODO: implement
  return 0;
}

type Case = [string, number[], number, number];

const cases: Case[] = [
  ["example 1", [10, 20, 30, 40], 2, 60],
  ["example 2", [5, 5, 5, 5, 5, 5], 3, 10],
  ["example 3", [3, 1, 4], 1, 8],
  ["edge: shifts equals length", [7, 2, 9], 3, 9],
  ["edge: single hour", [42], 1, 42],
];

for (const [name, hourly, shifts, expected] of cases) {
  const actual = minMaxLoad(hourly, shifts);
  const status = actual === expected ? "PASS" : "FAIL";
  console.log(`[${status}] ${name}: expected=${expected} actual=${actual}`);
}
