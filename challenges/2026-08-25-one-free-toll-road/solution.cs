using System;
using System.Collections.Generic;
using System.Linq;

public class Solution
{
    public static int OneFreeTollRoad(int n, int[][] roads, int src, int dst)
    {
        // TODO: implement
        return -1;
    }

    public static void Main(string[] args)
    {
        int[][] roads1 = new int[][] { new[] {0,1,3}, new[] {1,2,3}, new[] {2,3,3}, new[] {0,2,8} };
        int[][] roads3 = new int[][] { new[] {0,1,2}, new[] {2,3,4} };

        var tests = new List<(int N, int[][] Roads, int Src, int Dst, int Expected)>
        {
            (4, roads1, 0, 3, 3),
            (4, roads1, 0, 2, 0),
            (5, roads3, 0, 4, -1),
            (4, roads1, 2, 2, 0),                       // extra: src == dst
            (1, new int[][] { }, 0, 0, 0),               // extra: single city, no roads
        };

        foreach (var (n, roads, src, dst, expected) in tests)
        {
            int got = OneFreeTollRoad(n, roads, src, dst);
            string status = got == expected ? "PASS" : "FAIL";
            Console.WriteLine($"{status} n={n} roads=[{string.Join(";", roads.Select(r => $"({r[0]},{r[1]},{r[2]})"))}] src={src} dst={dst} expected={expected} got={got}");
        }
    }
}
