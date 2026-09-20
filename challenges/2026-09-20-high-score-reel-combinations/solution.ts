function highScoreCombinations(reels: string[][], bannedPrefixes: string[]): string[] {
  // TODO: implement
  return [];
}

function runSelfChecks(): void {
  const cases: [string, string[][], string[], string[]][] = [
    [
      "example 1",
      [["A", "B"], ["C", "D"], ["E", "F"]],
      ["BD"],
      ["ACE", "ACF", "ADE", "ADF", "BCE", "BCF"],
    ],
    [
      "example 2",
      [["X"], ["Y", "Z"], ["A", "B", "C"]],
      ["XZ", "XYB"],
      ["XYA", "XYC"],
    ],
    ["example 3", [["A"], ["B"], ["C"]], [], ["ABC"]],
    [
      "edge: first letter banned prunes everything",
      [["A"], ["B"], ["C"]],
      ["A"],
      [],
    ],
    [
      "edge: mid-level banned prefix prunes a branch",
      [["P", "Q"], ["R"], ["S", "T"]],
      ["QR"],
      ["PRS", "PRT"],
    ],
  ];

  for (const [name, reels, bannedPrefixes, expected] of cases) {
    const actual = highScoreCombinations(reels, bannedPrefixes);
    const status =
      actual.length === expected.length && actual.every((v, i) => v === expected[i])
        ? "PASS"
        : "FAIL";
    console.log(`[${status}] ${name}: expected=${JSON.stringify(expected)} actual=${JSON.stringify(actual)}`);
  }
}

runSelfChecks();
