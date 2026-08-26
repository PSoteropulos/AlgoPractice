function kthHighestScores(k: number, scores: number[]): number[] {
  // TODO: implement
  return [];
}

type Case = [number, number[], number[]];

const tests: Case[] = [
  [2, [3, 5, 10, 1, 7], [-1, 3, 5, 5, 7]],
  [1, [4, 4, 4], [4, 4, 4]],
  [3, [9, 1], [-1, -1]],
  [1, [-5, -1, -10], [-5, -1, -1]], // extra: negative scores
  [3, [2, 8, 5], [-1, -1, 2]], // extra: k equals length
];

for (const [k, scores, expected] of tests) {
  const got = kthHighestScores(k, scores);
  const status = JSON.stringify(got) === JSON.stringify(expected) ? "PASS" : "FAIL";
  console.log(
    `${status} k=${k} scores=${JSON.stringify(scores)} expected=${JSON.stringify(expected)} got=${JSON.stringify(got)}`
  );
}
