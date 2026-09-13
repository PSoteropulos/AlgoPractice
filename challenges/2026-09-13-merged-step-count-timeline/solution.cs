using System;
using System.Collections.Generic;

public class ListNode
{
    public int Timestamp;
    public int Steps;
    public ListNode Next;
    public ListNode(int timestamp = 0, int steps = 0, ListNode next = null)
    {
        Timestamp = timestamp;
        Steps = steps;
        Next = next;
    }
}

public class Solution
{
    public static ListNode BuildList(List<(int Timestamp, int Steps)> values)
    {
        var dummy = new ListNode();
        var cur = dummy;
        foreach (var (timestamp, steps) in values)
        {
            cur.Next = new ListNode(timestamp, steps);
            cur = cur.Next;
        }
        return dummy.Next;
    }

    public static List<(int Timestamp, int Steps)> ToList(ListNode head)
    {
        var result = new List<(int, int)>();
        var node = head;
        while (node != null)
        {
            result.Add((node.Timestamp, node.Steps));
            node = node.Next;
        }
        return result;
    }

    public static ListNode MergeStepTimelines(ListNode headA, ListNode headB)
    {
        // TODO: implement
        return null;
    }

    private static string FormatPairs(List<(int, int)> pairs)
    {
        var parts = new List<string>();
        foreach (var (a, b) in pairs)
        {
            parts.Add($"({a}, {b})");
        }
        return "[" + string.Join(", ", parts) + "]";
    }

    public static void Main(string[] args)
    {
        var tests = new List<(string Name, List<(int, int)> A, List<(int, int)> B, List<(int, int)> Expected)>
        {
            ("example 1",
                new List<(int, int)> { (0, 0), (30, 1200), (60, 2500) },
                new List<(int, int)> { (15, 600), (45, 1900) },
                new List<(int, int)> { (0, 0), (15, 600), (30, 1200), (45, 1900), (60, 2500) }),
            ("example 2: tie at timestamp 10",
                new List<(int, int)> { (10, 500), (20, 1000) },
                new List<(int, int)> { (10, 480), (25, 1100) },
                new List<(int, int)> { (10, 500), (10, 480), (20, 1000), (25, 1100) }),
            ("example 3: A empty",
                new List<(int, int)>(),
                new List<(int, int)> { (5, 200), (10, 450) },
                new List<(int, int)> { (5, 200), (10, 450) }),
            ("edge: both empty",
                new List<(int, int)>(),
                new List<(int, int)>(),
                new List<(int, int)>()),
            ("edge: B empty",
                new List<(int, int)> { (1, 10), (2, 20) },
                new List<(int, int)>(),
                new List<(int, int)> { (1, 10), (2, 20) }),
        };

        foreach (var (name, a, b, expected) in tests)
        {
            var headA = BuildList(a);
            var headB = BuildList(b);
            var merged = MergeStepTimelines(headA, headB);
            var actual = ToList(merged);

            bool ok = actual.Count == expected.Count;
            if (ok)
            {
                for (int i = 0; i < actual.Count; i++)
                {
                    if (actual[i] != expected[i]) { ok = false; break; }
                }
            }
            string status = ok ? "PASS" : "FAIL";
            Console.WriteLine($"{status} {name}: expected={FormatPairs(expected)} actual={FormatPairs(actual)}");
        }
    }
}
