using System;
using System.Linq;

public class Solution
{
    public static long AffordableShiftBlocks(int[] pay, int budget)
    {
        // TODO: implement
        return 0;
    }

    public static void Main()
    {
        var cases = new (string Name, int[] Pay, int Budget, long Expected)[]
        {
            ("example 1", new int[] { 2, 1, 3 }, 3, 4L),
            ("example 2", new int[] { 4, 5 }, 3, 0L),
            ("example 3", new int[] { 1, 1, 1, 1 }, 2, 7L),
            ("edge: single shift exactly on budget", new int[] { 5 }, 5, 1L),
            ("edge: everything affordable", new int[] { 1, 1, 1 }, 100, 6L),
            ("edge: answer exceeds 32-bit", Enumerable.Repeat(1, 100000).ToArray(), 1000000000, 5000050000L),
        };

        foreach (var t in cases)
        {
            long actual = AffordableShiftBlocks(t.Pay, t.Budget);
            string status = actual == t.Expected ? "PASS" : "FAIL";
            Console.WriteLine($"[{status}] {t.Name}: expected={t.Expected} actual={actual}");
        }
    }
}
