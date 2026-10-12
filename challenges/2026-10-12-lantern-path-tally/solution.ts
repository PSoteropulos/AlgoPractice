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

// Returns the number of parent-to-child walks whose values sum to target.
function countDescendingWalks(root: TreeNode | null, target: number): number {
  // TODO: implement
  return 0;
}

type Case = [(number | null)[], number, number];

const tests: Case[] = [
  [[5, 3, -2, 2, 1, null, 4], 5, 2],
  [[0, null, 0, null, 0], 0, 6],
  [[2, -2, null, 2, null, -2], 0, 4],
  [[], 0, 0],                                // extra: empty tree
  [[7], 7, 1],                               // extra: single node hit
  [[7], 8, 0],                               // extra: single node miss
  [[1, 2, null, 3, null, 4], 6, 1],          // extra: walk starts mid-path
];

for (const [values, target, expected] of tests) {
  const root = buildTree(values);
  const got = countDescendingWalks(root, target);
  const status = got === expected ? "PASS" : "FAIL";
  console.log(`${status} root=${JSON.stringify(values)} target=${target} expected=${expected} got=${got}`);
}
