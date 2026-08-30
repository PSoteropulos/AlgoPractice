function findTier(thresholds: number[], points: number): number {
  // TODO: implement
  return -1;
}

type Case = [number[], number, number];

const tests: Case[] = [
  [[100, 250, 500, 1000], 300, 1],
  [[100, 250, 500, 1000], 50, -1],
  [[100, 250, 500, 1000], 1000, 3],
  [[100, 250, 500, 1000], 249, 0], // extra: just below the next threshold
  [[5], 5, 0], // extra: single-tier array, exact match
];

for (const [thresholds, points, expected] of tests) {
  const got = findTier(thresholds, points);
  const status = got === expected ? "PASS" : "FAIL";
  console.log(
    `${status} thresholds=${JSON.stringify(thresholds)} points=${points} expected=${expected} got=${got}`
  );
}
