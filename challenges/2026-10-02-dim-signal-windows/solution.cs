using System;
using System.Collections.Generic;

public class Solution
{
    public static long CountDimWindows(int[] nums)
    {
        // TODO: implement
        return -1;
    }

    public static void Main(string[] args)
    {
        var tests = new List<(string Name, int[] Nums, long Expected)>
        {
            ("example 1", new[] {1, 2, 3}, 4),
            ("example 2", new[] {5, 5, 5}, 2),
            ("example 3", new[] {0, 0}, 3),
            ("edge: single power of two", new[] {4}, 1),
            ("edge: single value with three bits", new[] {7}, 0),
            ("edge: two readings", new[] {1, 3}, 2),
            ("edge: 200000 zeros need 64-bit count", new int[200000], 20000100000L),
        };

        foreach (var (name, nums, expected) in tests)
        {
            long actual = CountDimWindows((int[])nums.Clone());
            string status = actual == expected ? "PASS" : "FAIL";
            Console.WriteLine($"[{status}] {name}: expected={expected} actual={actual}");
        }
    }
}
