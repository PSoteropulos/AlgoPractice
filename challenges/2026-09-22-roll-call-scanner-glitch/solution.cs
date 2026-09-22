using System;
using System.Collections.Generic;
using System.Linq;

public class Solution
{
    public static List<int> FindScanGlitch(List<int> scans)
    {
        // TODO: implement
        return new List<int> { 0, 0 };
    }

    public static void Main(string[] args)
    {
        var tests = new List<(string Name, List<int> Scans, List<int> Expected)>
        {
            ("example 1", new List<int> { 1, 2, 2, 4 }, new List<int> { 2, 3 }),
            ("example 2", new List<int> { 1, 1 }, new List<int> { 1, 2 }),
            ("example 3", new List<int> { 3, 2, 3, 4, 5, 1 }, new List<int> { 3, 6 }),
            ("edge: duplicate is smallest value, missing is largest", new List<int> { 2, 2 }, new List<int> { 2, 1 }),
            ("edge: larger roster", new List<int> { 7, 3, 4, 5, 6, 3, 1 }, new List<int> { 3, 2 }),
        };

        foreach (var (name, scans, expected) in tests)
        {
            var actual = FindScanGlitch(scans);
            string status = actual.SequenceEqual(expected) ? "PASS" : "FAIL";
            Console.WriteLine($"[{status}] {name}: expected=[{string.Join(", ", expected)}] actual=[{string.Join(", ", actual)}]");
        }
    }
}
