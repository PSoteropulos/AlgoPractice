using System;
using System.Text;

public class Solution
{
    public int ShortestTile(string s)
    {
        // TODO: implement
        return 0;
    }

    public static void Main(string[] args)
    {
        var sol = new Solution();
        var tests = new (string s, int expected)[]
        {
            ("abcabcab", 3),
            ("aabaaab", 4),
            ("abcd", 4),
            ("a", 1), // extra: single character
            ("aaaaaaaa", 1), // extra: one repeated letter
            ("abaababaab", 5), // extra: complete repeats
            (new string('a', 99999) + "b", 100000), // extra: large, no shorter tile
            (new StringBuilder().Insert(0, "abc", 33333).Append("ab").ToString(), 3), // extra: large, partial last copy
        };

        foreach (var (s, expected) in tests)
        {
            int got = sol.ShortestTile(s);
            string status = got == expected ? "PASS" : "FAIL";
            Console.WriteLine($"{status} len={s.Length} expected={expected} got={got}");
        }
    }
}
