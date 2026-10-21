using System;
using System.Linq;

public class Solution
{
    public static long[] PrefixPopularity(string[] words, int k)
    {
        // TODO: implement
        return new long[0];
    }

    public static void Main()
    {
        var cases = new (string Name, string[] Words, int K, long[] Expected)[]
        {
            ("example 1", new string[] { "abc", "ab", "bc", "b" }, 2, new long[] { 3, 2, 1, 0 }),
            ("example 2", new string[] { "aa", "aa", "a" }, 1, new long[] { 5, 5, 3 }),
            ("example 3", new string[] { "cat", "car", "cart", "dog" }, 3, new long[] { 1, 2, 3, 1 }),
            ("edge: k longer than every word", new string[] { "z" }, 2, new long[] { 0 }),
            ("edge: duplicate single letters", new string[] { "a", "a" }, 1, new long[] { 2, 2 }),
            ("edge: triple duplicate words", new string[] { "ab", "ab", "ab" }, 1, new long[] { 6, 6, 6 }),
            ("edge: nested shared stems", new string[] { "hello", "help", "he" }, 2, new long[] { 7, 6, 3 }),
        };

        foreach (var t in cases)
        {
            long[] actual = PrefixPopularity((string[])t.Words.Clone(), t.K);
            string status = actual.SequenceEqual(t.Expected) ? "PASS" : "FAIL";
            Console.WriteLine($"[{status}] {t.Name}: expected=[{string.Join(",", t.Expected)}] actual=[{string.Join(",", actual)}]");
        }
    }
}
