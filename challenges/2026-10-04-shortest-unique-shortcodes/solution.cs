using System;
using System.Collections.Generic;
using System.Linq;

public class Solution
{
    public static string[] ShortestUniqueShortcodes(string[] names)
    {
        // TODO: implement
        return new string[0];
    }

    public static void Main(string[] args)
    {
        var tests = new List<(string Name, string[] Names, string[] Expected)>
        {
            ("example 1", new[] { "apple", "apply", "ape", "bat" }, new[] { "apple", "apply", "ape", "b" }),
            ("example 2", new[] { "zebra", "zoo", "zone", "yak" }, new[] { "ze", "zoo", "zon", "y" }),
            ("example 3", new[] { "ab", "abc", "abcd" }, new[] { "ab", "abc", "abcd" }),
            ("edge: single name", new[] { "hello" }, new[] { "h" }),
            ("edge: single letters", new[] { "a", "b", "c" }, new[] { "a", "b", "c" }),
            ("edge: deep shared prefix", new[] { "xxxxa", "xxxxb" }, new[] { "xxxxa", "xxxxb" }),
        };

        foreach (var t in tests)
        {
            string[] actual = ShortestUniqueShortcodes((string[])t.Names.Clone());
            string status = actual.SequenceEqual(t.Expected) ? "PASS" : "FAIL";
            Console.WriteLine($"[{status}] {t.Name}: expected=[{string.Join(",", t.Expected)}] actual=[{string.Join(",", actual)}]");
        }
    }
}
