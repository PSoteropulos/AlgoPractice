function oneFreeTollRoad(n: number, roads: number[][], src: number, dst: number): number {
  // TODO: implement
  return -1;
}

type Case = [number, number[][], number, number, number];

const roads1: number[][] = [[0, 1, 3], [1, 2, 3], [2, 3, 3], [0, 2, 8]];
const roads3: number[][] = [[0, 1, 2], [2, 3, 4]];

const tests: Case[] = [
  [4, roads1, 0, 3, 3],
  [4, roads1, 0, 2, 0],
  [5, roads3, 0, 4, -1],
  [4, roads1, 2, 2, 0], // extra: src == dst
  [1, [], 0, 0, 0], // extra: single city, no roads
];

for (const [n, roads, src, dst, expected] of tests) {
  const got = oneFreeTollRoad(n, roads, src, dst);
  const status = got === expected ? "PASS" : "FAIL";
  console.log(
    `${status} n=${n} roads=${JSON.stringify(roads)} src=${src} dst=${dst} expected=${expected} got=${got}`
  );
}
