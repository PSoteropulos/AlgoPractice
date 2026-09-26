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

// Returns the number of nodes whose subtree is k-steady.
function countSteadySubtrees(root: TreeNode | null, k: number): number {
  // TODO: implement
  return 0;
}

type Case = [(number | null)[], number, number];

const tests: Case[] = [
  [[1, 2, 3, 4, null], 1, 4],
  [[1, 2, 3, 4, null], 0, 2],
  [[10, 5, 15, 3, 8, null, 20, 1], 0, 3],
  [[], 3, 0],                       // extra: empty tree
  [[5], 0, 1],                      // extra: single node
  [[1, 2, null, 3, null], 2, 3],    // extra: left-leaning chain
];

for (const [values, k, expected] of tests) {
  const root = buildTree(values);
  const got = countSteadySubtrees(root, k);
  const status = got === expected ? "PASS" : "FAIL";
  console.log(`${status} root=${JSON.stringify(values)} k=${k} expected=${expected} got=${got}`);
}
