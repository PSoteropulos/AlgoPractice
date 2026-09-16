function maxTotalDonations(slots: number[][]): number {
  // TODO: implement
  return 0;
}

type Case = [string, number[][], number];

const cases: Case[] = [
  ["example 1", [[0, 3, 5], [2, 5, 6], [4, 7, 5], [6, 9, 4]], 10],
  ["example 2", [[1, 4, 3]], 3],
  ["example 3", [[0, 2, 5], [0, 2, 10], [1, 3, 3]], 10],
  ["edge: back-to-back slots both taken", [[0, 2, 3], [2, 4, 4]], 7],
  ["edge: single slot", [[5, 10, 100]], 100],
];

for (const [name, slots, expected] of cases) {
  const actual = maxTotalDonations(slots);
  const status = actual === expected ? "PASS" : "FAIL";
  console.log(`[${status}] ${name}: expected=${expected} actual=${actual}`);
}
