using System;
using System.Collections.Generic;
using System.Linq;

public class Solution
{
    public bool[] ReachableByTruck(int n, int[][] bridges, int[][] queries)
    {
        // TODO: implement
        return new bool[queries.Length];
    }

    public static void Main(string[] args)
    {
        var sol = new Solution();
        var chain = new int[99999][];
        for (int i = 0; i < chain.Length; i++) chain[i] = new[] { i, i + 1, 5 };

        var tests = new (string name, int n, int[][] bridges, int[][] queries, bool[] expected)[]
        {
            ("example 1", 5,
                new[] { new[] { 0, 1, 8 }, new[] { 1, 2, 5 }, new[] { 2, 3, 9 }, new[] { 3, 4, 2 } },
                new[] { new[] { 0, 2, 5 }, new[] { 0, 2, 6 }, new[] { 2, 4, 2 }, new[] { 2, 4, 3 }, new[] { 3, 3, 100 } },
                new[] { true, false, true, false, true }),
            ("example 2", 4,
                new[] { new[] { 0, 1, 3 }, new[] { 0, 1, 7 }, new[] { 2, 3, 4 } },
                new[] { new[] { 0, 1, 7 }, new[] { 0, 1, 8 }, new[] { 1, 2, 1 } },
                new[] { true, false, false }),
            ("example 3", 3, new int[0][], new[] { new[] { 0, 2, 1 }, new[] { 1, 1, 1 } }, new[] { false, true }),
            ("extra: single town", 1, new int[0][], new[] { new[] { 0, 0, 1 } }, new[] { true }),
            ("extra: large chain", 100000, chain,
                new[] { new[] { 0, 99999, 5 }, new[] { 0, 99999, 6 }, new[] { 50000, 50001, 1 } },
                new[] { true, false, true }),
        };

        foreach (var (name, n, bridges, queries, expected) in tests)
        {
            var got = sol.ReachableByTruck(n, bridges, queries);
            string status = got.SequenceEqual(expected) ? "PASS" : "FAIL";
            Console.WriteLine($"{status} {name}: expected=[{string.Join(",", expected.Take(5))}] got=[{string.Join(",", got.Take(5))}]");
        }
    }
}
