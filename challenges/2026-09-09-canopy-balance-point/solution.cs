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

    // Returns (Value, Balance) of the min-balance node, first in pre-order on ties.
    public static (int Value, int Balance) FindMinBalanceNode(TreeNode root)
    {
        // TODO: implement
        return (0, 0);
    }

    public static void Main(string[] args)
    {
        var tests = new List<(int?[] Values, (int Value, int Balance) Expected)>
        {
            (new int?[] {4, 2, 7, 1, 3, 6, 9}, (1, 0)),
            (new int?[] {1, null, 2, null, 3}, (3, 0)),
            (new int?[] {5, 3, 3, 1, 1, 1, 1}, (5, 0)),
            (new int?[] {7}, (7, 0)),                          // extra: single node
            (new int?[] {1, 2, 100, null, 3}, (3, 0)),          // extra: winner is mid-traversal
        };

        foreach (var (values, expected) in tests)
        {
            var root = BuildTree(values);
            var got = FindMinBalanceNode(root);
            string status = got == expected ? "PASS" : "FAIL";
            Console.WriteLine($"{status} expected={expected} got={got}");
        }
    }
}
