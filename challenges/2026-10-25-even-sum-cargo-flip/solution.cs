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

    public static int[] ToArray(ListNode head)
    {
        var list = new List<int>();
        for (var n = head; n != null; n = n.Next) list.Add(n.Val);
        return list.ToArray();
    }

    public static ListNode ReverseEvenSumGroups(ListNode head, int k)
    {
        // TODO: implement
        return null;
    }

    public static void Main(string[] args)
    {
        var tests = new List<(int[] Values, int K, int[] Expected)>
        {
            (new[] {2, 4, 1, 2, 3, 5, 7}, 2, new[] {4, 2, 1, 2, 5, 3, 7}),
            (new[] {1, 2, 4, 6, 2, 2, 9, 9}, 3, new[] {1, 2, 4, 2, 2, 6, 9, 9}),
            (new[] {1, 2, 3, 4, 5, 6, 7, 8}, 4, new[] {4, 3, 2, 1, 8, 7, 6, 5}),
            (new[] {1, 3}, 2, new[] {3, 1}), // extra: single even batch
            (new[] {1, 2}, 2, new[] {1, 2}), // extra: single odd batch
            (new[] {2, 2}, 3, new[] {2, 2}), // extra: k exceeds n, nothing changes
            (new[] {3, 4, 5}, 1, new[] {3, 4, 5}), // extra: k = 1 changes nothing
        };

        foreach (var (values, k, expected) in tests)
        {
            int[] got = ToArray(ReverseEvenSumGroups(BuildList(values), k));
            string status = got.SequenceEqual(expected) ? "PASS" : "FAIL";
            Console.WriteLine($"{status} crates=[{string.Join(",", values)}] k={k} expected=[{string.Join(",", expected)}] got=[{string.Join(",", got)}]");
        }
    }
}
