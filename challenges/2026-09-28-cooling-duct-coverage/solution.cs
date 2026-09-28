using System;
using System.Collections.Generic;

public class Solution
{
    public static long MaxDuctArea(List<int> heights)
    {
        // TODO: implement
        return 0;
    }

    public static void Main(string[] args)
    {
        var tests = new List<(string Name, List<int> Heights, long Expected)>
        {
            ("example 1", new List<int>{2, 1, 5, 6, 2, 3}, 10L),
            ("example 2", new List<int>{6, 2, 5, 4, 5, 1, 6}, 12L),
            ("example 3", new List<int>{3, 3, 3, 3}, 12L),
            ("edge: single rack", new List<int>{5}, 5L),
            ("edge: strictly increasing", new List<int>{1, 2, 3, 4, 5}, 9L),
        };

        foreach (var (name, heights, expected) in tests)
        {
            long actual = MaxDuctArea(heights);
            string status = actual == expected ? "PASS" : "FAIL";
            Console.WriteLine($"[{status}] {name}: expected={expected} actual={actual}");
        }
    }
}
