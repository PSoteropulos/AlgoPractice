using System;
using System.Linq;

public class Solution
{
    public static bool[] CanReachAll(int n, int[][] cables, int[][] queries)
    {
        // TODO: implement
        return new bool[0];
    }

    private static string Fmt(bool[] a) => "[" + string.Join(",", a.Select(x => x ? "true" : "false")) + "]";

    public static void Main()
    {
        var cases = new (string Name, int N, int[][] Cables, int[][] Queries, bool[] Expected)[]
        {
            ("example 1", 5, new int[][] { new int[] { 0, 1, 4 }, new int[] { 1, 2, 6 }, new int[] { 2, 3, 2 }, new int[] { 3, 4, 9 } }, new int[][] { new int[] { 0, 2, 7 }, new int[] { 0, 2, 6 }, new int[] { 0, 4, 10 }, new int[] { 2, 3, 3 }, new int[] { 3, 3, 1 } }, new bool[] { true, false, true, true, true }),
            ("example 2", 4, new int[][] { new int[] { 0, 1, 5 }, new int[] { 0, 1, 1 }, new int[] { 2, 3, 3 } }, new int[][] { new int[] { 0, 1, 1 }, new int[] { 0, 1, 2 }, new int[] { 1, 2, 100 }, new int[] { 2, 3, 4 } }, new bool[] { false, true, false, true }),
            ("example 3", 3, new int[][] { }, new int[][] { new int[] { 1, 1, 1 }, new int[] { 0, 2, 1000000000 } }, new bool[] { true, false }),
            ("edge: single depot", 1, new int[][] { }, new int[][] { new int[] { 0, 0, 1 } }, new bool[] { true }),
            ("edge: strict boundary, unsorted queries", 4, new int[][] { new int[] { 0, 1, 3 }, new int[] { 1, 2, 3 }, new int[] { 2, 3, 8 } }, new int[][] { new int[] { 0, 3, 9 }, new int[] { 0, 2, 4 }, new int[] { 0, 2, 3 }, new int[] { 0, 3, 8 } }, new bool[] { true, true, false, false }),
            ("edge: self-loop cable", 2, new int[][] { new int[] { 0, 0, 1 }, new int[] { 0, 1, 5 } }, new int[][] { new int[] { 0, 1, 5 }, new int[] { 0, 1, 6 } }, new bool[] { false, true }),
        };

        foreach (var t in cases)
        {
            bool[] actual = CanReachAll(t.N, t.Cables, t.Queries);
            string status = actual.SequenceEqual(t.Expected) ? "PASS" : "FAIL";
            Console.WriteLine($"[{status}] {t.Name}: expected={Fmt(t.Expected)} actual={Fmt(actual)}");
        }
    }
}
