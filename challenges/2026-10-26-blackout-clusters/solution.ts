function maxClusterAfterShutdowns(weights: number[], edges: number[][], order: number[]): number[] {
  // TODO: implement
  return [];
}

type Case = [number[], number[][], number[], number[]];

const tests: Case[] = [
  [[4,1,3,2], [[0,1],[1,2],[2,3]], [1,2,0,3], [5,4,2,0]],
  [[5,5,5], [[0,1],[1,2],[0,2]], [0,1,2], [10,5,0]],
  [[2,7,1,3,6], [[0,1],[1,2],[3,4]], [4,0,2,1,3], [10,8,7,3,0]],
  [[7], [], [0], [0]], // extra: single tower, no edges
  [[1,1,1,1], [[0,1],[0,2],[0,3]], [0,1,2,3], [1,1,1,0]], // extra: removing the hub shatters a star
  [[1000000000,1000000000,1000000000,1000000000], [[0,1],[1,2],[2,3]], [3,2,1,0], [3000000000,2000000000,1000000000,0]], // extra: sums exceed 32-bit range
];

for (const [weights, edges, order, expected] of tests) {
  const got = maxClusterAfterShutdowns(weights, edges, order);
  const status = JSON.stringify(got) === JSON.stringify(expected) ? "PASS" : "FAIL";
  console.log(
    `${status} weights=${JSON.stringify(weights)} edges=${JSON.stringify(edges)} order=${JSON.stringify(order)} expected=${JSON.stringify(expected)} got=${JSON.stringify(got)}`
  );
}
