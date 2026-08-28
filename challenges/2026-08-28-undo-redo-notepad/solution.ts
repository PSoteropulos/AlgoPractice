function undoRedoNotepad(ops: string[]): string {
  // TODO: implement
  return "";
}

type Case = [string[], string];

const tests: Case[] = [
  [["TYPE:Hello", "TYPE: World", "UNDO", "TYPE:!", "UNDO", "REDO"], "Hello!"],
  [["TYPE:abc", "TYPE:def", "UNDO", "UNDO", "UNDO", "REDO"], "abc"],
  [["TYPE:hi", "REDO", "UNDO", "TYPE:there", "REDO"], "there"],
  [["UNDO", "REDO", "UNDO"], ""], // extra: no TYPE ever happened
  [
    ["TYPE:a", "UNDO", "TYPE:b", "TYPE:c", "UNDO", "UNDO", "REDO", "REDO"],
    "bc",
  ], // extra: redo chain after multiple undos
];

for (const [ops, expected] of tests) {
  const got = undoRedoNotepad(ops);
  const status = got === expected ? "PASS" : "FAIL";
  console.log(
    `${status} ops=${JSON.stringify(ops)} expected=${JSON.stringify(
      expected
    )} got=${JSON.stringify(got)}`
  );
}
