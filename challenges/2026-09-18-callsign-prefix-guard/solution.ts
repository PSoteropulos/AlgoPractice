function registerCallsigns(requests: string[]): boolean[] {
  // TODO: implement
  return [];
}

function arraysEqual(a: boolean[], b: boolean[]): boolean {
  return a.length === b.length && a.every((v, i) => v === b[i]);
}

function runSelfChecks(): void {
  const cases: [string, string[], boolean[]][] = [
    ["example 1", ["AB12", "AB", "CD9"], [true, false, true]],
    ["example 2", ["NET", "NETA", "NETB"], [true, false, false]],
    ["example 3", ["X", "Y", "XY"], [true, true, false]],
    ["edge: exact duplicate", ["A", "A"], [true, false]],
    ["edge: chain of prefixes then unrelated", ["AB", "ABC", "A"], [true, false, false]],
  ];

  for (const [name, requests, expected] of cases) {
    const actual = registerCallsigns(requests);
    const status = arraysEqual(actual, expected) ? "PASS" : "FAIL";
    console.log(`[${status}] ${name}: expected=${JSON.stringify(expected)} actual=${JSON.stringify(actual)}`);
  }
}

runSelfChecks();
