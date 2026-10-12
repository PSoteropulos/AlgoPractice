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

    // Returns the number of parent-to-child walks whose values sum to target.
    public static int CountDescendingWalks(TreeNode root, int target)
    {
        // TODO: implement
        return 0;
    }

    public static void Main(string[] args)
    {
        var tests = new List<(int?[] Values, int Target, int Expected)>
        {
            (new int?[] {5, 3, -2, 2, 1, null, 4}, 5, 2),
            (new int?[] {0, null, 0, null, 0}, 0, 6),
            (new int?[] {2, -2, null, 2, null, -2}, 0, 4),
            (new int?[] {}, 0, 0),                              // extra: empty tree
            (new int?[] {7}, 7, 1),                             // extra: single node hit
            (new int?[] {7}, 8, 0),                             // extra: single node miss
            (new int?[] {1, 2, null, 3, null, 4}, 6, 1),        // extra: walk starts mid-path
        };

        foreach (var (values, target, expected) in tests)
        {
            var root = BuildTree(values);
            int got = CountDescendingWalks(root, target);
            string status = got == expected ? "PASS" : "FAIL";
            Console.WriteLine($"{status} target={target} expected={expected} got={got}");
        }
    }
}
