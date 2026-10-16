using System;

public class Solution
{
    public static int WidestSpacing(int[] posts, int k)
    {
        // TODO: implement
        return 0;
    }

    public static void Main()
    {
        var cases = new (string Name, int[] Posts, int K, int Expected)[]
        {
            ("example 1", new int[] { 1, 2, 8, 4, 9 }, 3, 3),
            ("example 2", new int[] { 5, 5, 5, 5 }, 2, 0),
            ("example 3", new int[] { 10, 1, 6 }, 2, 9),
            ("edge: lamp on every post", new int[] { 7, 1, 3 }, 3, 2),
            ("edge: two posts", new int[] { 1000000000, 1 }, 2, 999999999),
            ("edge: uneven clusters", new int[] { 1, 2, 3, 100, 101, 102 }, 3, 2),
            ("edge: two lamps spread over many posts", new int[] { 3, 9, 27, 81, 243 }, 2, 240),
        };

        foreach (var t in cases)
        {
            int actual = WidestSpacing((int[])t.Posts.Clone(), t.K);
            string status = actual == t.Expected ? "PASS" : "FAIL";
            Console.WriteLine($"[{status}] {t.Name}: expected={t.Expected} actual={actual}");
        }
    }
}
