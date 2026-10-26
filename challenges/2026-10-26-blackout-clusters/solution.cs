using System;
using System.Collections.Generic;
using System.Linq;

public class Solution
{
    public static long[] MaxClusterAfterShutdowns(int[] weights, int[][] edges, int[] order)
    {
        // TODO: implement
        return null;
    }

    public static void Main(string[] args)
    {
        var tests = new List<(int[] Weights, int[][] Edges, int[] Order, long[] Expected)>
        {
            (new[] {4, 1, 3, 2}, new int[][] {new[] {0, 1}, new[] {1, 2}, new[] {2, 3}}, new[] {1, 2, 0, 3}, new long[] {5L, 4L, 2L, 0L}),
            (new[] {5, 5, 5}, new int[][] {new[] {0, 1}, new[] {1, 2}, new[] {0, 2}}, new[] {0, 1, 2}, new long[] {10L, 5L, 0L}),
            (new[] {2, 7, 1, 3, 6}, new int[][] {new[] {0, 1}, new[] {1, 2}, new[] {3, 4}}, new[] {4, 0, 2, 1, 3}, new long[] {10L, 8L, 7L, 3L, 0L}),
            (new[] {7}, new int[0][], new[] {0}, new long[] {0L}), // extra: single tower, no edges
            (new[] {1, 1, 1, 1}, new int[][] {new[] {0, 1}, new[] {0, 2}, new[] {0, 3}}, new[] {0, 1, 2, 3}, new long[] {1L, 1L, 1L, 0L}), // extra: removing the hub shatters a star
            (new[] {1000000000, 1000000000, 1000000000, 1000000000}, new int[][] {new[] {0, 1}, new[] {1, 2}, new[] {2, 3}}, new[] {3, 2, 1, 0}, new long[] {3000000000L, 2000000000L, 1000000000L, 0L}), // extra: sums exceed 32-bit range
        };

        foreach (var (weights, edges, order, expected) in tests)
        {
            long[] got = MaxClusterAfterShutdowns(weights, edges, order);
            string status = got != null && got.SequenceEqual(expected) ? "PASS" : "FAIL";
            string edgeText = string.Join(",", edges.Select(e => $"[{e[0]},{e[1]}]"));
            Console.WriteLine($"{status} weights=[{string.Join(",", weights)}] edges=[{edgeText}] order=[{string.Join(",", order)}] expected=[{string.Join(",", expected)}] got=[{(got == null ? "null" : string.Join(",", got))}]");
        }
    }
}
