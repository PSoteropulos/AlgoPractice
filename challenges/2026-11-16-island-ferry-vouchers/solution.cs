using System;
using System.Collections.Generic;
using System.Linq;

public class Solution
{
    public int EarliestArrival(int n, int[][] ferries, int k)
    {
        // TODO: implement
        return 0;
    }

    public static void Main(string[] args)
    {
        var sol = new Solution();
        int[][] chain = Enumerable.Range(0, 9999).Select(i => new[] { i, i + 1, 1, 2 }).ToArray();
        int[][] ex2 = { new[] { 0, 1, 3, 1 }, new[] { 1, 4, 2, 20 }, new[] { 0, 2, 1, 1 }, new[] { 2, 3, 1, 1 }, new[] { 3, 4, 6, 1 } };
        int[][] timedChain = { new[] { 0, 1, 1, 1 }, new[] { 1, 2, 1, 9 }, new[] { 2, 3, 1, 9 }, new[] { 1, 3, 5, 1 } };

        var tests = new (string name, int n, int[][] ferries, int k, int expected)[]
        {
            ("example 1", 4, new[] { new[] { 0, 1, 2, 5 }, new[] { 1, 3, 3, 4 }, new[] { 0, 2, 4, 3 }, new[] { 2, 3, 1, 10 } }, 0, 7),
            ("example 2", 5, ex2, 1, 5),
            ("example 3", 3, new[] { new[] { 0, 1, 5, 2 } }, 2, -1),
            ("extra: example 2 without vouchers", 5, ex2, 0, 8),
            ("extra: parallel routes, slower ride wins", 3, new[] { new[] { 0, 1, 4, 7 }, new[] { 0, 1, 9, 1 }, new[] { 1, 2, 3, 5 } }, 0, 8),
            ("extra: one voucher can't fix a two-wait chain", 4, timedChain, 1, 6),
            ("extra: two vouchers unlock the chain", 4, timedChain, 2, 3),
            ("extra: 10000-island chain, no vouchers", 10000, chain, 0, 19997),
            ("extra: 10000-island chain, 10 vouchers", 10000, chain, 10, 19977),
        };

        foreach (var (name, n, ferries, k, expected) in tests)
        {
            int got = sol.EarliestArrival(n, ferries.Select(f => (int[])f.Clone()).ToArray(), k);
            string status = got == expected ? "PASS" : "FAIL";
            Console.WriteLine($"{status} {name}: expected={expected} got={got}");
        }
    }
}
