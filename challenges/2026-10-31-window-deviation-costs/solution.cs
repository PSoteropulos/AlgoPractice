using System;
using System.Linq;

public class Solution
{
    public long[] WindowDeviationCosts(int[] nums, int k)
    {
        // TODO: implement
        return new long[0];
    }

    public static void Main(string[] args)
    {
        var sol = new Solution();
        int[] big = Enumerable.Range(0, 100000).Select(i => i % 2 == 0 ? -1000000000 : 1000000000).ToArray();
        var tests = new (int[] nums, int k, long[] expected)[]
        {
            (new[] { 1, 3, 2, 6, 4 }, 3, new long[] { 2, 4, 4 }),
            (new[] { 5, 5, 5, 5 }, 2, new long[] { 0, 0, 0 }),
            (new[] { 1, 10, 4, 7 }, 4, new long[] { 12 }),
            (new[] { 9 }, 1, new long[] { 0 }),                                   // extra: single reading
            (new[] { -3, 8, -1, 2, 2, 9 }, 2, new long[] { 11, 9, 3, 0, 7 }),     // extra: negatives, even k
            (new[] { -5, -1, -9, 4 }, 3, new long[] { 8, 13 }),                   // extra: negatives, odd k
            (big, 100000, new long[] { 100000000000000L }),                       // extra: needs 64-bit
        };

        foreach (var (nums, k, expected) in tests)
        {
            long[] got = sol.WindowDeviationCosts(nums, k);
            string status = got.SequenceEqual(expected) ? "PASS" : "FAIL";
            Console.WriteLine($"{status} n={nums.Length} k={k} expected=[{string.Join(",", expected)}] got=[{string.Join(",", got)}]");
        }
    }
}
