function gondolaUpgradeDistance(capacity: number[]): number[] {
  // TODO: implement
  return [];
}

function runSelfChecks(): void {
  const cases: [string, number[], number[]][] = [
    ["example 1", [3, 1, 2, 4], [3, 1, 1, -1]],
    ["example 2", [5, 5, 5, 5], [-1, -1, -1, -1]],
    ["example 3", [2, 4, 3, 6, 1], [1, 2, 1, -1, 1]],
    ["edge: single gondola", [1], [-1]],
    ["edge: two gondolas ascending", [1, 2], [1, -1]],
  ];

  for (const [name, capacity, expected] of cases) {
    const actual = gondolaUpgradeDistance(capacity);
    const status =
      JSON.stringify(actual) === JSON.stringify(expected) ? "PASS" : "FAIL";
    console.log(
      `[${status}] ${name}: expected=${JSON.stringify(expected)} actual=${JSON.stringify(actual)}`,
    );
  }
}

runSelfChecks();
