import java.util.Arrays;

public class solution {
    public static boolean[] canReachAll(int n, int[][] cables, int[][] queries) {
        // TODO: implement
        return new boolean[0];
    }

    public static void main(String[] args) {
        Object[][] cases = {
            {"example 1", 5, new int[][] { { 0, 1, 4 }, { 1, 2, 6 }, { 2, 3, 2 }, { 3, 4, 9 } }, new int[][] { { 0, 2, 7 }, { 0, 2, 6 }, { 0, 4, 10 }, { 2, 3, 3 }, { 3, 3, 1 } }, new boolean[] { true, false, true, true, true }},
            {"example 2", 4, new int[][] { { 0, 1, 5 }, { 0, 1, 1 }, { 2, 3, 3 } }, new int[][] { { 0, 1, 1 }, { 0, 1, 2 }, { 1, 2, 100 }, { 2, 3, 4 } }, new boolean[] { false, true, false, true }},
            {"example 3", 3, new int[][] { }, new int[][] { { 1, 1, 1 }, { 0, 2, 1000000000 } }, new boolean[] { true, false }},
            {"edge: single depot", 1, new int[][] { }, new int[][] { { 0, 0, 1 } }, new boolean[] { true }},
            {"edge: strict boundary, unsorted queries", 4, new int[][] { { 0, 1, 3 }, { 1, 2, 3 }, { 2, 3, 8 } }, new int[][] { { 0, 3, 9 }, { 0, 2, 4 }, { 0, 2, 3 }, { 0, 3, 8 } }, new boolean[] { true, true, false, false }},
            {"edge: self-loop cable", 2, new int[][] { { 0, 0, 1 }, { 0, 1, 5 } }, new int[][] { { 0, 1, 5 }, { 0, 1, 6 } }, new boolean[] { false, true }},
        };

        for (Object[] t : cases) {
            boolean[] actual = canReachAll((int) t[1], (int[][]) t[2], (int[][]) t[3]);
            boolean[] expected = (boolean[]) t[4];
            String status = Arrays.equals(actual, expected) ? "PASS" : "FAIL";
            System.out.printf("[%s] %s: expected=%s actual=%s%n", status, t[0], Arrays.toString(expected), Arrays.toString(actual));
        }
    }
}
