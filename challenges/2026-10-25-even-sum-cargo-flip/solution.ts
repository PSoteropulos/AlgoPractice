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
  while (head !== null) {
    out.push(head.val);
    head = head.next;
  }
  return out;
}

function reverseEvenSumGroups(head: ListNode | null, k: number): ListNode | null {
  // TODO: implement
  return null;
}

type Case = [number[], number, number[]];

const tests: Case[] = [
  [[2, 4, 1, 2, 3, 5, 7], 2, [4, 2, 1, 2, 5, 3, 7]],
  [[1, 2, 4, 6, 2, 2, 9, 9], 3, [1, 2, 4, 2, 2, 6, 9, 9]],
  [[1, 2, 3, 4, 5, 6, 7, 8], 4, [4, 3, 2, 1, 8, 7, 6, 5]],
  [[1, 3], 2, [3, 1]], // extra: single even batch
  [[1, 2], 2, [1, 2]], // extra: single odd batch
  [[2, 2], 3, [2, 2]], // extra: k exceeds n, nothing changes
  [[3, 4, 5], 1, [3, 4, 5]], // extra: k = 1 changes nothing
];

for (const [values, k, expected] of tests) {
  const got = toArray(reverseEvenSumGroups(buildList(values), k));
  const status = JSON.stringify(got) === JSON.stringify(expected) ? "PASS" : "FAIL";
  console.log(
    `${status} crates=${JSON.stringify(values)} k=${k} expected=${JSON.stringify(expected)} got=${JSON.stringify(got)}`
  );
}
