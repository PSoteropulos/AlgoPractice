using System;

public class Solution
{
    public static int MinMaxTruckLoad(int[] weights, int k)
    {
        // TODO: implement
        return 0;
    }

    public static void Main()
    {
        var cases = new (string Name, int[] Weights, int K, int Expected)[]
        {
            ("example 1", new int[] { 3, 5, 2, 7 }, 2, 9),
            ("example 2", new int[] { 4, 4, 4, 4, 4 }, 3, 8),
            ("example 3", new int[] { 9, 1, 1, 1 }, 2, 9),
            ("edge: single crate", new int[] { 8 }, 1, 8),
            ("edge: one crate per truck", new int[] { 7, 7, 7, 7 }, 4, 7),
            ("edge: mixed weights", new int[] { 6, 5, 4, 3, 3, 3 }, 3, 9),
            ("edge: split 1..7 over two trucks", new int[] { 1, 2, 3, 4, 5, 6, 7 }, 2, 14),
        };

        foreach (var t in cases)
        {
            int actual = MinMaxTruckLoad((int[])t.Weights.Clone(), t.K);
            string status = actual == t.Expected ? "PASS" : "FAIL";
            Console.WriteLine($"[{status}] {t.Name}: expected={t.Expected} actual={actual}");
        }
    }
}
