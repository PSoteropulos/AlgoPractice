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

    public static int MirrorCarWeight(ListNode head, int k)
    {
        // TODO: implement
        return -1;
    }

    public static void Main(string[] args)
    {
        var tests = new List<(int[] Values, int K, int Expected)>
        {
            (new[] {10, 20, 30, 40, 50}, 2, 40),
            (new[] {9}, 1, 9),
            (new[] {3, 6, 9}, 5, -1),
            (new[] {7, 14}, 1, 14),       // extra: mirror maps to the last car
            (new[] {1, 2, 3, 4}, 4, 1),   // extra: k equals n, mirror maps to the first car
        };

        foreach (var (values, k, expected) in tests)
        {
            var head = BuildList(values);
            int got = MirrorCarWeight(head, k);
            string status = got == expected ? "PASS" : "FAIL";
            Console.WriteLine($"{status} cars=[{string.Join(",", values)}] k={k} expected={expected} got={got}");
        }
    }
}
