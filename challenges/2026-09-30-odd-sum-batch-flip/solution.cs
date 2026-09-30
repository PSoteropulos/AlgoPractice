using System;
using System.Collections.Generic;

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

    public static List<int> ToList(ListNode head)
    {
        var result = new List<int>();
        for (var node = head; node != null; node = node.Next)
        {
            result.Add(node.Val);
        }
        return result;
    }

    public static ListNode FlipOddBatches(ListNode head, int k)
    {
        // TODO: implement
        return null;
    }

    public static void Main(string[] args)
    {
        var tests = new List<(string Name, int[] Values, int K, int[] Expected)>
        {
            ("example 1", new[] {1, 2, 3, 4, 5, 6}, 3, new[] {1, 2, 3, 6, 5, 4}),
            ("example 2", new[] {2, 7, 4, 2, 8, 5, 9}, 2, new[] {7, 2, 4, 2, 5, 8, 9}),
            ("example 3: fewer than k nodes", new[] {5, 3, 1}, 4, new[] {5, 3, 1}),
            ("edge: empty list", new int[0], 2, new int[0]),
            ("edge: k = 1 never changes anything", new[] {1, 2, 3}, 1, new[] {1, 2, 3}),
            ("edge: whole list is one odd batch", new[] {1, 2, 4}, 3, new[] {4, 2, 1}),
            ("edge: all even sums", new[] {0, 0, 0, 0}, 2, new[] {0, 0, 0, 0}),
            ("edge: consecutive odd batches", new[] {1, 2, 3, 4, 5, 6}, 2, new[] {2, 1, 4, 3, 6, 5}),
        };

        foreach (var (name, values, k, expected) in tests)
        {
            var actual = ToList(FlipOddBatches(BuildList(values), k));
            string status = actual.ToArray().AsSpan().SequenceEqual(expected) ? "PASS" : "FAIL";
            Console.WriteLine($"[{status}] {name}: expected=[{string.Join(", ", expected)}] actual=[{string.Join(", ", actual)}]");
        }
    }
}
