// Longest Balanced Parity Subarray
//
// See problem.md for the full statement.

using System;

public class Solution
{
    public int LongestBalancedParitySubarray(int[] nums, int k)
    {
        // TODO: implement
        int n = nums.Length;
        int even = 0;
        int odd = 0;
        int diff = 0;
        return diff; // placeholder, remove me
    }

    private static void RunSelfChecks()
    {
        var solution = new Solution();
        var cases = new (int[] nums, int k, int expected)[]
        {
            (new[] { 1, 2, 3, 4, 5 }, 1, 5),
            (new[] { 2, 4, 6, 1, 3 }, 0, 4),
            (new[] { 2, 4, 6, 8 }, 2, 2),
            (new[] { 7 }, 5, 1),
            (new[] { 2, 4, 6, 8 }, 0, 0),
        };

        bool allPassed = true;
        for (int i = 0; i < cases.Length; i++)
        {
            var (nums, k, expected) = cases[i];
            int actual = solution.LongestBalancedParitySubarray((int[])nums.Clone(), k);
            string status = actual == expected ? "PASS" : "FAIL";
            if (status == "FAIL") allPassed = false;
            Console.WriteLine($"Case {i + 1}: {status} (nums=[{string.Join(",", nums)}], k={k} -> got {actual}, expected {expected})");
        }

        Console.WriteLine(allPassed ? "All cases passed." : "Some cases failed.");
    }

    public static void Main(string[] args)
    {
        RunSelfChecks();
    }
}
