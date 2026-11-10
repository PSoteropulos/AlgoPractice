import java.util.Arrays;

public class solution {
    public long[] bestHub(int n, int[][] edges, int[] weights) {
        // TODO: implement
        return new long[]{-1, -1};
    }

    static int[][] pathEdges(int n) {
        int[][] e = new int[n - 1][];
        for (int i = 0; i < n - 1; i++) e[i] = new int[]{i, i + 1};
        return e;
    }

    public static void main(String[] args) {
        solution sol = new solution();
        int bigN = 100000;
        int[] ones = new int[bigN];
        Arrays.fill(ones, 1);
        Object[][] tests = {
            {"example 1", 5, new int[][]{{0, 1}, {0, 2}, {2, 3}, {2, 4}}, new int[]{1, 2, 3, 4, 5}, new long[]{2, 14}},
            {"example 2", 4, new int[][]{{0, 1}, {1, 2}, {2, 3}}, new int[]{1, 0, 0, 1}, new long[]{0, 3}},
            {"example 3", 6, new int[][]{{3, 0}, {3, 1}, {3, 2}, {3, 4}, {3, 5}}, new int[]{0, 0, 0, 0, 0, 0}, new long[]{0, 0}},
            {"extra: single node", 1, new int[0][], new int[]{7}, new long[]{0, 0}},
            {"extra: heavy leaf", 5, new int[][]{{0, 1}, {1, 2}, {2, 3}, {3, 4}}, new int[]{1, 1, 1, 1, 100}, new long[]{4, 10}},
            {"extra: unsorted edges", 7, new int[][]{{4, 6}, {2, 0}, {5, 3}, {1, 4}, {3, 1}, {0, 3}}, new int[]{2, 9, 1, 4, 3, 8, 5}, new long[]{1, 40}},
            {"extra: long path", bigN, pathEdges(bigN), ones, new long[]{49999, 2500000000L}},
        };
        for (Object[] t : tests) {
            long[] got = sol.bestHub((int) t[1], (int[][]) t[2], (int[]) t[3]);
            long[] expected = (long[]) t[4];
            String status = Arrays.equals(got, expected) ? "PASS" : "FAIL";
            System.out.printf("%s %s: expected=%s got=%s%n", status, t[0], Arrays.toString(expected), Arrays.toString(got));
        }
    }
}
