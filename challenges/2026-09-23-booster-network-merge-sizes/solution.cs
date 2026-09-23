using System;
using System.Collections.Generic;
using System.Linq;

public class Solution
{
    public static int[] BoosterNetworkMergeSizes(int n, List<List<int>> cables)
    {
        // TODO: implement
        return new int[0];
    }

    public static void Main(string[] args)
    {
        var tests = new List<(string Name, int N, List<List<int>> Input, int[] Expected)>
        {
            ("example 1", 5, new List<List<int>> { new List<int>{0,1}, new List<int>{1,2}, new List<int>{3,4}, new List<int>{2,3} }, new[]{2,3,2,5}),
            ("example 2", 3, new List<List<int>> { new List<int>{0,1}, new List<int>{0,1} }, new[]{2,2}),
            ("example 3", 4, new List<List<int>> { new List<int>{0,1}, new List<int>{2,3}, new List<int>{1,3} }, new[]{2,2,4}),
            ("edge: no cables", 3, new List<List<int>>(), new int[]{}),
            ("edge: single booster network never grows", 1, new List<List<int>>(), new int[]{}),
            ("edge: long chain", 4, new List<List<int>> { new List<int>{0,1}, new List<int>{1,2}, new List<int>{2,3} }, new[]{2,3,4}),
        };

        foreach (var (name, n, input, expected) in tests)
        {
            int[] got = BoosterNetworkMergeSizes(n, input);
            string status = got.SequenceEqual(expected) ? "PASS" : "FAIL";
            Console.WriteLine($"[{status}] {name}: expected=[{string.Join(",", expected)}] actual=[{string.Join(",", got)}]");
        }
    }
}
