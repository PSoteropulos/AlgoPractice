using System;
using System.Linq;

public class Solution
{
    public static int[] ConveyorBeltLog(int[] events)
    {
        // TODO: implement
        return new int[0];
    }

    private static string Fmt(int[] a) => "[" + string.Join(",", a) + "]";

    public static void Main()
    {
        var cases = new (string Name, int[] Events, int[] Expected)[]
        {
            ("example 1", new int[] { 5, 3, 0, 4, -1, 7 }, new int[] { 4, 7 }),
            ("example 2", new int[] { 2, 6, 1, -5, 9, 0, 0 }, new int[] { }),
            ("example 3", new int[] { 3, 8, 2, -1, 0, -2, 6 }, new int[] { 6 }),
            ("edge: removals on empty belt", new int[] { 0, 0, -3 }, new int[] { }),
            ("edge: single placement", new int[] { 4 }, new int[] { 4 }),
            ("edge: front then back removal interplay", new int[] { 1, 2, 3, -2, 0, 5, -1, 0, 9 }, new int[] { 9 }),
        };

        foreach (var t in cases)
        {
            int[] actual = ConveyorBeltLog(t.Events);
            string status = actual.SequenceEqual(t.Expected) ? "PASS" : "FAIL";
            Console.WriteLine($"[{status}] {t.Name}: expected={Fmt(t.Expected)} actual={Fmt(actual)}");
        }
    }
}
