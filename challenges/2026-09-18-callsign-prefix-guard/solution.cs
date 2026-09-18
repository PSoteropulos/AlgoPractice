using System;
using System.Collections.Generic;
using System.Linq;

public class Solution
{
    public static bool[] RegisterCallsigns(List<string> requests)
    {
        // TODO: implement
        return new bool[0];
    }

    public static void Main(string[] args)
    {
        var tests = new List<(string Name, List<string> Input, bool[] Expected)>
        {
            ("example 1", new List<string> { "AB12", "AB", "CD9" }, new[] { true, false, true }),
            ("example 2", new List<string> { "NET", "NETA", "NETB" }, new[] { true, false, false }),
            ("example 3", new List<string> { "X", "Y", "XY" }, new[] { true, true, false }),
            ("edge: exact duplicate", new List<string> { "A", "A" }, new[] { true, false }),
            ("edge: chain of prefixes then unrelated", new List<string> { "AB", "ABC", "A" }, new[] { true, false, false }),
        };

        foreach (var (name, input, expected) in tests)
        {
            bool[] got = RegisterCallsigns(input);
            string status = got.SequenceEqual(expected) ? "PASS" : "FAIL";
            Console.WriteLine($"[{status}] {name}: expected=[{string.Join(",", expected)}] actual=[{string.Join(",", got)}]");
        }
    }
}
