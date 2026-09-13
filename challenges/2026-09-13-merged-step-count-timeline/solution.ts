class ListNode {
  timestamp: number;
  steps: number;
  next: ListNode | null;
  constructor(
    timestamp: number = 0,
    steps: number = 0,
    next: ListNode | null = null,
  ) {
    this.timestamp = timestamp;
    this.steps = steps;
    this.next = next;
  }
}

function buildList(values: [number, number][]): ListNode | null {
  const dummy = new ListNode();
  let cur = dummy;
  for (const [timestamp, steps] of values) {
    cur.next = new ListNode(timestamp, steps);
    cur = cur.next;
  }
  return dummy.next;
}

function toList(head: ListNode | null): [number, number][] {
  const result: [number, number][] = [];
  let node = head;
  while (node !== null) {
    result.push([node.timestamp, node.steps]);
    node = node.next;
  }
  return result;
}

function mergeStepTimelines(
  headA: ListNode | null,
  headB: ListNode | null,
): ListNode | null {
  // TODO: implement
  return null;
}

type Case = [string, [number, number][], [number, number][], [number, number][]];

const cases: Case[] = [
  [
    "example 1",
    [[0, 0], [30, 1200], [60, 2500]],
    [[15, 600], [45, 1900]],
    [[0, 0], [15, 600], [30, 1200], [45, 1900], [60, 2500]],
  ],
  [
    "example 2: tie at timestamp 10",
    [[10, 500], [20, 1000]],
    [[10, 480], [25, 1100]],
    [[10, 500], [10, 480], [20, 1000], [25, 1100]],
  ],
  [
    "example 3: A empty",
    [],
    [[5, 200], [10, 450]],
    [[5, 200], [10, 450]],
  ],
  ["edge: both empty", [], [], []],
  [
    "edge: B empty",
    [[1, 10], [2, 20]],
    [],
    [[1, 10], [2, 20]],
  ],
];

for (const [name, aValues, bValues, expected] of cases) {
  const headA = buildList(aValues);
  const headB = buildList(bValues);
  const merged = mergeStepTimelines(headA, headB);
  const actual = toList(merged);
  const status =
    JSON.stringify(actual) === JSON.stringify(expected) ? "PASS" : "FAIL";
  console.log(
    `[${status}] ${name}: expected=${JSON.stringify(expected)} actual=${JSON.stringify(actual)}`,
  );
}
