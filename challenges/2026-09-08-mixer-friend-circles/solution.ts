function mixerFriendCircles(n: number, introductions: number[][]): number[] {
  // TODO: implement
  return [];
}

function arraysEqual(a: number[], b: number[]): boolean {
  return a.length === b.length && a.every((v, i) => v === b[i]);
}

function runSelfChecks(): void {
  const cases: [string, number, number[][], number[]][] = [
    ["example 1", 5, [[0, 1], [1, 2], [3, 4]], [3, 0]],
    ["example 2", 6, [[0, 1], [2, 3]], [2, 2]],
    ["example 3", 1, [], [1, 1]],
    ["edge: duplicate introductions", 3, [[0, 1], [1, 0], [0, 1]], [2, 1]],
    ["edge: full chain merges everyone", 4, [[0, 1], [1, 2], [2, 3]], [4, 0]],
  ];

  for (const [name, n, introductions, expected] of cases) {
    const actual = mixerFriendCircles(n, introductions);
    const status = arraysEqual(actual, expected) ? "PASS" : "FAIL";
    console.log(`[${status}] ${name}: expected=${JSON.stringify(expected)} actual=${JSON.stringify(actual)}`);
  }
}

runSelfChecks();
