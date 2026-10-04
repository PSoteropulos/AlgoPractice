function shortestUniqueShortcodes(names: string[]): string[] {
  // TODO: implement
  return [];
}

function runSelfChecks(): void {
  const cases: Array<[string, string[], string[]]> = [
    ["example 1", ["apple", "apply", "ape", "bat"], ["apple", "apply", "ape", "b"]],
    ["example 2", ["zebra", "zoo", "zone", "yak"], ["ze", "zoo", "zon", "y"]],
    ["example 3", ["ab", "abc", "abcd"], ["ab", "abc", "abcd"]],
    ["edge: single name", ["hello"], ["h"]],
    ["edge: single letters", ["a", "b", "c"], ["a", "b", "c"]],
    ["edge: deep shared prefix", ["xxxxa", "xxxxb"], ["xxxxa", "xxxxb"]],
  ];

  for (const [name, names, expected] of cases) {
    const actual = shortestUniqueShortcodes([...names]);
    const status = JSON.stringify(actual) === JSON.stringify(expected) ? "PASS" : "FAIL";
    console.log(`[${status}] ${name}: expected=${JSON.stringify(expected)} actual=${JSON.stringify(actual)}`);
  }
}

runSelfChecks();
