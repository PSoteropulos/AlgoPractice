function trailheadAutocomplete(
  markers: string[],
  scores: number[],
  queries: string[]
): string[][] {
  // TODO: implement
  return [];
}

type Case = [string[], number[], string[], string[][]];

const tests: Case[] = [
  [
    ["trailhead", "trailmap", "trailrun", "bridge"],
    [50, 80, 10, 40],
    ["trail", "bri", "zzz"],
    [["trailmap", "trailhead", "trailrun"], ["bridge"], []],
  ],
  [
    ["cabin", "cave", "camp"],
    [20, 20, 20],
    ["ca"],
    [["cabin", "camp", "cave"]],
  ],
  [
    ["a", "ab", "abc", "abcd", "abcde"],
    [5, 4, 3, 2, 1],
    ["a"],
    [["a", "ab", "abc"]],
  ],
  [["lone"], [1], ["lone", "lon", "x"], [["lone"], ["lone"], []]],
  [
    ["oak", "oakley", "oaks"],
    [3, 3, 5],
    ["oak"],
    [["oaks", "oak", "oakley"]],
  ],
];

for (const [markers, scores, queries, expected] of tests) {
  const got = trailheadAutocomplete(markers, scores, queries);
  const status = JSON.stringify(got) === JSON.stringify(expected) ? "PASS" : "FAIL";
  console.log(
    `${status} queries=${JSON.stringify(queries)} expected=${JSON.stringify(expected)} got=${JSON.stringify(got)}`
  );
}
