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

    // Returns {value, balance} of the min-balance node, first in pre-order on ties.
    public static int[] findMinBalanceNode(TreeNode root) {
        // TODO: implement
        return new int[]{0, 0};
    }

    public static void main(String[] args) {
        List<Object[]> tests = new ArrayList<>();
        tests.add(new Object[]{new Integer[]{4, 2, 7, 1, 3, 6, 9}, new int[]{1, 0}});
        tests.add(new Object[]{new Integer[]{1, null, 2, null, 3}, new int[]{3, 0}});
        tests.add(new Object[]{new Integer[]{5, 3, 3, 1, 1, 1, 1}, new int[]{5, 0}});
        tests.add(new Object[]{new Integer[]{7}, new int[]{7, 0}});                              // extra: single node
        tests.add(new Object[]{new Integer[]{1, 2, 100, null, 3}, new int[]{3, 0}});             // extra: winner is mid-traversal

        for (Object[] test : tests) {
            Integer[] values = (Integer[]) test[0];
            int[] expected = (int[]) test[1];
            TreeNode root = buildTree(values);
            int[] got = findMinBalanceNode(root);
            String status = Arrays.equals(got, expected) ? "PASS" : "FAIL";
            System.out.println(status + " expected=" + Arrays.toString(expected) + " got=" + Arrays.toString(got));
        }
    }
}
