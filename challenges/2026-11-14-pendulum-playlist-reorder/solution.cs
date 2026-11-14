using System;
using System.Collections.Generic;
using System.Linq;

public class ListNode
{
    public int Val;
    public ListNode Next;
    public ListNode(int val = 0, ListNode next = null)
    {
        Val = val;
        Next = next;
    }
}

public class Solution
{
    public static ListNode BuildList(int[] values)
    {
        var dummy = new ListNode();
        var cur = dummy;
        foreach (var v in values)
        {
            cur.Next = new ListNode(v);
            cur = cur.Next;
        }
        return dummy.Next;
    }

    // limit guards against accidental cycles in the returned list.
    public static List<int> ToList(ListNode head, int limit)
    {
        var result = new List<int>();
        var node = head;
        while (node != null && result.Count < limit)
        {
            result.Add(node.Val);
            node = node.Next;
        }
        return result;
    }

    public static ListNode PendulumReorder(ListNode head, int k)
    {
        // TODO: implement
        return head;
    }

    public static void Main(string[] args)
    {
        var tests = new List<(string Name, int[] Values, int K, int[] Expected)>
        {
            ("example 1", new[] { 1, 2, 3, 4, 5, 6, 7 }, 2, new[] { 1, 2, 7, 6, 3, 4, 5 }),
            ("example 2", new[] { 1, 2, 3, 4, 5 }, 1, new[] { 1, 5, 2, 4, 3 }),
            ("example 3: k > n", new[] { 10, 20, 30 }, 5, new[] { 10, 20, 30 }),
            ("edge: single node", new[] { 42 }, 1, new[] { 42 }),
            ("edge: n=8, k=3, short final front block", new[] { 1, 2, 3, 4, 5, 6, 7, 8 }, 3,
                new[] { 1, 2, 3, 8, 7, 6, 4, 5 }),
            ("edge: duplicates and negatives", new[] { 5, -1, 5, 0, -1, 9, 9, 2, 3, 4 }, 4,
                new[] { 5, -1, 5, 0, 4, 3, 2, 9, -1, 9 }),
        };

        foreach (var (name, values, k, expected) in tests)
        {
            var result = PendulumReorder(BuildList(values), k);
            var actual = ToList(result, values.Length + 1);
            string status = actual.SequenceEqual(expected) ? "PASS" : "FAIL";
            Console.WriteLine($"[{status}] {name}: expected=[{string.Join(", ", expected)}] actual=[{string.Join(", ", actual)}]");
        }
    }
}
