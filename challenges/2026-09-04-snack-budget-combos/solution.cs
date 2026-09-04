using System;
using System.Collections.Generic;

public class Solution
{
    public static int CountSnackCombos(int[] prices, int budget)
    {
        // TODO: implement
        return -1;
    }

    public static void Main(string[] args)
    {
        var tests = new List<(string Name, int[] Prices, int Budget, int Expected)>
        {
            ("example 1", new[] {1, 2, 3, 4, 3}, 6, 3),
            ("example 2", new[] {5, 3, 3, 5}, 8, 1),
            ("example 3", new[] {10}, 10, 0),
            ("edge: empty prices", new int[] {}, 5, 0),
            ("edge: all duplicates", new[] {2, 2, 2, 2}, 4, 1),
        };

        foreach (var (name, prices, budget, expected) in tests)
        {
            int got = CountSnackCombos(prices, budget);
            string status = got == expected ? "PASS" : "FAIL";
            Console.WriteLine($"[{status}] {name}: expected={expected} actual={got}");
        }
    }
}
