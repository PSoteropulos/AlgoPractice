using System;
using System.Collections.Generic;
using System.Linq;

public class Solution
{
    public static int[] GondolaUpgradeDistance(int[] capacity)
    {
        // TODO: implement
        return Array.Empty<int>();
    }

    public static void Main(string[] args)
    {
        var tests = new List<(string Name, int[] Capacity, int[] Expected)>
        {
            ("example 1", new int[]{3,1,2,4}, new int[]{3,1,1,-1}),
            ("example 2", new int[]{5,5,5,5}, new int[]{-1,-1,-1,-1}),
            ("example 3", new int[]{2,4,3,6,1}, new int[]{1,2,1,-1,1}),
            ("edge: single gondola", new int[]{1}, new int[]{-1}),
            ("edge: two gondolas ascending", new int[]{1,2}, new int[]{1,-1}),
        };

        foreach (var (name, capacity, expected) in tests)
        {
            int[] got = GondolaUpgradeDistance(capacity);
            string status = got.SequenceEqual(expected) ? "PASS" : "FAIL";
            Console.WriteLine($"[{status}] {name}: expected=[{string.Join(",", expected)}] actual=[{string.Join(",", got)}]");
        }
    }
}
