function canReachAll(n: number, cables: number[][], queries: number[][]): boolean[] {
  // TODO: implement
  return [];
}

const cases: [string, number, number[][], number[][], boolean[]][] = [
  ["example 1", 5, [[0,1,4],[1,2,6],[2,3,2],[3,4,9]], [[0,2,7],[0,2,6],[0,4,10],[2,3,3],[3,3,1]], [true,false,true,true,true]],
  ["example 2", 4, [[0,1,5],[0,1,1],[2,3,3]], [[0,1,1],[0,1,2],[1,2,100],[2,3,4]], [false,true,false,true]],
  ["example 3", 3, [], [[1,1,1],[0,2,1000000000]], [true,false]],
  ["edge: single depot", 1, [], [[0,0,1]], [true]],
  ["edge: strict boundary, unsorted queries", 4, [[0,1,3],[1,2,3],[2,3,8]], [[0,3,9],[0,2,4],[0,2,3],[0,3,8]], [true,true,false,false]],
  ["edge: self-loop cable", 2, [[0,0,1],[0,1,5]], [[0,1,5],[0,1,6]], [false,true]],
];

for (const [name, n, cables, queries, expected] of cases) {
  const actual = canReachAll(n, cables, queries);
  const ok = actual.length === expected.length && actual.every((v, i) => v === expected[i]);
  console.log(`[${ok ? "PASS" : "FAIL"}] ${name}: expected=${JSON.stringify(expected)} actual=${JSON.stringify(actual)}`);
}
