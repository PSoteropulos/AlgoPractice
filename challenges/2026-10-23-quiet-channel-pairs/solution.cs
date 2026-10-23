using System;

public class Solution
{
    public static int CountQuietPairs(int[] masks)
    {
        // TODO: implement
        return 0;
    }

    public static void Main()
    {
        var cases = new (string Name, int[] Masks, int Expected)[]
        {
            ("example 1", new int[] { 1, 2, 3 }, 1),
            ("example 2", new int[] { 6, 9, 5, 10 }, 2),
            ("example 3", new int[] { 0, 0, 5 }, 3),
            ("edge: single transmitter", new int[] { 7 }, 0),
            ("edge: identical masks overlap", new int[] { 4, 4, 4 }, 0),
            ("edge: max mask with zero", new int[] { 1048575, 0 }, 1),
            ("edge: all distinct single channels", new int[] { 1, 2, 4, 8, 16 }, 10),
        };

        foreach (var t in cases)
        {
            int actual = CountQuietPairs((int[])t.Masks.Clone());
            string status = actual == t.Expected ? "PASS" : "FAIL";
            Console.WriteLine($"[{status}] {t.Name}: expected={t.Expected} actual={actual}");
        }
    }
}
