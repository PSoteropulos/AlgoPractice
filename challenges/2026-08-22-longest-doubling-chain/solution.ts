function longestDoublingChain(nums: number[]): number {
  // TODO: implement
  return 0;
}

type Case = [number[], number];

const tests: Case[] = [
  [[1, 2, 4, 8, 3, 10], 4],
  [[-2, -4, -8, -1], 4],
  [[0, 0, 5], 1],
  [[7], 1], // extra: single element
  [[5, 5, 5], 1], // extra: all duplicates, odd, no successor
];

for (const [nums, expected] of tests) {
  const got = longestDoublingChain(nums);
  const status = got === expected ? "PASS" : "FAIL";
  console.log(`${status} nums=${JSON.stringify(nums)} expected=${expected} got=${got}`);
}
