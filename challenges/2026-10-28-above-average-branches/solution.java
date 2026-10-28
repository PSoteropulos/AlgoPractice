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

    // Counts non-root nodes whose value is strictly greater than the average of their ancestors.
    public static int countStandouts(TreeNode root) {
        // TODO: implement
        return 0;
    }

    public static void main(String[] args) {
        List<Object[]> tests = new ArrayList<>();
        tests.add(new Object[]{new Integer[]{10, 4, 12, 3, 5, 13, 20}, 3});
        tests.add(new Object[]{new Integer[]{5, null, 6, null, 7}, 2});
        tests.add(new Object[]{new Integer[]{2, 1, null, 1, null, 10}, 1});
        tests.add(new Object[]{new Integer[]{7}, 0});                       // extra: root alone is never a standout
        tests.add(new Object[]{new Integer[]{1, 9, null, 5}, 1});           // extra: 5 equals avg(1, 9), not strictly greater
        tests.add(new Object[]{new Integer[]{0, 0, 0, 0}, 0});              // extra: all zeros

        for (Object[] test : tests) {
            Integer[] values = (Integer[]) test[0];
            int expected = (Integer) test[1];
            TreeNode root = buildTree(values);
            int got = countStandouts(root);
            String status = got == expected ? "PASS" : "FAIL";
            System.out.println(status + " expected=" + expected + " got=" + got);
        }
    }
}
