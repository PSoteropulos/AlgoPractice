using System;
using System.Collections.Generic;

public class Solution
{
    public static (int Count, int MaxCompliant) CapCompliance(int cap, int[] powers)
    {
        // TODO: implement
        return (0, -1);
    }

    public static void Main(string[] args)
    {
        var tests = new List<(string Name, int Cap, int[] Powers, (int, int) Expected)>
        {
            ("example 1", 6, new[]{2, 4, 6, 7, 1}, (3, 6)),
            ("example 2", 0, new[]{0, 0, 0}, (3, 0)),
            ("example 3", 5, new[]{8, 16}, (0, -1)),
            ("edge: single drone equal to cap", 9, new[]{9}, (1, 9)),
            ("edge: even cap excludes bit 0", 1_000_000_000, new[]{0, 1}, (1, 0)),
        };

        foreach (var (name, cap, powers, expected) in tests)
        {
            var got = CapCompliance(cap, powers);
            string status = got == expected ? "PASS" : "FAIL";
            Console.WriteLine($"[{status}] {name}: expected={expected} actual={got}");
        }
    }
}
