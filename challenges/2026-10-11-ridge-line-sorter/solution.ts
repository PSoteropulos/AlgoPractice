class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

function buildList(values: number[]): ListNode | null {
  const dummy = new ListNode(0);
  let cur = dummy;
  for (const v of values) {
    cur.next = new ListNode(v);
    cur = cur.next;
  }
  return dummy.next;
}

function toArray(head: ListNode | null): number[] {
  const out: number[] = [];
  while (head) {
    out.push(head.val);
    head = head.next;
  }
  return out;
}

function ridgeLineSorter(head: ListNode | null): ListNode | null {
  // TODO: implement
  return null;
}

const cases: [string, number[], number[]][] = [
  ["example 1", [1, 4, 6, 5, 2], [1, 2, 4, 5, 6]],
  ["example 2", [3, 3, 7, 7, 7, 1, 1], [1, 1, 3, 3, 7, 7, 7]],
  ["example 3", [9, 8, 5], [5, 8, 9]],
  ["edge: empty list", [], []],
  ["edge: single node", [5], [5]],
  ["edge: already ascending", [1, 2, 3], [1, 2, 3]],
  ["edge: all equal", [2, 2, 2], [2, 2, 2]],
  ["edge: negatives and plateau at peak", [-4, 1, 5, 5, 3, 3, 0, -4, -9], [-9, -4, -4, 0, 1, 3, 3, 5, 5]],
];

for (const [name, values, expected] of cases) {
  const actual = toArray(ridgeLineSorter(buildList(values)));
  const ok = actual.length === expected.length && actual.every((v, i) => v === expected[i]);
  console.log(`[${ok ? "PASS" : "FAIL"}] ${name}: expected=${JSON.stringify(expected)} actual=${JSON.stringify(actual)}`);
}
