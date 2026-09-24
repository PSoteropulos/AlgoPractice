using System;
using System.Collections.Generic;

public class Solution
{
    public static int LongestBalancedStaffingWindow(List<int> changes)
    {
        // TODO: implement
        return 0;
    }

    public static void Main(string[] args)
    {
        var tests = new List<(string Name, List<int> Input, int Expected)>
        {
            ("example 1", new List<int>{3,-3,4,-2,2,-4}, 6),
            ("example 2", new List<int>{1,-1,1,-1,5}, 4),
            ("example 3", new List<int>{2,3,-1}, 0),
            ("edge: single zero", new List<int>{0}, 1),
            ("edge: no balance possible", new List<int>{1,2,3}, 0),
        };

        foreach (var (name, input, expected) in tests)
        {
            int got = LongestBalancedStaffingWindow(input);
            string status = got == expected ? "PASS" : "FAIL";
            Console.WriteLine($"[{status}] {name}: expected={expected} actual={got}");
        }
    }
}
