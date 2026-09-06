using System;
using System.Collections.Generic;

public class Solution
{
    public static string CompressMarquee(string s)
    {
        // TODO: implement
        return "";
    }

    public static void Main(string[] args)
    {
        var tests = new List<(string Name, string Input, string Expected)>
        {
            ("example 1", "AAAABBBCCD", "4A3BCCD"),
            ("example 2", "ABCD", "ABCD"),
            ("example 3", "AABBBBCCCCCC", "AA4B6C"),
            ("edge: empty string", "", ""),
            ("edge: long run", new string('A', 12), "12A"),
        };

        foreach (var (name, input, expected) in tests)
        {
            string got = CompressMarquee(input);
            string status = got == expected ? "PASS" : "FAIL";
            Console.WriteLine($"[{status}] {name}: expected={expected} actual={got}");
        }
    }
}
