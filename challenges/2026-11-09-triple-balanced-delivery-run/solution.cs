using System;
using System.Collections.Generic;

public class Solution
{
    public int LongestBalancedRun(string log)
    {
        // TODO: implement
        return -1;
    }

    public static void Main(string[] args)
    {
        var sol = new Solution();
        var tests = new (string name, string log, int expected)[]
        {
            ("example 1", "AAABCCB", 6),
            ("example 2", "AABBAC", 3),
            ("example 3", "AAAB", 0),
            ("extra: single char", "A", 0),
            ("extra: exactly one of each", "ABC", 3),
            ("extra: balanced in the middle", "CBACBAAAB", 6),
            ("extra: only one category", "AAAAA", 0),
        };

        foreach (var (name, log, expected) in tests)
        {
            int got = sol.LongestBalancedRun(log);
            string status = got == expected ? "PASS" : "FAIL";
            Console.WriteLine($"{status} {name}: expected={expected} got={got}");
        }
    }
}
