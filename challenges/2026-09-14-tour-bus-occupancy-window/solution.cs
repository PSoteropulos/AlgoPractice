using System;
using System.Collections.Generic;

public class Solution
{
    public static int LongestSteadyWindow(int[] occupancy, int tolerance, int minPeak)
    {
        // TODO: implement
        return 0;
    }

    public static void Main(string[] args)
    {
        var tests = new List<(string Name, int[] Occupancy, int Tolerance, int MinPeak, int Expected)>
        {
            ("example 1", new int[]{4,6,5,7,9,8,3}, 3, 8, 3),
            ("example 2", new int[]{2,2,2,2}, 0, 5, 0),
            ("example 3", new int[]{10,10,10,10,10}, 0, 10, 5),
            ("edge: single element meets peak", new int[]{5}, 0, 5, 1),
            ("edge: single element below peak", new int[]{5}, 0, 6, 0),
        };

        foreach (var (name, occupancy, tolerance, minPeak, expected) in tests)
        {
            int got = LongestSteadyWindow(occupancy, tolerance, minPeak);
            string status = got == expected ? "PASS" : "FAIL";
            Console.WriteLine($"[{status}] {name}: expected={expected} actual={got}");
        }
    }
}
