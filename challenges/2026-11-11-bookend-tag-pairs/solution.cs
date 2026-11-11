using System;
using System.Collections.Generic;
using System.Linq;

public class Solution
{
    public long CountBookendPairs(string[] tags)
    {
        // TODO: implement
        return -1;
    }

    public static void Main(string[] args)
    {
        var sol = new Solution();
        var tests = new (string name, string[] tags, long expected)[]
        {
            ("example 1", new[] { "a", "aba", "ababa", "aa" }, 4L),
            ("example 2", new[] { "xyz", "xyzxy", "xy", "xyzxy" }, 2L),
            ("example 3", new[] { "ab", "b", "ba", "abab" }, 1L),
            ("extra: single tag", new[] { "zzz" }, 0L),
            ("extra: longer before shorter", new[] { "aa", "a" }, 0L),
            ("extra: nested bookends", new[] { "a", "aa", "aaa", "aaaa" }, 6L),
            ("extra: 100000 identical tags", Enumerable.Repeat("q", 100000).ToArray(), 4999950000L),
        };

        foreach (var (name, tags, expected) in tests)
        {
            long got = sol.CountBookendPairs((string[])tags.Clone());
            string status = got == expected ? "PASS" : "FAIL";
            Console.WriteLine($"{status} {name}: expected={expected} got={got}");
        }
    }
}
