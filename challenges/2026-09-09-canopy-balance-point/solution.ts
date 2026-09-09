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

// Returns [value, balance] of the min-balance node, first in pre-order on ties.
function findMinBalanceNode(root: TreeNode | null): [number, number] {
  // TODO: implement
  return [0, 0];
}

type Case = [(number | null)[], [number, number]];

const tests: Case[] = [
  [[4, 2, 7, 1, 3, 6, 9], [1, 0]],
  [[1, null, 2, null, 3], [3, 0]],
  [[5, 3, 3, 1, 1, 1, 1], [5, 0]],
  [[7], [7, 0]],                          // extra: single node
  [[1, 2, 100, null, 3], [3, 0]],         // extra: winner is mid-traversal
];

for (const [values, expected] of tests) {
  const root = buildTree(values);
  const got = findMinBalanceNode(root);
  const status = got[0] === expected[0] && got[1] === expected[1] ? "PASS" : "FAIL";
  console.log(`${status} root=${JSON.stringify(values)} expected=${JSON.stringify(expected)} got=${JSON.stringify(got)}`);
}
