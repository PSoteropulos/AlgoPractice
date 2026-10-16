function widestSpacing(posts: number[], k: number): number {
  // TODO: implement
  return 0;
}

const cases: [string, number[], number, number][] = [
  ["example 1", [1, 2, 8, 4, 9], 3, 3],
  ["example 2", [5, 5, 5, 5], 2, 0],
  ["example 3", [10, 1, 6], 2, 9],
  ["edge: lamp on every post", [7, 1, 3], 3, 2],
  ["edge: two posts", [1000000000, 1], 2, 999999999],
  ["edge: uneven clusters", [1, 2, 3, 100, 101, 102], 3, 2],
  ["edge: two lamps spread over many posts", [3, 9, 27, 81, 243], 2, 240],
];

for (const [name, posts, k, expected] of cases) {
  const actual = widestSpacing([...posts], k);
  console.log(`[${actual === expected ? "PASS" : "FAIL"}] ${name}: expected=${expected} actual=${actual}`);
}
