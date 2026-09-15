using System;
using System.Collections.Generic;

public class Solution
{
    public static int MinMaxLoad(int[] hourly, int shifts)
    {
        // TODO: implement
        return 0;
    }

    public static void Main(string[] args)
    {
        var tests = new List<(string Name, int[] Hourly, int Shifts, int Expected)>
        {
            ("example 1", new int[]{10,20,30,40}, 2, 60),
            ("example 2", new int[]{5,5,5,5,5,5}, 3, 10),
            ("example 3", new int[]{3,1,4}, 1, 8),
            ("edge: shifts equals length", new int[]{7,2,9}, 3, 9),
            ("edge: single hour", new int[]{42}, 1, 42),
        };

        foreach (var (name, hourly, shifts, expected) in tests)
        {
            int got = MinMaxLoad(hourly, shifts);
            string status = got == expected ? "PASS" : "FAIL";
            Console.WriteLine($"[{status}] {name}: expected={expected} actual={got}");
        }
    }
}
