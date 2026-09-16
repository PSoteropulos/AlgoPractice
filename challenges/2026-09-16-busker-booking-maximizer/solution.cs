using System;
using System.Collections.Generic;

public class Solution
{
    public static int MaxTotalDonations(int[][] slots)
    {
        // TODO: implement
        return 0;
    }

    public static void Main(string[] args)
    {
        var tests = new List<(string Name, int[][] Slots, int Expected)>
        {
            ("example 1", new int[][]{new[]{0,3,5}, new[]{2,5,6}, new[]{4,7,5}, new[]{6,9,4}}, 10),
            ("example 2", new int[][]{new[]{1,4,3}}, 3),
            ("example 3", new int[][]{new[]{0,2,5}, new[]{0,2,10}, new[]{1,3,3}}, 10),
            ("edge: back-to-back slots both taken", new int[][]{new[]{0,2,3}, new[]{2,4,4}}, 7),
            ("edge: single slot", new int[][]{new[]{5,10,100}}, 100),
        };

        foreach (var (name, slots, expected) in tests)
        {
            int got = MaxTotalDonations(slots);
            string status = got == expected ? "PASS" : "FAIL";
            Console.WriteLine($"[{status}] {name}: expected={expected} actual={got}");
        }
    }
}
