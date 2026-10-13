import java.util.Arrays;

public class solution {
    public static int minExtraTunnels(int n, int[][] tunnels) {
        // TODO: implement
        return 0;
    }

    public static void main(String[] args) {
        Object[][] tests = {
            {5, new int[][]{{0, 1}, {0, 2}, {0, 3}, {0, 4}}, 2},
            {6, new int[][]{{0, 1}, {1, 2}, {2, 0}, {2, 3}, {3, 4}, {3, 5}}, 2},
            {4, new int[][]{{0, 1}, {1, 2}, {2, 3}, {3, 0}}, 0},
            {1, new int[][]{}, 0}, // extra: single chamber
            {3, new int[][]{{0, 1}, {0, 1}, {1, 2}}, 1}, // extra: parallel tunnels, one fragile
            {6, new int[][]{{0, 1}, {1, 2}, {2, 0}, {2, 3}, {3, 4}, {4, 5}, {5, 3}}, 1}, // extra: two loops joined by a bridge
            {6, new int[][]{{0, 1}, {1, 2}, {2, 3}, {3, 4}, {4, 5}}, 1}, // extra: path of six
        };

        for (Object[] t : tests) {
            int n = (int) t[0];
            int[][] tunnels = (int[][]) t[1];
            int expected = (int) t[2];
            int got = minExtraTunnels(n, tunnels);
            String status = got == expected ? "PASS" : "FAIL";
            System.out.println(status + " n=" + n + " tunnels=" + Arrays.deepToString(tunnels)
                + " expected=" + expected + " got=" + got);
        }
    }
}
