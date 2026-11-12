using System;
using System.Collections.Generic;
using System.Linq;

public class Solution
{
    public long CountExactAlarmWindows(int[] nums, int target)
    {
        // TODO: implement
        return -1;
    }

    public static void Main(string[] args)
    {
        var sol = new Solution();
        var tests = new (string name, int[] nums, int target, long expected)[]
        {
            ("example 1", new[] { 1, 2, 3, 4 }, 3, 4L),
            ("example 2", new[] { 5, 5, 5 }, 5, 6L),
            ("example 3", new[] { 0, 2, 0, 1 }, 2, 4L),
            ("extra: target zero counts quiet runs", new[] { 0, 0, 1, 0 }, 0, 4L),
            ("extra: target bit never appears alone", new[] { 7 }, 3, 0L),
            ("extra: stray bit splits windows", new[] { 4, 1, 2, 4, 2 }, 6, 3L),
            ("extra: 100000 ones (64-bit answer)", Enumerable.Repeat(1, 100000).ToArray(), 1, 5000050000L),
        };

        foreach (var (name, nums, target, expected) in tests)
        {
            long got = sol.CountExactAlarmWindows(nums, target);
            string status = got == expected ? "PASS" : "FAIL";
            Console.WriteLine($"{status} {name}: expected={expected} got={got}");
        }
    }
}
