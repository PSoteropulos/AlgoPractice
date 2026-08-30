using System;
using System.Collections.Generic;

public class Solution
{
    public static int FindTier(int[] thresholds, int points)
    {
        // TODO: implement
        return -1;
    }

    public static void Main(string[] args)
    {
        var tests = new List<(int[] Thresholds, int Points, int Expected)>
        {
            (new[] {100, 250, 500, 1000}, 300, 1),
            (new[] {100, 250, 500, 1000}, 50, -1),
            (new[] {100, 250, 500, 1000}, 1000, 3),
            (new[] {100, 250, 500, 1000}, 249, 0),   // extra: just below the next threshold
            (new[] {5}, 5, 0),                        // extra: single-tier array, exact match
        };

        foreach (var (thresholds, points, expected) in tests)
        {
            int got = FindTier(thresholds, points);
            string status = got == expected ? "PASS" : "FAIL";
            Console.WriteLine($"{status} thresholds=[{string.Join(",", thresholds)}] points={points} expected={expected} got={got}");
        }
    }
}
