using System;
using System.Collections.Generic;
using System.Linq;

public class Solution
{
    public static List<List<string>> TrailheadAutocomplete(string[] markers, int[] scores, string[] queries)
    {
        // TODO: implement
        return new List<List<string>>();
    }

    private static bool ListOfListsEqual(List<List<string>> a, List<List<string>> b)
    {
        if (a.Count != b.Count) return false;
        for (int i = 0; i < a.Count; i++)
        {
            if (!a[i].SequenceEqual(b[i])) return false;
        }
        return true;
    }

    private static string Format(List<List<string>> lists)
    {
        return "[" + string.Join(",", lists.Select(l => "[" + string.Join(",", l) + "]")) + "]";
    }

    public static void Main(string[] args)
    {
        var tests = new List<(string[] Markers, int[] Scores, string[] Queries, List<List<string>> Expected)>
        {
            (
                new[] {"trailhead", "trailmap", "trailrun", "bridge"},
                new[] {50, 80, 10, 40},
                new[] {"trail", "bri", "zzz"},
                new List<List<string>> { new List<string>{"trailmap", "trailhead", "trailrun"}, new List<string>{"bridge"}, new List<string>() }
            ),
            (
                new[] {"cabin", "cave", "camp"},
                new[] {20, 20, 20},
                new[] {"ca"},
                new List<List<string>> { new List<string>{"cabin", "camp", "cave"} }
            ),
            (
                new[] {"a", "ab", "abc", "abcd", "abcde"},
                new[] {5, 4, 3, 2, 1},
                new[] {"a"},
                new List<List<string>> { new List<string>{"a", "ab", "abc"} }
            ),
            (
                new[] {"lone"},
                new[] {1},
                new[] {"lone", "lon", "x"},
                new List<List<string>> { new List<string>{"lone"}, new List<string>{"lone"}, new List<string>() }
            ),
            (
                new[] {"oak", "oakley", "oaks"},
                new[] {3, 3, 5},
                new[] {"oak"},
                new List<List<string>> { new List<string>{"oaks", "oak", "oakley"} }
            ),
        };

        foreach (var (markers, scores, queries, expected) in tests)
        {
            var got = TrailheadAutocomplete(markers, scores, queries);
            string status = ListOfListsEqual(got, expected) ? "PASS" : "FAIL";
            Console.WriteLine($"{status} queries=[{string.Join(",", queries)}] expected={Format(expected)} got={Format(got)}");
        }
    }
}
