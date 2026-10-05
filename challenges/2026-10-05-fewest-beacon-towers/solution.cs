using System;
using System.Collections.Generic;

public class Solution
{
    public static int FewestBeaconTowers(int[] houses, int r)
    {
        // TODO: implement
        return 0;
    }

    public static void Main(string[] args)
    {
        var tests = new List<(string Name, int[] Houses, int R, int Expected)>
        {
            ("example 1", new[] { 1, 2, 3, 4, 5 }, 1, 2),
            ("example 2", new[] { 1, 5, 9 }, 2, 3),
            ("example 3", new[] { 7, 3, 1, 10, 4, 12, 8 }, 3, 2),
            ("edge: single house", new[] { 42 }, 0, 1),
            ("edge: duplicates, r=0", new[] { 5, 5, 5 }, 0, 1),
            ("edge: r=0 distinct", new[] { 3, 1, 2 }, 0, 3),
            ("edge: large values", new[] { 1000000000, 0, 500000000 }, 1000000000, 1),
        };

        foreach (var t in tests)
        {
            int actual = FewestBeaconTowers((int[])t.Houses.Clone(), t.R);
            string status = actual == t.Expected ? "PASS" : "FAIL";
            Console.WriteLine($"[{status}] {t.Name}: expected={t.Expected} actual={actual}");
        }
    }
}
