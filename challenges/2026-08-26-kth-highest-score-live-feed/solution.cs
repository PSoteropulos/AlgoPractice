using System;
using System.Collections.Generic;
using System.Linq;

public class Solution
{
    public static int[] KthHighestScores(int k, int[] scores)
    {
        // TODO: implement
        return Array.Empty<int>();
    }

    public static void Main(string[] args)
    {
        var tests = new List<(int K, int[] Scores, int[] Expected)>
        {
            (2, new[] {3, 5, 10, 1, 7}, new[] {-1, 3, 5, 5, 7}),
            (1, new[] {4, 4, 4}, new[] {4, 4, 4}),
            (3, new[] {9, 1}, new[] {-1, -1}),
            (1, new[] {-5, -1, -10}, new[] {-5, -1, -1}),   // extra: negative scores
            (3, new[] {2, 8, 5}, new[] {-1, -1, 2}),        // extra: k equals length
        };

        foreach (var (k, scores, expected) in tests)
        {
            int[] got = KthHighestScores(k, scores);
            string status = got.SequenceEqual(expected) ? "PASS" : "FAIL";
            Console.WriteLine($"{status} k={k} scores=[{string.Join(",", scores)}] expected=[{string.Join(",", expected)}] got=[{string.Join(",", got)}]");
        }
    }
}
