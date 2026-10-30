using System;
using System.Linq;

public class Solution
{
    public long CountLanternRows(int[] heights)
    {
        // TODO: implement
        return 0;
    }

    public static void Main(string[] args)
    {
        var sol = new Solution();
        var tests = new (int[] heights, long expected)[]
        {
            (new[] { 3, 1, 3 }, 4),
            (new[] { 1, 4, 3, 3, 2 }, 6),
            (new[] { 5, 1, 6, 5 }, 4),
            (new[] { 7 }, 1),                        // extra: single lantern
            (new[] { 4, 4, 1, 4, 4 }, 11),           // extra: repeated maxima around a dip
            (new[] { 2, 2, 2 }, 6),                  // extra: all equal -> n(n+1)/2
            (Enumerable.Repeat(1, 100000).ToArray(), 5000050000L), // extra: needs 64-bit
        };

        foreach (var (heights, expected) in tests)
        {
            long got = sol.CountLanternRows(heights);
            string status = got == expected ? "PASS" : "FAIL";
            Console.WriteLine($"{status} n={heights.Length} expected={expected} got={got}");
        }
    }
}
