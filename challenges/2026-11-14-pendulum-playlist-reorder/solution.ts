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

// `limit` guards against accidental cycles in the returned list.
function toList(head: ListNode | null, limit: number): number[] {
  const result: number[] = [];
  let node = head;
  while (node !== null && result.length < limit) {
    result.push(node.val);
    node = node.next;
  }
  return result;
}

function pendulumReorder(head: ListNode | null, k: number): ListNode | null {
  // TODO: implement
  return head;
}

type Case = [string, number[], number, number[]];

const cases: Case[] = [
  ["example 1", [1, 2, 3, 4, 5, 6, 7], 2, [1, 2, 7, 6, 3, 4, 5]],
  ["example 2", [1, 2, 3, 4, 5], 1, [1, 5, 2, 4, 3]],
  ["example 3: k > n", [10, 20, 30], 5, [10, 20, 30]],
  ["edge: single node", [42], 1, [42]],
  [
    "edge: n=8, k=3, short final front block",
    [1, 2, 3, 4, 5, 6, 7, 8],
    3,
    [1, 2, 3, 8, 7, 6, 4, 5],
  ],
  [
    "edge: duplicates and negatives",
    [5, -1, 5, 0, -1, 9, 9, 2, 3, 4],
    4,
    [5, -1, 5, 0, 4, 3, 2, 9, -1, 9],
  ],
];

for (const [name, values, k, expected] of cases) {
  const head = buildList(values);
  const result = pendulumReorder(head, k);
  const actual = toList(result, values.length + 1);
  const status =
    JSON.stringify(actual) === JSON.stringify(expected) ? "PASS" : "FAIL";
  console.log(
    `[${status}] ${name}: expected=${JSON.stringify(expected)} actual=${JSON.stringify(actual)}`,
  );
}
