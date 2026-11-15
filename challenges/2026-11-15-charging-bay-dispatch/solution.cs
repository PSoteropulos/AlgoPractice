using System;
using System.Collections.Generic;
using System.Linq;

public class Solution
{
    public int[][] AssignBays(int[][] vehicles, int m)
    {
        // TODO: implement
        return new int[0][];
    }

    private static bool SameResult(int[][] a, int[][] b)
    {
        if (a == null || a.Length != b.Length) return false;
        for (int i = 0; i < a.Length; i++)
        {
            if (a[i] == null || a[i].Length != 2 || a[i][0] != b[i][0] || a[i][1] != b[i][1]) return false;
        }
        return true;
    }

    private static string Show(int[][] r) =>
        r == null ? "null" : "[" + string.Join(",", r.Select(p => p == null ? "null" : "[" + string.Join(",", p) + "]")) + "]";

    public static void Main(string[] args)
    {
        var sol = new Solution();
        int[][] many = Enumerable.Range(0, 100000).Select(_ => new[] { 0, 1 }).ToArray();
        int[][] manyExpected = Enumerable.Range(0, 100000).Select(i => new[] { 0, i + 1 }).ToArray();

        var tests = new (string name, int[][] vehicles, int m, int[][] expected)[]
        {
            ("example 1", new[] { new[] { 0, 5 }, new[] { 1, 2 }, new[] { 1, 1 }, new[] { 2, 3 }, new[] { 6, 1 } }, 2,
                new[] { new[] { 0, 5 }, new[] { 1, 4 }, new[] { 1, 2 }, new[] { 1, 7 }, new[] { 0, 7 } }),
            ("example 2", new[] { new[] { 3, 2 }, new[] { 0, 4 }, new[] { 2, 2 }, new[] { 4, 1 } }, 1,
                new[] { new[] { 0, 9 }, new[] { 0, 4 }, new[] { 0, 7 }, new[] { 0, 5 } }),
            ("example 3", new[] { new[] { 0, 4 }, new[] { 0, 4 }, new[] { 2, 1 }, new[] { 3, 2 } }, 3,
                new[] { new[] { 0, 4 }, new[] { 1, 4 }, new[] { 2, 3 }, new[] { 2, 5 } }),
            ("extra: idle gap between arrivals", new[] { new[] { 0, 1 }, new[] { 10, 1 } }, 1,
                new[] { new[] { 0, 1 }, new[] { 0, 11 } }),
            ("extra: full ties broken by index", new[] { new[] { 5, 3 }, new[] { 5, 3 }, new[] { 5, 3 }, new[] { 0, 10 } }, 2,
                new[] { new[] { 1, 8 }, new[] { 1, 11 }, new[] { 0, 13 }, new[] { 0, 10 } }),
            ("extra: more bays than buses", new[] { new[] { 7, 3 }, new[] { 7, 3 } }, 5,
                new[] { new[] { 0, 10 }, new[] { 1, 10 } }),
            ("extra: 100000 buses, one bay", many, 1, manyExpected),
        };

        foreach (var (name, vehicles, m, expected) in tests)
        {
            int[][] got = sol.AssignBays(vehicles.Select(v => (int[])v.Clone()).ToArray(), m);
            string status = SameResult(got, expected) ? "PASS" : "FAIL";
            if (expected.Length > 10)
                Console.WriteLine($"{status} {name}");
            else
                Console.WriteLine($"{status} {name}: expected={Show(expected)} got={Show(got)}");
        }
    }
}
