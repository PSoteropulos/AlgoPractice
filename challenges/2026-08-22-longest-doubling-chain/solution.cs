using System;
using System.Collections.Generic;

public class Solution
{
    public static int LongestDoublingChain(int[] nums)
    {
        // TODO: implement
        return 0;
    }

    public static void Main(string[] args)
    {
        var tests = new List<(int[] Nums, int Expected)>
        {
            (new int[] { 1, 2, 4, 8, 3, 10 }, 4),
            (new int[] { -2, -4, -8, -1 }, 4),
            (new int[] { 0, 0, 5 }, 1),
            (new int[] { 7 }, 1),          // extra: single element
            (new int[] { 5, 5, 5 }, 1),    // extra: all duplicates, odd, no successor
        };

        foreach (var (nums, expected) in tests)
        {
            int got = LongestDoublingChain(nums);
            string status = got == expected ? "PASS" : "FAIL";
            Console.WriteLine($"{status} nums=[{string.Join(",", nums)}] expected={expected} got={got}");
        }
    }
}
