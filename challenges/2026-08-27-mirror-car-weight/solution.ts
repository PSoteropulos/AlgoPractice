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

function mirrorCarWeight(head: ListNode | null, k: number): number {
  // TODO: implement
  return -1;
}

type Case = [number[], number, number];

const tests: Case[] = [
  [[10, 20, 30, 40, 50], 2, 40],
  [[9], 1, 9],
  [[3, 6, 9], 5, -1],
  [[7, 14], 1, 14], // extra: mirror maps to the last car
  [[1, 2, 3, 4], 4, 1], // extra: k equals n, mirror maps to the first car
];

for (const [values, k, expected] of tests) {
  const head = buildList(values);
  const got = mirrorCarWeight(head, k);
  const status = got === expected ? "PASS" : "FAIL";
  console.log(
    `${status} cars=${JSON.stringify(values)} k=${k} expected=${expected} got=${got}`
  );
}
