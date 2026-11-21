public class solution {
    public long maxRouteEarnings(int[][] earnings, int moveCost) {
        // TODO: implement
        return -2;
    }

    public static void main(String[] args) {
        solution sol = new solution();

        int wideM = 50000;
        int[][] wide = new int[2][wideM];
        wide[0][0] = 100000;
        wide[1][wideM - 1] = 100000;

        int[][] tall = new int[100000][1];
        for (int[] row : tall) row[0] = 100000;

        Object[][] tests = {
            {"example 1", new int[][] {{3, 1, 4}, {1, 5, 1}, {2, 1, 6}}, 1, 13L},
            {"example 2", new int[][] {{10, 0, 0, 0, 9}, {0, 0, 0, 0, 9}, {10, 0, 0, 0, 0}}, 3, 20L},
            {"example 3", new int[][] {{-5}, {-2}, {7}}, 4, 0L},
            {"extra: free driving takes each day's max", new int[][] {{2, 9, 1, 0}, {8, 0, 0, 3}}, 0, 17L},
            {"extra: single all-negative day", new int[][] {{-3, -1, -7}}, 5, -1L},
            {"extra: wide street, long drive pays off", wide, 1, 150001L},
            {"extra: totals exceed 32-bit", tall, 7, 10000000000L},
        };

        for (Object[] t : tests) {
            long got = sol.maxRouteEarnings((int[][]) t[1], (int) t[2]);
            long expected = (long) t[3];
            String status = got == expected ? "PASS" : "FAIL";
            System.out.printf("%s %s: expected=%d got=%d%n", status, t[0], expected, got);
        }
    }
}
