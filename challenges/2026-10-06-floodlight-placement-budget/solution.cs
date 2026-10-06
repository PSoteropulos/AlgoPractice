using System;

public class Solution
{
    public static long MinFloodlightCost(int[] x, int[] w, long c)
    {
        // TODO: implement
        return 0;
    }

    public static void Main()
    {
        var cases = new (string Name, int[] X, int[] W, long C, long Expected)[]
        {
            ("example 1", new int[] { 1, 2, 6, 7, 8 }, new int[] { 3, 1, 2, 2, 1 }, 5L, 14L),
            ("example 2", new int[] { 0, 10, 20 }, new int[] { 1, 1, 1 }, 100L, 120L),
            ("example 3", new int[] { 4 }, new int[] { 7 }, 3L, 3L),
            ("edge: free lights, every stall lit", new int[] { 0, 5 }, new int[] { 2, 2 }, 0L, 0L),
            ("edge: uniform line", new int[] { 0, 1, 2, 3, 4, 5 }, new int[] { 1, 1, 1, 1, 1, 1 }, 2L, 8L),
            ("edge: large answer", new int[] { 0, 1000000, 2000000, 3000000 }, new int[] { 10000, 10000, 10000, 10000 }, 1000000000L, 4000000000L),
        };

        foreach (var t in cases)
        {
            long actual = MinFloodlightCost((int[])t.X.Clone(), (int[])t.W.Clone(), t.C);
            string status = actual == t.Expected ? "PASS" : "FAIL";
            Console.WriteLine($"[{status}] {t.Name}: expected={t.Expected} actual={actual}");
        }
    }
}
