using System;
using System.Collections.Generic;

public class Solution
{
    public static int MaxBookings(int[][] bookings)
    {
        // TODO: implement
        return 0;
    }

    public static void Main(string[] args)
    {
        var tests = new List<(int[][] Bookings, int Expected)>
        {
            (new[] { new[] {1, 3}, new[] {2, 4}, new[] {3, 5} }, 2),
            (new[] { new[] {0, 1}, new[] {1, 2}, new[] {2, 3}, new[] {3, 4} }, 4),
            (new[] { new[] {5, 10}, new[] {0, 2}, new[] {3, 6}, new[] {6, 8}, new[] {8, 9} }, 4),
            (new[] { new[] {2, 5} }, 1),                                  // extra: single booking
            (new[] { new[] {1, 10}, new[] {1, 2}, new[] {1, 3} }, 1),     // extra: same start, only one fits
        };

        foreach (var (bookings, expected) in tests)
        {
            int got = MaxBookings(bookings);
            string status = got == expected ? "PASS" : "FAIL";
            var rendered = string.Join(",", Array.ConvertAll(bookings, b => $"[{b[0]},{b[1]}]"));
            Console.WriteLine($"{status} bookings=[{rendered}] expected={expected} got={got}");
        }
    }
}
