using System;
using System.Linq;

public class Solution
{
    public long[] BestHub(int n, int[][] edges, int[] weights)
    {
        // TODO: implement
        return new long[] { -1, -1 };
    }

    public static void Main(string[] args)
    {
        var sol = new Solution();
        int bigN = 100000;
        var bigEdges = Enumerable.Range(0, bigN - 1).Select(i => new[] { i, i + 1 }).ToArray();
        var tests = new (string name, int n, int[][] edges, int[] w, long[] expected)[]
        {
            ("example 1", 5, new[] { new[] { 0, 1 }, new[] { 0, 2 }, new[] { 2, 3 }, new[] { 2, 4 } }, new[] { 1, 2, 3, 4, 5 }, new long[] { 2, 14 }),
            ("example 2", 4, new[] { new[] { 0, 1 }, new[] { 1, 2 }, new[] { 2, 3 } }, new[] { 1, 0, 0, 1 }, new long[] { 0, 3 }),
            ("example 3", 6, new[] { new[] { 3, 0 }, new[] { 3, 1 }, new[] { 3, 2 }, new[] { 3, 4 }, new[] { 3, 5 } }, new[] { 0, 0, 0, 0, 0, 0 }, new long[] { 0, 0 }),
            ("extra: single node", 1, new int[0][], new[] { 7 }, new long[] { 0, 0 }),
            ("extra: heavy leaf", 5, new[] { new[] { 0, 1 }, new[] { 1, 2 }, new[] { 2, 3 }, new[] { 3, 4 } }, new[] { 1, 1, 1, 1, 100 }, new long[] { 4, 10 }),
            ("extra: unsorted edges", 7, new[] { new[] { 4, 6 }, new[] { 2, 0 }, new[] { 5, 3 }, new[] { 1, 4 }, new[] { 3, 1 }, new[] { 0, 3 } }, new[] { 2, 9, 1, 4, 3, 8, 5 }, new long[] { 1, 40 }),
            ("extra: long path", bigN, bigEdges, Enumerable.Repeat(1, bigN).ToArray(), new long[] { 49999, 2500000000L }),
        };

        foreach (var (name, n, edges, w, expected) in tests)
        {
            var got = sol.BestHub(n, edges, w);
            string status = got.SequenceEqual(expected) ? "PASS" : "FAIL";
            Console.WriteLine($"{status} {name}: expected=[{string.Join(",", expected)}] got=[{string.Join(",", got)}]");
        }
    }
}
