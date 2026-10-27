using System;
using System.Linq;

public class Solution
{
    public static int[] CountSpecialBadges(long[][] queries)
    {
        // TODO: implement
        return new int[0];
    }

    public static void Main()
    {
        var cases = new (string Name, long[][] Queries, int[] Expected)[]
        {
            ("example 1", new long[][] { new long[] { 1, 10 }, new long[] { 10, 50 }, new long[] { 1, 1 } }, new int[] { 2, 2, 0 }),
            ("example 2", new long[][] { new long[] { 4, 4 }, new long[] { 5, 8 }, new long[] { 1, 100 } }, new int[] { 1, 0, 4 }),
            ("example 3", new long[][] { new long[] { 1, 1000000000000L } }, new int[] { 78498 }),
            ("edge: no squares of primes in range", new long[][] { new long[] { 2, 3 }, new long[] { 24, 26 } }, new int[] { 0, 1 }),
            ("edge: square of largest prime below 10^6", new long[][] { new long[] { 999966000289L, 999966000289L } }, new int[] { 1 }),
            ("edge: square of composite only", new long[][] { new long[] { 36, 36 }, new long[] { 16, 16 } }, new int[] { 0, 0 }),
        };

        foreach (var t in cases)
        {
            int[] actual = CountSpecialBadges(t.Queries.Select(q => (long[])q.Clone()).ToArray());
            string status = actual.SequenceEqual(t.Expected) ? "PASS" : "FAIL";
            Console.WriteLine($"[{status}] {t.Name}: expected=[{string.Join(",", t.Expected)}] actual=[{string.Join(",", actual)}]");
        }
    }
}
