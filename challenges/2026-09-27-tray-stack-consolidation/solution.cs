using System;
using System.Collections.Generic;

public class Solution
{
    public static long MinConsolidationEffort(List<int> heights)
    {
        // TODO: implement
        return 0;
    }

    public static void Main(string[] args)
    {
        var tests = new List<(string Name, List<int> Heights, long Expected)>
        {
            ("example 1", new List<int>{4, 3, 2, 6}, 29L),
            ("example 2", new List<int>{1, 8, 3, 5}, 30L),
            ("example 3", new List<int>{7}, 0L),
            ("edge: no stacks at all", new List<int>(), 0L),
            ("edge: exactly two stacks", new List<int>{2, 9}, 11L),
        };

        foreach (var (name, heights, expected) in tests)
        {
            long actual = MinConsolidationEffort(heights);
            string status = actual == expected ? "PASS" : "FAIL";
            Console.WriteLine($"[{status}] {name}: expected={expected} actual={actual}");
        }
    }
}
