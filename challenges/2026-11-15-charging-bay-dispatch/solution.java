import java.util.*;

public class solution {
    public int[][] assignBays(int[][] vehicles, int m) {
        // TODO: implement
        return new int[0][];
    }

    private static boolean sameResult(int[][] a, int[][] b) {
        if (a == null || a.length != b.length) return false;
        for (int i = 0; i < a.length; i++) {
            if (a[i] == null || a[i].length != 2 || a[i][0] != b[i][0] || a[i][1] != b[i][1]) return false;
        }
        return true;
    }

    private static int[][] copy(int[][] v) {
        int[][] c = new int[v.length][];
        for (int i = 0; i < v.length; i++) c[i] = v[i].clone();
        return c;
    }

    public static void main(String[] args) {
        solution sol = new solution();
        int[][] many = new int[100000][];
        int[][] manyExpected = new int[100000][];
        for (int i = 0; i < 100000; i++) {
            many[i] = new int[]{0, 1};
            manyExpected[i] = new int[]{0, i + 1};
        }

        Object[][] tests = {
            {"example 1", new int[][]{{0, 5}, {1, 2}, {1, 1}, {2, 3}, {6, 1}}, 2,
                new int[][]{{0, 5}, {1, 4}, {1, 2}, {1, 7}, {0, 7}}},
            {"example 2", new int[][]{{3, 2}, {0, 4}, {2, 2}, {4, 1}}, 1,
                new int[][]{{0, 9}, {0, 4}, {0, 7}, {0, 5}}},
            {"example 3", new int[][]{{0, 4}, {0, 4}, {2, 1}, {3, 2}}, 3,
                new int[][]{{0, 4}, {1, 4}, {2, 3}, {2, 5}}},
            {"extra: idle gap between arrivals", new int[][]{{0, 1}, {10, 1}}, 1,
                new int[][]{{0, 1}, {0, 11}}},
            {"extra: full ties broken by index", new int[][]{{5, 3}, {5, 3}, {5, 3}, {0, 10}}, 2,
                new int[][]{{1, 8}, {1, 11}, {0, 13}, {0, 10}}},
            {"extra: more bays than buses", new int[][]{{7, 3}, {7, 3}}, 5,
                new int[][]{{0, 10}, {1, 10}}},
            {"extra: 100000 buses, one bay", many, 1, manyExpected},
        };

        for (Object[] t : tests) {
            int[][] expected = (int[][]) t[3];
            int[][] got = sol.assignBays(copy((int[][]) t[1]), (int) t[2]);
            String status = sameResult(got, expected) ? "PASS" : "FAIL";
            if (expected.length > 10) {
                System.out.printf("%s %s%n", status, t[0]);
            } else {
                System.out.printf("%s %s: expected=%s got=%s%n", status, t[0],
                    Arrays.deepToString(expected), Arrays.deepToString(got));
            }
        }
    }
}
