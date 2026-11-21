using System;

public class Solution
{
    public long MaxRouteEarnings(int[][] earnings, int moveCost)
    {
        // TODO: implement
        return -2;
    }

    public static void Main(string[] args)
    {
        var sol = new Solution();

        int wideM = 50000;
        int[][] wide = { new int[wideM], new int[wideM] };
        wide[0][0] = 100000;
        wide[1][wideM - 1] = 100000;

        int[][] tall = new int[100000][];
        for (int i = 0; i < tall.Length; i++) tall[i] = new[] { 100000 };

        var tests = new (string name, int[][] earnings, int moveCost, long expected)[]
        {
            ("example 1", new[] { new[] { 3, 1, 4 }, new[] { 1, 5, 1 }, new[] { 2, 1, 6 } }, 1, 13L),
            ("example 2", new[] { new[] { 10, 0, 0, 0, 9 }, new[] { 0, 0, 0, 0, 9 }, new[] { 10, 0, 0, 0, 0 } }, 3, 20L),
            ("example 3", new[] { new[] { -5 }, new[] { -2 }, new[] { 7 } }, 4, 0L),
            ("extra: free driving takes each day's max", new[] { new[] { 2, 9, 1, 0 }, new[] { 8, 0, 0, 3 } }, 0, 17L),
            ("extra: single all-negative day", new[] { new[] { -3, -1, -7 } }, 5, -1L),
            ("extra: wide street, long drive pays off", wide, 1, 150001L),
            ("extra: totals exceed 32-bit", tall, 7, 10000000000L),
        };

        foreach (var (name, earnings, moveCost, expected) in tests)
        {
            long got = sol.MaxRouteEarnings(earnings, moveCost);
            string status = got == expected ? "PASS" : "FAIL";
            Console.WriteLine($"{status} {name}: expected={expected} got={got}");
        }
    }
}
