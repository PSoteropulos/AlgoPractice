using System;

public class Solution
{
    public static int PeakPlateauTotal(int[] h)
    {
        // TODO: implement
        return 0;
    }

    public static void Main()
    {
        var cases = new (string Name, int[] H, int Expected)[]
        {
            ("example 1", new int[] { 1, 3, 3, 2, 2, 5, 4, 4, 4 }, 3),
            ("example 2", new int[] { 7, 7, 7 }, 3),
            ("example 3", new int[] { 1, 2, 3, 4 }, 1),
            ("edge: single element", new int[] { 9 }, 1),
            ("edge: valley between peaks", new int[] { 5, 1, 5 }, 2),
            ("edge: alternating with wide ends", new int[] { 2, 2, 1, 2, 1, 1 }, 3),
            ("edge: descending negatives", new int[] { -1, -2, -2, -3 }, 1),
        };

        foreach (var t in cases)
        {
            int actual = PeakPlateauTotal((int[])t.H.Clone());
            string status = actual == t.Expected ? "PASS" : "FAIL";
            Console.WriteLine($"[{status}] {t.Name}: expected={t.Expected} actual={actual}");
        }
    }
}
