using System;
using System.Collections.Generic;
using System.Linq;

public class Solution
{
    public static int[] CappedTeamMerges(int n, int maxSize, int[][] requests)
    {
        // TODO: implement
        return new int[0];
    }

    public static void Main(string[] args)
    {
        var tests = new List<(int N, int MaxSize, int[][] Requests, int[] Expected)>
        {
            (5, 3, new int[][] { new[] {0,1}, new[] {2,3}, new[] {1,2}, new[] {3,4} }, new[] {2,2,3,3,3}),
            (4, 2, new int[][] { new[] {0,1}, new[] {1,2}, new[] {2,3} }, new[] {2,2,2,2}),
            (3, 1, new int[][] { new[] {0,1}, new[] {1,2} }, new[] {1,1,1}),
            (1, 1, new int[][] { }, new[] {1}),                                          // extra: single employee, no requests
            (4, 4, new int[][] { new[] {0,1}, new[] {2,3}, new[] {1,2} }, new[] {4,4,4,4}), // extra: cap allows full merge
        };

        foreach (var (n, maxSize, requests, expected) in tests)
        {
            int[] got = CappedTeamMerges(n, maxSize, requests);
            string status = got.SequenceEqual(expected) ? "PASS" : "FAIL";
            Console.WriteLine($"{status} n={n} maxSize={maxSize} requests=[{string.Join(";", requests.Select(r => $"({r[0]},{r[1]})"))}] expected=[{string.Join(",", expected)}] got=[{string.Join(",", got)}]");
        }
    }
}
