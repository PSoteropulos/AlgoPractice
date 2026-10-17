using System;
using System.Linq;

public class Solution
{
    public static int[] DaysUntilHigher(int[] levels)
    {
        // TODO: implement
        return new int[0];
    }

    public static void Main()
    {
        var cases = new (string Name, int[] Levels, int[] Expected)[]
        {
            ("example 1", new int[] { 3, 1, 4, 1, 5 }, new int[] { 2, 1, 2, 1, 0 }),
            ("example 2", new int[] { 5, 5, 5 }, new int[] { 0, 0, 0 }),
            ("example 3", new int[] { 9, 7, 5, 6 }, new int[] { 0, 0, 1, 0 }),
            ("edge: single day", new int[] { 1 }, new int[] { 0 }),
            ("edge: strictly increasing", new int[] { 1, 2, 3, 4 }, new int[] { 1, 1, 1, 0 }),
            ("edge: strictly decreasing", new int[] { 4, 3, 2, 1 }, new int[] { 0, 0, 0, 0 }),
            ("edge: zero then big", new int[] { 0, 0, 1000000000, 0, 1000000000 }, new int[] { 2, 1, 0, 1, 0 }),
        };

        foreach (var t in cases)
        {
            int[] actual = DaysUntilHigher((int[])t.Levels.Clone());
            string status = actual.SequenceEqual(t.Expected) ? "PASS" : "FAIL";
            Console.WriteLine($"[{status}] {t.Name}: expected=[{string.Join(",", t.Expected)}] actual=[{string.Join(",", actual)}]");
        }
    }
}
