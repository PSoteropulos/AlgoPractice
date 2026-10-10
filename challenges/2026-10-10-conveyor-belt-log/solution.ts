function conveyorBeltLog(events: number[]): number[] {
  // TODO: implement
  return [];
}

const cases: [string, number[], number[]][] = [
  ["example 1", [5,3,0,4,-1,7], [4,7]],
  ["example 2", [2,6,1,-5,9,0,0], []],
  ["example 3", [3,8,2,-1,0,-2,6], [6]],
  ["edge: removals on empty belt", [0,0,-3], []],
  ["edge: single placement", [4], [4]],
  ["edge: front then back removal interplay", [1,2,3,-2,0,5,-1,0,9], [9]],
];

for (const [name, events, expected] of cases) {
  const actual = conveyorBeltLog(events);
  const ok = actual.length === expected.length && actual.every((v, i) => v === expected[i]);
  console.log(`[${ok ? "PASS" : "FAIL"}] ${name}: expected=${JSON.stringify(expected)} actual=${JSON.stringify(actual)}`);
}
