import java.util.Arrays;

public class solution {
    public boolean[] reachableByTruck(int n, int[][] bridges, int[][] queries) {
        // TODO: implement
        return new boolean[queries.length];
    }

    public static void main(String[] args) {
        solution sol = new solution();
        int[][] chain = new int[99999][];
        for (int i = 0; i < chain.length; i++) chain[i] = new int[]{i, i + 1, 5};

        Object[][] tests = {
            {"example 1", 5,
                new int[][]{{0, 1, 8}, {1, 2, 5}, {2, 3, 9}, {3, 4, 2}},
                new int[][]{{0, 2, 5}, {0, 2, 6}, {2, 4, 2}, {2, 4, 3}, {3, 3, 100}},
                new boolean[]{true, false, true, false, true}},
            {"example 2", 4,
                new int[][]{{0, 1, 3}, {0, 1, 7}, {2, 3, 4}},
                new int[][]{{0, 1, 7}, {0, 1, 8}, {1, 2, 1}},
                new boolean[]{true, false, false}},
            {"example 3", 3, new int[0][], new int[][]{{0, 2, 1}, {1, 1, 1}}, new boolean[]{false, true}},
            {"extra: single town", 1, new int[0][], new int[][]{{0, 0, 1}}, new boolean[]{true}},
            {"extra: large chain", 100000, chain,
                new int[][]{{0, 99999, 5}, {0, 99999, 6}, {50000, 50001, 1}},
                new boolean[]{true, false, true}},
        };

        for (Object[] t : tests) {
            boolean[] got = sol.reachableByTruck((int) t[1], (int[][]) t[2], (int[][]) t[3]);
            boolean[] expected = (boolean[]) t[4];
            String status = Arrays.equals(got, expected) ? "PASS" : "FAIL";
            System.out.printf("%s %s: expected=%s got=%s%n", status, t[0], Arrays.toString(expected), Arrays.toString(got));
        }
    }
}
