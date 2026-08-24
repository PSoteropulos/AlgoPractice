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

function secondDeepestLevelSum(root: TreeNode | null): number {
  // TODO: implement
  return 0;
}

type Case = [(number | null)[], number];

const tests: Case[] = [
  [[1, 2, 3, 4, 5], 5],
  [[10], 0],
  [[1, 2, null, 3, null, 4, null], 3],
  [[], 0], // extra: empty tree
  [[5, 3, 8], 5], // extra: two levels, second-deepest is the root level
];

for (const [values, expected] of tests) {
  const root = buildTree(values);
  const got = secondDeepestLevelSum(root);
  const status = got === expected ? "PASS" : "FAIL";
  console.log(`${status} root=${JSON.stringify(values)} expected=${expected} got=${got}`);
}
