using System;
using System.Collections.Generic;

public class Solution
{
    // Minimum total toll to reach the last stone with jumps of 1-3, never repeating a jump length twice in a row.
    public static int MinHopCost(int[] cost)
    {
        // TODO: implement
        return 0;
    }

    public static void Main(string[] args)
    {
        var tests = new List<(int[] Cost, int Expected)>
        {
            (new[] {0, 5, 1, 4, 2}, 6),
            (new[] {0, 1, 1, 1, 1, 1, 1}, 3),
            (new[] {0, 9, 1, 1, 9, 1}, 2),
            (new[] {7}, 0),                               // extra: already on the last stone
            (new[] {3, 8}, 8),                            // extra: single forced jump (start toll ignored)
            (new[] {0, 2, 100, 3}, 3),                    // extra: direct jump of 3
            (new[] {0, 4, 4, 4, 4, 4, 4, 4, 4}, 12),      // extra: uniform tolls
        };

        foreach (var (cost, expected) in tests)
        {
            var got = MinHopCost(cost);
            string status = got == expected ? "PASS" : "FAIL";
            Console.WriteLine($"{status} cost=[{string.Join(",", cost)}] expected={expected} got={got}");
        }
    }
}
