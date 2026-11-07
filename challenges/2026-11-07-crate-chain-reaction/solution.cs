using System;
using System.Collections.Generic;
using System.Linq;

public class Solution
{
    public int[] CrateChainReaction(int[] crates, int k)
    {
        // TODO: implement
        return new[] { -1 };
    }

    public static void Main(string[] args)
    {
        var sol = new Solution();
        var tests = new (string name, int[] c, int k, int[] expected)[]
        {
            ("example 1", new[] { 2, 2, 3, 3, 3, 2 }, 3, new int[] { }),
            ("example 2", new[] { 1, 1, 2, 2, 1 }, 2, new[] { 1 }),
            ("example 3", new[] { 5, 5, 5, 5, 5 }, 3, new[] { 5, 5 }),
            ("extra: single crate", new[] { 7 }, 2, new[] { 7 }),
            ("extra: nested cancel", new[] { 1, 2, 3, 3, 2, 1 }, 2, new int[] { }),
            ("extra: gap rejoins", new[] { 1, 2, 2, 1, 1, 2 }, 2, new[] { 1, 2 }),
            ("extra: large uniform", Enumerable.Repeat(1, 100000).ToArray(), 3, new[] { 1 }),
        };

        foreach (var (name, c, k, expected) in tests)
        {
            int[] got = sol.CrateChainReaction((int[])c.Clone(), k);
            string status = got.SequenceEqual(expected) ? "PASS" : "FAIL";
            string shown = got.Length < 20 ? "[" + string.Join(",", got) + "]" : "...";
            Console.WriteLine($"{status} {name}: expected=[{string.Join(",", expected)}] got={shown}");
        }
    }
}
