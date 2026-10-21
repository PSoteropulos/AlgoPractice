function prefixPopularity(words: string[], k: number): number[] {
  // TODO: implement
  return [];
}

const cases: [string, string[], number, number[]][] = [
  ["example 1", ["abc", "ab", "bc", "b"], 2, [3, 2, 1, 0]],
  ["example 2", ["aa", "aa", "a"], 1, [5, 5, 3]],
  ["example 3", ["cat", "car", "cart", "dog"], 3, [1, 2, 3, 1]],
  ["edge: k longer than every word", ["z"], 2, [0]],
  ["edge: duplicate single letters", ["a", "a"], 1, [2, 2]],
  ["edge: triple duplicate words", ["ab", "ab", "ab"], 1, [6, 6, 6]],
  ["edge: nested shared stems", ["hello", "help", "he"], 2, [7, 6, 3]],
];

for (const [name, words, k, expected] of cases) {
  const actual = prefixPopularity([...words], k);
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`[${ok ? "PASS" : "FAIL"}] ${name}: expected=${JSON.stringify(expected)} actual=${JSON.stringify(actual)}`);
}
