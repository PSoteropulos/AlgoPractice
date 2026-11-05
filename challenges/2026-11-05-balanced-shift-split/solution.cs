using System;
using System.Linq;

public class Solution
{
    public long MinSplitCost(int[] weights, int k)
    {
        // TODO: implement
        return -1;
    }

    public static void Main(string[] args)
    {
        var sol = new Solution();
        var tests = new (string name, int[] w, int k, long expected)[]
        {
            ("example 1", new[] { 1, 2, 3, 4 }, 2, 52L),
            ("example 2", new[] { 3, 1, 4, 1, 5 }, 3, 66L),
            ("example 3", new[] { 0, 0, 5 }, 3, 25L),
            ("extra: single crate", new[] { 7 }, 1, 49L),
            ("extra: k = n", new[] { 1, 2, 3, 4 }, 4, 30L),
            ("extra: k = 1", new[] { 1, 2, 3, 4 }, 1, 100L),
            ("extra: large uniform", Enumerable.Repeat(1, 20000).ToArray(), 100, 4000000L),
        };

        foreach (var (name, w, k, expected) in tests)
        {
            long got = sol.MinSplitCost(w, k);
            string status = got == expected ? "PASS" : "FAIL";
            Console.WriteLine($"{status} {name}: expected={expected} got={got}");
        }
    }
}
