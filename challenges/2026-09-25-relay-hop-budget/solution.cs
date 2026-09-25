using System;
using System.Collections.Generic;

public class Solution
{
    public static int MinRelayCost(int n, List<int[]> edges, int src, int dst, int maxHops)
    {
        // TODO: implement
        return 0;
    }

    public static void Main(string[] args)
    {
        var edges = new List<int[]>
        {
            new[]{0,1,100}, new[]{1,2,100}, new[]{0,2,500}, new[]{2,3,100}, new[]{1,3,300},
        };

        var tests = new List<(string Name, int N, List<int[]> Edges, int Src, int Dst, int MaxHops, int Expected)>
        {
            ("example 1", 4, edges, 0, 3, 2, 400),
            ("example 2", 4, edges, 0, 3, 1, -1),
            ("example 3", 4, edges, 0, 3, 3, 300),
            ("edge: zero hop budget", 4, edges, 0, 3, 0, -1),
            ("edge: unreachable dst", 4, new List<int[]>{new[]{0,1,5}}, 0, 3, 3, -1),
            ("edge: cheaper duplicate direct link wins", 2, new List<int[]>{new[]{0,1,7}, new[]{0,1,3}}, 0, 1, 1, 3),
        };

        foreach (var (name, n, edgeList, src, dst, maxHops, expected) in tests)
        {
            int got = MinRelayCost(n, edgeList, src, dst, maxHops);
            string status = got == expected ? "PASS" : "FAIL";
            Console.WriteLine($"[{status}] {name}: expected={expected} actual={got}");
        }
    }
}
