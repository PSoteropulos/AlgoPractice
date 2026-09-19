using System;
using System.Collections.Generic;

public class Solution
{
    public static int MaxWorkshops(List<int[]> workshops)
    {
        // TODO: implement
        return 0;
    }

    public static void Main(string[] args)
    {
        var tests = new List<(string Name, List<int[]> Input, int Expected)>
        {
            ("example 1", new List<int[]> { new[] { 2, 5 }, new[] { 3, 5 }, new[] { 4, 7 }, new[] { 5, 10 } }, 3),
            ("example 2", new List<int[]> { new[] { 4, 6 }, new[] { 5, 5 }, new[] { 2, 6 } }, 2),
            ("example 3", new List<int[]> { new[] { 10, 3 } }, 0),
            ("edge: tie deadlines both fit", new List<int[]> { new[] { 2, 4 }, new[] { 1, 4 } }, 2),
            ("edge: tie deadlines only one fits", new List<int[]> { new[] { 3, 4 }, new[] { 2, 4 } }, 1),
        };

        foreach (var (name, input, expected) in tests)
        {
            int got = MaxWorkshops(input);
            string status = got == expected ? "PASS" : "FAIL";
            Console.WriteLine($"[{status}] {name}: expected={expected} actual={got}");
        }
    }
}
