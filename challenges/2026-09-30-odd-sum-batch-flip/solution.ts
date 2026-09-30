class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

function buildList(values: number[]): ListNode | null {
  const dummy = new ListNode();
  let cur = dummy;
  for (const v of values) {
    cur.next = new ListNode(v);
    cur = cur.next;
  }
  return dummy.next;
}

function toList(head: ListNode | null): number[] {
  const result: number[] = [];
  let node = head;
  while (node !== null) {
    result.push(node.val);
    node = node.next;
  }
  return result;
}

function flipOddBatches(head: ListNode | null, k: number): ListNode | null {
  // TODO: implement
  return null;
}

type Case = [string, number[], number, number[]];

const cases: Case[] = [
  ["example 1", [1, 2, 3, 4, 5, 6], 3, [1, 2, 3, 6, 5, 4]],
  ["example 2", [2, 7, 4, 2, 8, 5, 9], 2, [7, 2, 4, 2, 5, 8, 9]],
  ["example 3: fewer than k nodes", [5, 3, 1], 4, [5, 3, 1]],
  ["edge: empty list", [], 2, []],
  ["edge: k = 1 never changes anything", [1, 2, 3], 1, [1, 2, 3]],
  ["edge: whole list is one odd batch", [1, 2, 4], 3, [4, 2, 1]],
  ["edge: all even sums", [0, 0, 0, 0], 2, [0, 0, 0, 0]],
  ["edge: consecutive odd batches", [1, 2, 3, 4, 5, 6], 2, [2, 1, 4, 3, 6, 5]],
];

for (const [name, values, k, expected] of cases) {
  const actual = toList(flipOddBatches(buildList(values), k));
  const status = JSON.stringify(actual) === JSON.stringify(expected) ? "PASS" : "FAIL";
  console.log(
    `[${status}] ${name}: expected=${JSON.stringify(expected)} actual=${JSON.stringify(actual)}`,
  );
}
