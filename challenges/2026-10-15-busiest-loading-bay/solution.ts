function busiestBay(n: number, trucks: number[][]): number {
  // TODO: implement
  return 0;
}

const cases: [string, number, number[][], number][] = [
  ["example 1", 2, [[1,5],[2,2],[3,1],[6,1]], 0],
  ["example 2", 3, [[1,10],[2,1],[3,1],[4,1],[5,10]], 1],
  ["example 3", 3, [[1,2],[1,2],[2,1],[3,1],[3,5]], 0],
  ["edge: single bay rejects simultaneous truck", 1, [[1,1],[1,1]], 0],
  ["edge: rejections then tie", 2, [[1,100],[1,100],[2,1],[3,1],[4,1]], 0],
  ["edge: freed bay reused over higher bay", 3, [[1,1],[1,5],[2,1],[2,5],[3,1],[3,1]], 0],
];

for (const [name, n, trucks, expected] of cases) {
  const actual = busiestBay(n, trucks);
  console.log(`[${actual === expected ? "PASS" : "FAIL"}] ${name}: expected=${expected} actual=${actual}`);
}
