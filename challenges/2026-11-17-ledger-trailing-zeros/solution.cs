using System;
using System.Linq;

public class Solution
{
    public int TrailingZerosOfProduct(int[] nums)
    {
        // TODO: implement
        return -1;
    }

    public static void Main(string[] args)
    {
        var sol = new Solution();
        var tests = new (string name, int[] nums, int expected)[]
        {
            ("example 1", new[] { 25, 8, 3 }, 2),
            ("example 2", new[] { 125, 4, 7, 10 }, 3),
            ("example 3", new[] { 3, 9, 11 }, 0),
            ("extra: single 1", new[] { 1 }, 0),
            ("extra: many fives, one two", Enumerable.Repeat(5, 20).Append(2).ToArray(), 1),
            ("extra: 2^10 * 5^8", new[] { 1024, 390625 }, 8),
            ("extra: 100000 copies of 10^9", Enumerable.Repeat(1000000000, 100000).ToArray(), 900000),
        };

        foreach (var (name, nums, expected) in tests)
        {
            int got = sol.TrailingZerosOfProduct((int[])nums.Clone());
            string status = got == expected ? "PASS" : "FAIL";
            Console.WriteLine($"{status} {name}: expected={expected} got={got}");
        }
    }
}
