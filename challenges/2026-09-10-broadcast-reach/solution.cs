using System;
using System.Collections.Generic;

public class Solution
{
    public static int BroadcastReach(int n, List<List<int>> edges, int start)
    {
        // TODO: implement
        return 0;
    }

    public static void Main(string[] args)
    {
        var tests = new List<(string Name, int N, List<List<int>> Edges, int Start, int Expected)>
        {
            ("example 1", 6, new List<List<int>> { new List<int>{0,1}, new List<int>{0,2}, new List<int>{1,3}, new List<int>{2,3}, new List<int>{3,4} }, 0, 5),
            ("example 2", 4, new List<List<int>> { new List<int>{1,2}, new List<int>{2,3} }, 0, 1),
            ("example 3", 3, new List<List<int>> { new List<int>{0,1}, new List<int>{1,2}, new List<int>{2,0} }, 1, 3),
            ("edge: no edges at all", 1, new List<List<int>>(), 0, 1),
            ("edge: duplicate edges", 3, new List<List<int>> { new List<int>{0,1}, new List<int>{0,1}, new List<int>{1,2} }, 0, 3),
        };

        foreach (var (name, n, edges, start, expected) in tests)
        {
            int got = BroadcastReach(n, edges, start);
            string status = got == expected ? "PASS" : "FAIL";
            Console.WriteLine($"[{status}] {name}: expected={expected} actual={got}");
        }
    }
}
