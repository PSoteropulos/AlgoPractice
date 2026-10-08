using System;

public class Solution
{
    public static long CountArrangements(string tiles)
    {
        // TODO: implement
        return 0;
    }

    public static void Main()
    {
        var cases = new (string Name, string Tiles, long Expected)[]
        {
            ("example 1", "AAB", 1L),
            ("example 2", "AABBC", 12L),
            ("example 3", "AAA", 0L),
            ("edge: single tile", "A", 1L),
            ("edge: all distinct", "ABCDEFGHI", 362880L),
            ("edge: two colors balanced", "AAAABBBB", 2L),
            ("edge: mixed multiplicities", "AABBCCDDE", 8760L),
        };

        foreach (var t in cases)
        {
            long actual = CountArrangements(t.Tiles);
            string status = actual == t.Expected ? "PASS" : "FAIL";
            Console.WriteLine($"[{status}] {t.Name}: expected={t.Expected} actual={actual}");
        }
    }
}
