import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class solution {
    public List<Integer> redundantTrails(int n, int[][] trails) {
        // TODO: implement
        return new ArrayList<>(List.of(-1));
    }

    public static void main(String[] args) {
        solution sol = new solution();
        int bigN = 100000;
        int[][] bigTrails = new int[bigN][];
        for (int i = 0; i < bigN - 1; i++) bigTrails[i] = new int[] {i, i + 1};
        bigTrails[bigN - 1] = new int[] {bigN - 1, 0};

        Object[][] tests = {
            {"example 1", 4, new int[][] {{0, 1}, {1, 2}, {0, 2}, {3, 3}, {2, 3}}, List.of(2, 3)},
            {"example 2", 3, new int[][] {{0, 1}, {1, 0}, {0, 1}}, List.of(1, 2)},
            {"example 3", 6, new int[][] {{0, 1}, {2, 3}, {4, 5}, {1, 2}, {3, 4}}, List.of()},
            {"extra: no trails", 5, new int[][] {}, List.of()},
            {"extra: single clearing, only loops", 1, new int[][] {{0, 0}, {0, 0}}, List.of(0, 1)},
            {"extra: cycle closed by last trail", 5, new int[][] {{0, 1}, {2, 3}, {3, 4}, {1, 2}, {4, 0}}, List.of(4)},
            {"extra: long path then closing trail", bigN, bigTrails, List.of(bigN - 1)},
        };

        for (Object[] t : tests) {
            @SuppressWarnings("unchecked")
            List<Integer> expected = (List<Integer>) t[3];
            List<Integer> got = sol.redundantTrails((int) t[1], (int[][]) t[2]);
            String status = expected.equals(got) ? "PASS" : "FAIL";
            System.out.printf("%s %s: expected=%s got=%s%n", status, t[0], expected, got);
        }
    }
}
