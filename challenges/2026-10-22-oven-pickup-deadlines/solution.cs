using System;
using System.Linq;

public class Solution
{
    public static int MaxOrders(int[][] orders)
    {
        // TODO: implement
        return 0;
    }

    public static void Main()
    {
        var cases = new (string Name, int[][] Orders, int Expected)[]
        {
            ("example 1", new int[][] { new int[] { 3, 5 }, new int[] { 2, 6 }, new int[] { 4, 7 } }, 2),
            ("example 2", new int[][] { new int[] { 5, 5 }, new int[] { 4, 6 }, new int[] { 2, 6 }, new int[] { 1, 8 } }, 3),
            ("example 3", new int[][] { new int[] { 2, 2 }, new int[] { 2, 2 }, new int[] { 2, 4 } }, 2),
            ("edge: bake time exceeds deadline", new int[][] { new int[] { 6, 5 } }, 0),
            ("edge: identical tight orders", new int[][] { new int[] { 1, 1 }, new int[] { 1, 1 }, new int[] { 1, 1 } }, 1),
            ("edge: unsorted input, swap needed", new int[][] { new int[] { 100, 200 }, new int[] { 200, 1300 }, new int[] { 1000, 1250 }, new int[] { 2000, 3200 } }, 3),
            ("edge: maximum values", new int[][] { new int[] { 1000000000, 1000000000 }, new int[] { 1000000000, 1000000000 }, new int[] { 999999999, 1000000000 } }, 1),
        };

        foreach (var t in cases)
        {
            int actual = MaxOrders(t.Orders.Select(o => (int[])o.Clone()).ToArray());
            string status = actual == t.Expected ? "PASS" : "FAIL";
            Console.WriteLine($"[{status}] {t.Name}: expected={t.Expected} actual={actual}");
        }
    }
}
