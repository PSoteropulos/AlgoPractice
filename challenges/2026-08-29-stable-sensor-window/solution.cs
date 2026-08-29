using System;
using System.Collections.Generic;

public class Solution
{
    public static int LongestStableWindow(int[] readings, int tolerance)
    {
        // TODO: implement
        return 0;
    }

    public static void Main(string[] args)
    {
        var tests = new List<(int[] Readings, int Tolerance, int Expected)>
        {
            (new[] {4, 8, 5, 1, 7, 9}, 4, 3),
            (new[] {5, 2, 2, 3, 9, 1}, 3, 4),
            (new[] {3, 3, 3, 3, 3, 3}, 0, 6),
            (Array.Empty<int>(), 3, 0),          // extra: empty readings
            (new[] {10}, 5, 1),                  // extra: single reading
        };

        foreach (var (readings, tolerance, expected) in tests)
        {
            int got = LongestStableWindow(readings, tolerance);
            string status = got == expected ? "PASS" : "FAIL";
            Console.WriteLine($"{status} readings=[{string.Join(",", readings)}] tolerance={tolerance} expected={expected} got={got}");
        }
    }
}
