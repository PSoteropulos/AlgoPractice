using System;
using System.Linq;

public class Solution
{
    public long CountCalmStretches(int[] readings, int tolerance)
    {
        // TODO: implement
        return -1;
    }

    public static void Main(string[] args)
    {
        var sol = new Solution();
        var tests = new (string name, int[] r, int t, long expected)[]
        {
            ("example 1", new[] { 1, 3, 2, 5 }, 1, 5L),
            ("example 2", new[] { 4, 4, 4 }, 0, 6L),
            ("example 3", new[] { 2, 5, 3, 4, 8 }, 2, 8L),
            ("extra: single reading", new[] { 10 }, 0, 1L),
            ("extra: huge tolerance", new[] { 1, 1000000000, 5 }, 1000000000, 6L),
            ("extra: increasing", new[] { 1, 2, 3, 4, 5 }, 1, 9L),
            ("extra: large uniform", Enumerable.Repeat(1, 100000).ToArray(), 0, 5000050000L),
        };

        foreach (var (name, r, t, expected) in tests)
        {
            long got = sol.CountCalmStretches(r, t);
            string status = got == expected ? "PASS" : "FAIL";
            Console.WriteLine($"{status} {name}: expected={expected} got={got}");
        }
    }
}
