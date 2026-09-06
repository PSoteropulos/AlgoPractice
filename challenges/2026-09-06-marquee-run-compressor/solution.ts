function compressMarquee(s: string): string {
  // TODO: implement
  return "";
}

function runSelfChecks(): void {
  const cases: [string, string, string][] = [
    ["example 1", "AAAABBBCCD", "4A3BCCD"],
    ["example 2", "ABCD", "ABCD"],
    ["example 3", "AABBBBCCCCCC", "AA4B6C"],
    ["edge: empty string", "", ""],
    ["edge: long run", "A".repeat(12), "12A"],
  ];

  for (const [name, s, expected] of cases) {
    const actual = compressMarquee(s);
    const status = actual === expected ? "PASS" : "FAIL";
    console.log(`[${status}] ${name}: expected=${expected} actual=${actual}`);
  }
}

runSelfChecks();
