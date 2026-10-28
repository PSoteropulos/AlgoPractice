using System;
using System.Collections.Generic;

public class TreeNode
{
    public int Val;
    public TreeNode Left;
    public TreeNode Right;
    public TreeNode(int val = 0, TreeNode left = null, TreeNode right = null)
    {
        Val = val;
        Left = left;
        Right = right;
    }
}

public class Solution
{
    // BuildTree builds a tree from LeetCode-style compact level-order values.
    // A null entry represents a missing child.
    public static TreeNode BuildTree(int?[] values)
    {
        if (values.Length == 0 || values[0] == null) return null;
        var root = new TreeNode(values[0].Value);
        var queue = new Queue<TreeNode>();
        queue.Enqueue(root);
        int i = 1;
        while (queue.Count > 0 && i < values.Length)
        {
            var node = queue.Dequeue();
            if (i < values.Length)
            {
                var v = values[i++];
                if (v != null)
                {
                    node.Left = new TreeNode(v.Value);
                    queue.Enqueue(node.Left);
                }
            }
            if (i < values.Length)
            {
                var v = values[i++];
                if (v != null)
                {
                    node.Right = new TreeNode(v.Value);
                    queue.Enqueue(node.Right);
                }
            }
        }
        return root;
    }

    // Counts non-root nodes whose value is strictly greater than the average of their ancestors.
    public static int CountStandouts(TreeNode root)
    {
        // TODO: implement
        return 0;
    }

    public static void Main(string[] args)
    {
        var tests = new List<(int?[] Values, int Expected)>
        {
            (new int?[] {10, 4, 12, 3, 5, 13, 20}, 3),
            (new int?[] {5, null, 6, null, 7}, 2),
            (new int?[] {2, 1, null, 1, null, 10}, 1),
            (new int?[] {7}, 0),                       // extra: root alone is never a standout
            (new int?[] {1, 9, null, 5}, 1),           // extra: 5 equals avg(1, 9), not strictly greater
            (new int?[] {0, 0, 0, 0}, 0),              // extra: all zeros
        };

        foreach (var (values, expected) in tests)
        {
            var root = BuildTree(values);
            var got = CountStandouts(root);
            string status = got == expected ? "PASS" : "FAIL";
            Console.WriteLine($"{status} expected={expected} got={got}");
        }
    }
}
