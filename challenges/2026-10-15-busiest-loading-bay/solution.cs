using System;

public class Solution
{
    public static int BusiestBay(int n, int[][] trucks)
    {
        // TODO: implement
        return 0;
    }

    public static void Main()
    {
        var cases = new (string Name, int N, int[][] Trucks, int Expected)[]
        {
            ("example 1", 2, new int[][] { new[] {1,5}, new[] {2,2}, new[] {3,1}, new[] {6,1} }, 0),
            ("example 2", 3, new int[][] { new[] {1,10}, new[] {2,1}, new[] {3,1}, new[] {4,1}, new[] {5,10} }, 1),
            ("example 3", 3, new int[][] { new[] {1,2}, new[] {1,2}, new[] {2,1}, new[] {3,1}, new[] {3,5} }, 0),
            ("edge: single bay rejects simultaneous truck", 1, new int[][] { new[] {1,1}, new[] {1,1} }, 0),
            ("edge: rejections then tie", 2, new int[][] { new[] {1,100}, new[] {1,100}, new[] {2,1}, new[] {3,1}, new[] {4,1} }, 0),
            ("edge: freed bay reused over higher bay", 3, new int[][] { new[] {1,1}, new[] {1,5}, new[] {2,1}, new[] {2,5}, new[] {3,1}, new[] {3,1} }, 0),
        };

        foreach (var t in cases)
        {
            int actual = BusiestBay(t.N, t.Trucks);
            string status = actual == t.Expected ? "PASS" : "FAIL";
            Console.WriteLine($"[{status}] {t.Name}: expected={t.Expected} actual={actual}");
        }
    }
}
