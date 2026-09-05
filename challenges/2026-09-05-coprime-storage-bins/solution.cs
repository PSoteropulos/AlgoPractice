using System;
using System.Collections.Generic;

public class Solution
{
    public static int MinStorageBins(int[] batchCodes)
    {
        // TODO: implement
        return -1;
    }

    public static void Main(string[] args)
    {
        var tests = new List<(string Name, int[] BatchCodes, int Expected)>
        {
            ("example 1", new[] {6, 10, 15}, 3),
            ("example 2", new[] {4, 9, 25, 6}, 2),
            ("example 3", new[] {2, 4, 8, 16}, 4),
            ("edge: single sample", new[] {7}, 1),
            ("edge: chain conflict needs two bins", new[] {2, 3, 4}, 2),
        };

        foreach (var (name, batchCodes, expected) in tests)
        {
            int got = MinStorageBins(batchCodes);
            string status = got == expected ? "PASS" : "FAIL";
            Console.WriteLine($"[{status}] {name}: expected={expected} actual={got}");
        }
    }
}
