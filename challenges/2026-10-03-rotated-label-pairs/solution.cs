using System;
using System.Collections.Generic;

public class Solution
{
    public static long CountTwinPairs(string[] labels)
    {
        // TODO: implement
        return -1;
    }

    public static void Main(string[] args)
    {
        var big = new string[100000];
        Array.Fill(big, "a");

        var tests = new List<(string Name, string[] Labels, long Expected)>
        {
            ("example 1", new[] { "abc", "bca", "cab", "abd" }, 3L),
            ("example 2", new[] { "aab", "aba", "baa", "aab" }, 6L),
            ("example 3", new[] { "ab", "ba", "abc" }, 1L),
            ("edge: single label", new[] { "a" }, 0L),
            ("edge: no twins", new[] { "abc", "acb", "abd" }, 0L),
            ("edge: 100000 identical labels need 64-bit count", big, 4999950000L),
        };

        foreach (var t in tests)
        {
            long actual = CountTwinPairs((string[])t.Labels.Clone());
            string status = actual == t.Expected ? "PASS" : "FAIL";
            Console.WriteLine($"[{status}] {t.Name}: expected={t.Expected} actual={actual}");
        }
    }
}
