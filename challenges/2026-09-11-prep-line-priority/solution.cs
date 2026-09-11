using System;
using System.Collections.Generic;

public class Solution
{
    public static int MaxOrdersCompleted(List<List<int>> orders)
    {
        // TODO: implement
        return 0;
    }

    public static void Main(string[] args)
    {
        var tests = new List<(string Name, List<List<int>> Orders, int Expected)>
        {
            ("example 1", new List<List<int>> { new List<int>{5,9}, new List<int>{2,6}, new List<int>{3,9}, new List<int>{4,15}, new List<int>{6,15} }, 4),
            ("example 2", new List<List<int>> { new List<int>{3,3}, new List<int>{2,3} }, 1),
            ("example 3", new List<List<int>> { new List<int>{5,3} }, 0),
            ("edge: no orders at all", new List<List<int>>(), 0),
            ("edge: everything comfortably fits", new List<List<int>> { new List<int>{1,10}, new List<int>{2,10}, new List<int>{3,10} }, 3),
        };

        foreach (var (name, orders, expected) in tests)
        {
            int got = MaxOrdersCompleted(orders);
            string status = got == expected ? "PASS" : "FAIL";
            Console.WriteLine($"[{status}] {name}: expected={expected} actual={got}");
        }
    }
}
