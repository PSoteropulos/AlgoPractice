using System;
using System.Collections.Generic;
using System.Linq;

public class Solution
{
    public IList<int> RedundantTrails(int n, int[][] trails)
    {
        // TODO: implement
        return new List<int> { -1 };
    }

    public static void Main(string[] args)
    {
        var sol = new Solution();
        int bigN = 100000;
        var bigTrails = new int[bigN][];
        for (int i = 0; i < bigN - 1; i++) bigTrails[i] = new[] { i, i + 1 };
        bigTrails[bigN - 1] = new[] { bigN - 1, 0 };

        var tests = new (string name, int n, int[][] trails, int[] expected)[]
        {
            ("example 1", 4, new[] { new[] {0, 1}, new[] {1, 2}, new[] {0, 2}, new[] {3, 3}, new[] {2, 3} }, new[] {2, 3}),
            ("example 2", 3, new[] { new[] {0, 1}, new[] {1, 0}, new[] {0, 1} }, new[] {1, 2}),
            ("example 3", 6, new[] { new[] {0, 1}, new[] {2, 3}, new[] {4, 5}, new[] {1, 2}, new[] {3, 4} }, new int[0]),
            ("extra: no trails", 5, new int[0][], new int[0]),
            ("extra: single clearing, only loops", 1, new[] { new[] {0, 0}, new[] {0, 0} }, new[] {0, 1}),
            ("extra: cycle closed by last trail", 5, new[] { new[] {0, 1}, new[] {2, 3}, new[] {3, 4}, new[] {1, 2}, new[] {4, 0} }, new[] {4}),
            ("extra: long path then closing trail", bigN, bigTrails, new[] {bigN - 1}),
        };

        foreach (var (name, n, trails, expected) in tests)
        {
            var got = sol.RedundantTrails(n, trails);
            string status = got.SequenceEqual(expected) ? "PASS" : "FAIL";
            Console.WriteLine($"{status} {name}: expected=[{string.Join(",", expected)}] got=[{string.Join(",", got)}]");
        }
    }
}
