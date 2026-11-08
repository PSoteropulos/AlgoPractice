using System;
using System.Collections.Generic;
using System.Linq;

public class Solution
{
    public IList<IList<string>> RibbonCuts(string ribbon, int minLen)
    {
        // TODO: implement
        return new List<IList<string>> { new List<string> { "TODO" } };
    }

    public static void Main(string[] args)
    {
        var sol = new Solution();
        var tests = new (string name, string s, int m, string[] expected)[]
        {
            ("example 1", "aab", 1, new[] { "a|a|b", "aa|b" }),
            ("example 2", "abba", 2, new[] { "abba" }),
            ("example 3", "aaaaaa", 2, new[] { "aa|aa|aa", "aa|aaaa", "aaa|aaa", "aaaa|aa", "aaaaaa" }),
            ("extra: no plan", "abc", 2, new string[0]),
            ("extra: single char", "a", 1, new[] { "a" }),
            ("extra: all compositions", "aaa", 1, new[] { "a|a|a", "a|aa", "aa|a", "aaa" }),
        };

        foreach (var (name, s, m, expected) in tests)
        {
            var got = sol.RibbonCuts(s, m).Select(p => string.Join("|", p)).ToArray();
            string status = got.SequenceEqual(expected) ? "PASS" : "FAIL";
            Console.WriteLine($"{status} {name}: expected=[{string.Join(",", expected)}] got=[{string.Join(",", got)}]");
        }
    }
}
