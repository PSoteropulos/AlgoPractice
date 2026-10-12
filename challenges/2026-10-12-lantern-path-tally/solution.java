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

    // Returns the number of parent-to-child walks whose values sum to target.
    public static int countDescendingWalks(TreeNode root, int target) {
        // TODO: implement
        return 0;
    }

    public static void main(String[] args) {
        List<Object[]> tests = new ArrayList<>();
        tests.add(new Object[]{new Integer[]{5, 3, -2, 2, 1, null, 4}, 5, 2});
        tests.add(new Object[]{new Integer[]{0, null, 0, null, 0}, 0, 6});
        tests.add(new Object[]{new Integer[]{2, -2, null, 2, null, -2}, 0, 4});
        tests.add(new Object[]{new Integer[]{}, 0, 0});                              // extra: empty tree
        tests.add(new Object[]{new Integer[]{7}, 7, 1});                             // extra: single node hit
        tests.add(new Object[]{new Integer[]{7}, 8, 0});                             // extra: single node miss
        tests.add(new Object[]{new Integer[]{1, 2, null, 3, null, 4}, 6, 1});        // extra: walk starts mid-path

        for (Object[] test : tests) {
            Integer[] values = (Integer[]) test[0];
            int target = (Integer) test[1];
            int expected = (Integer) test[2];
            TreeNode root = buildTree(values);
            int got = countDescendingWalks(root, target);
            String status = got == expected ? "PASS" : "FAIL";
            System.out.println(status + " root=" + Arrays.toString(values) + " target=" + target + " expected=" + expected + " got=" + got);
        }
    }
}
