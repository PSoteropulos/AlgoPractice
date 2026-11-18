using System;

public class Solution
{
    public int MinDialRotations(string ring, string target)
    {
        // TODO: implement
        return -2;
    }

    public static void Main(string[] args)
    {
        var sol = new Solution();
        string longRing = new string('a', 99999) + "b";
        string longTarget = new string('a', 49999) + "b" + new string('a', 50000);
        var tests = new (string name, string ring, string target, int expected)[]
        {
            ("example 1", "abcde", "deabc", 2),
            ("example 2", "abcabcabc", "cabcabcab", 1),
            ("example 3", "abc", "acb", -1),
            ("extra: already aligned", "xyz", "xyz", 0),
            ("extra: single letter", "q", "q", 0),
            ("extra: anagram but not a rotation", "aabb", "abab", -1),
            ("extra: long ring, lone 'b' halfway around", longRing, longTarget, 50000),
        };

        foreach (var (name, ring, target, expected) in tests)
        {
            int got = sol.MinDialRotations(ring, target);
            string status = got == expected ? "PASS" : "FAIL";
            Console.WriteLine($"{status} {name}: expected={expected} got={got}");
        }
    }
}
