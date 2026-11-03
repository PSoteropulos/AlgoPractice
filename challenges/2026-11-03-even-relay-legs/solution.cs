using System;
using System.Linq;

public class Solution
{
    public int MinLongestLeg(int[] distances, int k)
    {
        // TODO: implement
        return 0;
    }

    public static void Main(string[] args)
    {
        var sol = new Solution();
        var tests = new (int[] distances, int k, int expected)[]
        {
            (new[] { 4, 9, 3, 6, 2, 8 }, 3, 13),
            (new[] { 5, 5, 5, 5 }, 2, 10),
            (new[] { 12, 1, 1 }, 3, 12),
            (new[] { 7 }, 1, 7), // extra: single checkpoint gap
            (new[] { 0, 0, 0 }, 2, 0), // extra: all zero gaps
            (new[] { 1, 2, 3, 4, 5 }, 1, 15), // extra: one runner takes everything
            (new[] { 3, 1, 4, 1, 5, 9, 2, 6 }, 8, 9), // extra: one gap per runner
            (Enumerable.Repeat(10000, 100000).ToArray(), 50000, 20000), // extra: large input
        };

        foreach (var (distances, k, expected) in tests)
        {
            int got = sol.MinLongestLeg(distances, k);
            string status = got == expected ? "PASS" : "FAIL";
            Console.WriteLine($"{status} n={distances.Length} k={k} expected={expected} got={got}");
        }
    }
}
