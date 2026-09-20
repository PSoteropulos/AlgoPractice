using System;
using System.Collections.Generic;
using System.Linq;

public class Solution
{
    public static List<string> HighScoreCombinations(List<List<char>> reels, List<string> bannedPrefixes)
    {
        // TODO: implement
        return new List<string>();
    }

    public static void Main(string[] args)
    {
        var tests = new List<(string Name, List<List<char>> Reels, List<string> Banned, List<string> Expected)>
        {
            ("example 1",
                new List<List<char>> { new() { 'A', 'B' }, new() { 'C', 'D' }, new() { 'E', 'F' } },
                new List<string> { "BD" },
                new List<string> { "ACE", "ACF", "ADE", "ADF", "BCE", "BCF" }),
            ("example 2",
                new List<List<char>> { new() { 'X' }, new() { 'Y', 'Z' }, new() { 'A', 'B', 'C' } },
                new List<string> { "XZ", "XYB" },
                new List<string> { "XYA", "XYC" }),
            ("example 3",
                new List<List<char>> { new() { 'A' }, new() { 'B' }, new() { 'C' } },
                new List<string>(),
                new List<string> { "ABC" }),
            ("edge: first letter banned prunes everything",
                new List<List<char>> { new() { 'A' }, new() { 'B' }, new() { 'C' } },
                new List<string> { "A" },
                new List<string>()),
            ("edge: mid-level banned prefix prunes a branch",
                new List<List<char>> { new() { 'P', 'Q' }, new() { 'R' }, new() { 'S', 'T' } },
                new List<string> { "QR" },
                new List<string> { "PRS", "PRT" }),
        };

        foreach (var (name, reels, banned, expected) in tests)
        {
            var actual = HighScoreCombinations(reels, banned);
            string status = actual.SequenceEqual(expected) ? "PASS" : "FAIL";
            Console.WriteLine($"[{status}] {name}: expected=[{string.Join(", ", expected)}] actual=[{string.Join(", ", actual)}]");
        }
    }
}
