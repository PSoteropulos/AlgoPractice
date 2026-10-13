function minExtraTunnels(n: number, tunnels: number[][]): number {
  // TODO: implement
  return 0;
}

const tests: Array<[number, number[][], number]> = [
  [5, [[0, 1], [0, 2], [0, 3], [0, 4]], 2],
  [6, [[0, 1], [1, 2], [2, 0], [2, 3], [3, 4], [3, 5]], 2],
  [4, [[0, 1], [1, 2], [2, 3], [3, 0]], 0],
  [1, [], 0],  // extra: single chamber
  [3, [[0, 1], [0, 1], [1, 2]], 1],  // extra: parallel tunnels, one fragile
  [6, [[0, 1], [1, 2], [2, 0], [2, 3], [3, 4], [4, 5], [5, 3]], 1],  // extra: two loops joined by a bridge
  [6, [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]], 1],  // extra: path of six
];

for (const [n, tunnels, expected] of tests) {
  const got = minExtraTunnels(n, tunnels);
  const status = got === expected ? "PASS" : "FAIL";
  console.log(`${status} n=${n} tunnels=${JSON.stringify(tunnels)} expected=${expected} got=${got}`);
}
