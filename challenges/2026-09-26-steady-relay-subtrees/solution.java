import java.util.*;

public class solution {

    static class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
        TreeNode(int val) { this.val = val; }
    }

    // buildTree builds a tree from LeetCode-style compact level-order values.
    // A null entry represents a missing child.
    static TreeNode buildTree(Integer[] values) {
        if (values.length == 0 || values[0] == null) return null;
        TreeNode root = new TreeNode(values[0]);
        Deque<TreeNode> queue = new ArrayDeque<>();
        queue.add(root);
        int i = 1;
        while (!queue.isEmpty() && i < values.length) {
            TreeNode node = queue.poll();
            if (i < values.length) {
                Integer v = values[i++];
                if (v != null) {
                    node.left = new TreeNode(v);
                    queue.add(node.left);
                }
            }
            if (i < values.length) {
                Integer v = values[i++];
                if (v != null) {
                    node.right = new TreeNode(v);
                    queue.add(node.right);
                }
            }
        }
        return root;
    }

    // Returns the number of nodes whose subtree is k-steady.
    public static int countSteadySubtrees(TreeNode root, int k) {
        // TODO: implement
        return 0;
    }

    public static void main(String[] args) {
        List<Object[]> tests = new ArrayList<>();
        tests.add(new Object[]{new Integer[]{1, 2, 3, 4, null}, 1, 4});
        tests.add(new Object[]{new Integer[]{1, 2, 3, 4, null}, 0, 2});
        tests.add(new Object[]{new Integer[]{10, 5, 15, 3, 8, null, 20, 1}, 0, 3});
        tests.add(new Object[]{new Integer[]{}, 3, 0});                        // extra: empty tree
        tests.add(new Object[]{new Integer[]{5}, 0, 1});                       // extra: single node
        tests.add(new Object[]{new Integer[]{1, 2, null, 3, null}, 2, 3});     // extra: left-leaning chain

        for (Object[] test : tests) {
            Integer[] values = (Integer[]) test[0];
            int k = (int) test[1];
            int expected = (int) test[2];
            TreeNode root = buildTree(values);
            int got = countSteadySubtrees(root, k);
            String status = got == expected ? "PASS" : "FAIL";
            System.out.println(status + " root=" + Arrays.toString(values) + " k=" + k + " expected=" + expected + " got=" + got);
        }
    }
}
