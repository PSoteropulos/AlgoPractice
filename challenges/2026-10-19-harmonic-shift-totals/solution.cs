using System;

public class Solution
{
    public static long CountBalancedSegments(int[] deltas, int k)
    {
        // TODO: implement
        return -1;
    }

    public static void Main()
    {
        var cases = new (string Name, int[] Deltas, int K, long Expected)[]
        {
            ("example 1", new int[] { 4, 5, 0, -2, -3, 1 }, 5, 5L),
            ("example 2", new int[] { 2, 2, 2 }, 2, 3L),
            ("example 3", new int[] { -7, 3, 4, -5, 5 }, 5, 4L),
            ("edge: all zeros", new int[] { 0, 0, 0, 0 }, 3, 6L),
            ("edge: k is one", new int[] { -1, 1, 9, 4, -6 }, 1, 10L),
            ("edge: no valid segment", new int[] { 1, 2, 4 }, 7, 1L),
            ("edge: large values", new int[] { 1000000000, 1000000000, 1000000000 }, 1000000000, 3L),
            ("edge: single hour", new int[] { 3 }, 7, 0L),
        };

        foreach (var t in cases)
        {
            long actual = CountBalancedSegments((int[])t.Deltas.Clone(), t.K);
            string status = actual == t.Expected ? "PASS" : "FAIL";
            Console.WriteLine($"[{status}] {t.Name}: expected={t.Expected} actual={actual}");
        }
    }
}
