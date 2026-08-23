function cappedTeamMerges(n: number, maxSize: number, requests: number[][]): number[] {
  // TODO: implement
  return [];
}

type Case = [number, number, number[][], number[]];

const tests: Case[] = [
  [5, 3, [[0, 1], [2, 3], [1, 2], [3, 4]], [2, 2, 3, 3, 3]],
  [4, 2, [[0, 1], [1, 2], [2, 3]], [2, 2, 2, 2]],
  [3, 1, [[0, 1], [1, 2]], [1, 1, 1]],
  [1, 1, [], [1]], // extra: single employee, no requests
  [4, 4, [[0, 1], [2, 3], [1, 2]], [4, 4, 4, 4]], // extra: cap allows full merge
];

for (const [n, maxSize, requests, expected] of tests) {
  const got = cappedTeamMerges(n, maxSize, requests);
  const status = JSON.stringify(got) === JSON.stringify(expected) ? "PASS" : "FAIL";
  console.log(
    `${status} n=${n} maxSize=${maxSize} requests=${JSON.stringify(requests)} expected=${JSON.stringify(expected)} got=${JSON.stringify(got)}`
  );
}
