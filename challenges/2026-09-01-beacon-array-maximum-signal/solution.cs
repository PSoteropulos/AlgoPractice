using System;
using System.Collections.Generic;

public class Solution
{
    public static int MaxBeaconSignal(int[] beacons)
    {
        // TODO: implement
        return -1;
    }

    public static void Main(string[] args)
    {
        var tests = new List<(string Name, int[] Beacons, int Expected)>
        {
            ("example 1", new[] {3, 10, 5, 25, 2, 8}, 31),
            ("example 2", new[] {6, 6, 6}, 6),
            ("example 3", new[] {42}, 42),
            ("edge: zeros mixed in don't help", new[] {0, 0, 5}, 5),
            ("edge: disjoint bits XOR to the OR of all", new[] {1, 2, 4, 8}, 15),
        };

        foreach (var (name, beacons, expected) in tests)
        {
            int got = MaxBeaconSignal(beacons);
            string status = got == expected ? "PASS" : "FAIL";
            Console.WriteLine($"[{status}] {name}: expected={expected} actual={got}");
        }
    }
}
