using System;
using System.Collections.Generic;
using System.Linq;

public class Solution
{
    public int StrongestMedian(int[] nums, int k)
    {
        // TODO: implement
        return 0;
    }

    public static void Main(string[] args)
    {
        var sol = new Solution();
        const int N = 100000;
        int[] increasing = Enumerable.Range(1, N).ToArray();
        int[] alternating = Enumerable.Range(0, N).Select(i => i % 2 == 0 ? 1000000000 : 1).ToArray();

        var tests = new (string name, int[] nums, int k, int expected)[]
        {
            ("example 1", new[] { 1, 2, 3, 2, 1 }, 3, 2),
            ("example 2", new[] { 5, 1, 8, 7, 2, 9 }, 2, 7),
            ("example 3", new[] { 3, 9, 1, 9, 1, 9, 2 }, 4, 9),
            ("extra: single hour", new[] { 7 }, 1, 7),
            ("extra: even length takes the smaller middle", new[] { 4, 8 }, 2, 4),
            ("extra: odd-length streak beats every pair", new[] { 6, 2, 6, 2, 6, 2 }, 2, 6),
            ("extra: 100000 increasing, k = 50000", increasing, 50000, 75000),
            ("extra: 100000 alternating, whole array", alternating, N, 1),
            ("extra: 100000 alternating, k = n - 1", alternating, N - 1, 1000000000),
        };

        foreach (var (name, nums, k, expected) in tests)
        {
            int got = sol.StrongestMedian((int[])nums.Clone(), k);
            string status = got == expected ? "PASS" : "FAIL";
            Console.WriteLine($"{status} {name}: expected={expected} got={got}");
        }
    }
}
