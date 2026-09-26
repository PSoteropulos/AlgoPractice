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

    // Returns the number of nodes whose subtree is k-steady.
    public static int CountSteadySubtrees(TreeNode root, int k)
    {
        // TODO: implement
        return 0;
    }

    public static void Main(string[] args)
    {
        var tests = new List<(int?[] Values, int K, int Expected)>
        {
            (new int?[] {1, 2, 3, 4, null}, 1, 4),
            (new int?[] {1, 2, 3, 4, null}, 0, 2),
            (new int?[] {10, 5, 15, 3, 8, null, 20, 1}, 0, 3),
            (new int?[] {}, 3, 0),                              // extra: empty tree
            (new int?[] {5}, 0, 1),                             // extra: single node
            (new int?[] {1, 2, null, 3, null}, 2, 3),           // extra: left-leaning chain
        };

        foreach (var (values, k, expected) in tests)
        {
            var root = BuildTree(values);
            var got = CountSteadySubtrees(root, k);
            string status = got == expected ? "PASS" : "FAIL";
            Console.WriteLine($"{status} k={k} expected={expected} got={got}");
        }
    }
}
