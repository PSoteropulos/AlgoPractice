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

    public static int secondDeepestLevelSum(TreeNode root) {
        // TODO: implement
        return 0;
    }

    public static void main(String[] args) {
        List<Object[]> tests = new ArrayList<>();
        tests.add(new Object[]{new Integer[]{1, 2, 3, 4, 5}, 5});
        tests.add(new Object[]{new Integer[]{10}, 0});
        tests.add(new Object[]{new Integer[]{1, 2, null, 3, null, 4, null}, 3});
        tests.add(new Object[]{new Integer[]{}, 0});                 // extra: empty tree
        tests.add(new Object[]{new Integer[]{5, 3, 8}, 5});           // extra: two levels

        for (Object[] test : tests) {
            Integer[] values = (Integer[]) test[0];
            int expected = (int) test[1];
            TreeNode root = buildTree(values);
            int got = secondDeepestLevelSum(root);
            String status = got == expected ? "PASS" : "FAIL";
            System.out.println(status + " expected=" + expected + " got=" + got);
        }
    }
}
