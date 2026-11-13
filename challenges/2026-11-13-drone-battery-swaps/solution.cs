using System;
using System.Collections.Generic;
using System.Linq;

public class Solution
{
    public int MinBatterySwaps(int[] stations, int destination, int batteryRange)
    {
        // TODO: implement
        return -1;
    }

    public static void Main(string[] args)
    {
        var sol = new Solution();
        var tests = new (string name, int[] stations, int destination, int batteryRange, int expected)[]
        {
            ("example 1", new[] { 3, 7, 9, 14 }, 16, 6, 3),
            ("example 2", new[] { 2, 4 }, 5, 5, 0),
            ("example 3", new[] { 2, 5, 11 }, 15, 5, -1),
            ("extra: no stations, too far", new int[0], 10, 3, -1),
            ("extra: exact-boundary hops", new[] { 4 }, 8, 4, 1),
            ("extra: must use every station", new[] { 1, 2, 3, 4 }, 5, 1, 4),
            ("extra: 100000 evenly spaced stations", Enumerable.Range(1, 100000).Select(i => 10 * i).ToArray(), 1000010, 10, 100000),
        };

        foreach (var (name, stations, destination, batteryRange, expected) in tests)
        {
            int got = sol.MinBatterySwaps(stations, destination, batteryRange);
            string status = got == expected ? "PASS" : "FAIL";
            Console.WriteLine($"{status} {name}: expected={expected} got={got}");
        }
    }
}
