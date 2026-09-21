using System;
using System.Collections.Generic;

public class Solution
{
    public static long CountHarmonicPairs(List<int> freq, int k)
    {
        // TODO: implement
        return 0;
    }

    public static void Main(string[] args)
    {
        var tests = new List<(string Name, List<int> Freq, int K, long Expected)>
        {
            ("example 1", new List<int> { 4, 6, 8, 10, 3 }, 2, 5),
            ("example 2", new List<int> { 2, 4, 8, 16 }, 4, 2),
            ("example 3", new List<int> { 5, 7, 11 }, 5, 0),
            ("edge: k larger than every value", new List<int> { 2, 4, 6 }, 100, 0),
            ("edge: all elements equal to k", new List<int> { 7, 7, 7 }, 7, 3),
        };

        foreach (var (name, freq, k, expected) in tests)
        {
            var actual = CountHarmonicPairs(freq, k);
            string status = actual == expected ? "PASS" : "FAIL";
            Console.WriteLine($"[{status}] {name}: expected={expected} actual={actual}");
        }
    }
}
