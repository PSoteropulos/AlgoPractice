using System;
using System.Linq;

public class Solution
{
    public static int MinExtraTunnels(int n, int[][] tunnels)
    {
        // TODO: implement
        return 0;
    }

    public static void Main()
    {
        var tests = new (int n, int[][] tunnels, int expected)[]
        {
            (5, new int[][] { new[] { 0, 1 }, new[] { 0, 2 }, new[] { 0, 3 }, new[] { 0, 4 } }, 2),
            (6, new int[][] { new[] { 0, 1 }, new[] { 1, 2 }, new[] { 2, 0 }, new[] { 2, 3 }, new[] { 3, 4 }, new[] { 3, 5 } }, 2),
            (4, new int[][] { new[] { 0, 1 }, new[] { 1, 2 }, new[] { 2, 3 }, new[] { 3, 0 } }, 0),
            (1, new int[0][], 0), // extra: single chamber
            (3, new int[][] { new[] { 0, 1 }, new[] { 0, 1 }, new[] { 1, 2 } }, 1), // extra: parallel tunnels, one fragile
            (6, new int[][] { new[] { 0, 1 }, new[] { 1, 2 }, new[] { 2, 0 }, new[] { 2, 3 }, new[] { 3, 4 }, new[] { 4, 5 }, new[] { 5, 3 } }, 1), // extra: two loops joined by a bridge
            (6, new int[][] { new[] { 0, 1 }, new[] { 1, 2 }, new[] { 2, 3 }, new[] { 3, 4 }, new[] { 4, 5 } }, 1), // extra: path of six
        };

        foreach (var (n, tunnels, expected) in tests)
        {
            int got = MinExtraTunnels(n, tunnels);
            string status = got == expected ? "PASS" : "FAIL";
            string shown = "[" + string.Join(",", tunnels.Select(t => "[" + string.Join(",", t) + "]")) + "]";
            Console.WriteLine($"{status} n={n} tunnels={shown} expected={expected} got={got}");
        }
    }
}
