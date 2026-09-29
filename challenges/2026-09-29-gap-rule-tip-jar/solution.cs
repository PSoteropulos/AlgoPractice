using System;
using System.Collections.Generic;

public class Solution
{
    public static long MaxTotalTips(List<int> tips, int d)
    {
        // TODO: implement
        return 0;
    }

    public static void Main(string[] args)
    {
        var tests = new List<(string Name, List<int> Tips, int D, long Expected)>
        {
            ("example 1", new List<int>{4, 1, 7, 3, 6}, 2, 17L),
            ("example 2", new List<int>{5, 10, 5, 10}, 3, 15L),
            ("example 3", new List<int>{-3, -1, -2}, 2, 0L),
            ("edge: d = 1 takes all positives", new List<int>{2, -1, 3}, 1, 5L),
            ("edge: d larger than n", new List<int>{9, 8, 7}, 5, 9L),
            ("edge: single negative", new List<int>{-5}, 1, 0L),
        };

        foreach (var (name, tips, d, expected) in tests)
        {
            long actual = MaxTotalTips(tips, d);
            string status = actual == expected ? "PASS" : "FAIL";
            Console.WriteLine($"[{status}] {name}: expected={expected} actual={actual}");
        }
    }
}
