using System;
using System.Collections.Generic;
using System.Linq;

public class ListNode
{
    public int val;
    public ListNode next;
    public ListNode(int val = 0, ListNode next = null)
    {
        this.val = val;
        this.next = next;
    }
}

public class Solution
{
    public static ListNode BuildList(int[] values)
    {
        var dummy = new ListNode(0);
        var cur = dummy;
        foreach (var v in values)
        {
            cur.next = new ListNode(v);
            cur = cur.next;
        }
        return dummy.next;
    }

    public static int[] ToArray(ListNode head)
    {
        var list = new List<int>();
        while (head != null)
        {
            list.Add(head.val);
            head = head.next;
        }
        return list.ToArray();
    }

    public static ListNode RidgeLineSorter(ListNode head)
    {
        // TODO: implement
        return null;
    }

    private static string Fmt(int[] a) => "[" + string.Join(",", a) + "]";

    public static void Main()
    {
        var cases = new (string Name, int[] Values, int[] Expected)[]
        {
            ("example 1", new int[] { 1, 4, 6, 5, 2 }, new int[] { 1, 2, 4, 5, 6 }),
            ("example 2", new int[] { 3, 3, 7, 7, 7, 1, 1 }, new int[] { 1, 1, 3, 3, 7, 7, 7 }),
            ("example 3", new int[] { 9, 8, 5 }, new int[] { 5, 8, 9 }),
            ("edge: empty list", new int[] {  }, new int[] {  }),
            ("edge: single node", new int[] { 5 }, new int[] { 5 }),
            ("edge: already ascending", new int[] { 1, 2, 3 }, new int[] { 1, 2, 3 }),
            ("edge: all equal", new int[] { 2, 2, 2 }, new int[] { 2, 2, 2 }),
            ("edge: negatives and plateau at peak", new int[] { -4, 1, 5, 5, 3, 3, 0, -4, -9 }, new int[] { -9, -4, -4, 0, 1, 3, 3, 5, 5 }),
        };

        foreach (var t in cases)
        {
            int[] actual = ToArray(RidgeLineSorter(BuildList(t.Values)));
            string status = actual.SequenceEqual(t.Expected) ? "PASS" : "FAIL";
            Console.WriteLine($"[{status}] {t.Name}: expected={Fmt(t.Expected)} actual={Fmt(actual)}");
        }
    }
}
