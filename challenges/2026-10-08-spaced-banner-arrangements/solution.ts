function countArrangements(tiles: string): number {
  // TODO: implement
  return 0;
}

const cases: [string, string, number][] = [
  ["example 1", "AAB", 1],
  ["example 2", "AABBC", 12],
  ["example 3", "AAA", 0],
  ["edge: single tile", "A", 1],
  ["edge: all distinct", "ABCDEFGHI", 362880],
  ["edge: two colors balanced", "AAAABBBB", 2],
  ["edge: mixed multiplicities", "AABBCCDDE", 8760],
];

for (const [name, tiles, expected] of cases) {
  const actual = countArrangements(tiles);
  const status = actual === expected ? "PASS" : "FAIL";
  console.log(`[${status}] ${name}: expected=${expected} actual=${actual}`);
}
