class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val: number, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// buildTree builds a tree from LeetCode-style compact level-order values.
// A null entry represents a missing child.
function buildTree(values: (number | null)[]): TreeNode | null {
  if (values.length === 0 || values[0] === null) return null;
  const root = new TreeNode(values[0]);
  const queue: TreeNode[] = [root];
  let i = 1;
  while (queue.length > 0 && i < values.length) {
    const node = queue.shift()!;
    if (i < values.length) {
      const v = values[i++];
      if (v !== null) {
        node.left = new TreeNode(v);
        queue.push(node.left);
      }
    }
    if (i < values.length) {
      const v = values[i++];
      if (v !== null) {
        node.right = new TreeNode(v);
        queue.push(node.right);
      }
    }
  }
  return root;
}

// Counts non-root nodes whose value is strictly greater than the average of their ancestors.
function countStandouts(root: TreeNode | null): number {
  // TODO: implement
  return 0;
}

type Case = [(number | null)[], number];

const tests: Case[] = [
  [[10, 4, 12, 3, 5, 13, 20], 3],
  [[5, null, 6, null, 7], 2],
  [[2, 1, null, 1, null, 10], 1],
  [[7], 0],                        // extra: root alone is never a standout
  [[1, 9, null, 5], 1],            // extra: 5 equals avg(1, 9), not strictly greater
  [[0, 0, 0, 0], 0],               // extra: all zeros
];

for (const [values, expected] of tests) {
  const root = buildTree(values);
  const got = countStandouts(root);
  const status = got === expected ? "PASS" : "FAIL";
  console.log(`${status} root=${JSON.stringify(values)} expected=${expected} got=${got}`);
}
