import java.util.*;

public class solution {
    public int earliestArrival(int n, int[][] ferries, int k) {
        // TODO: implement
        return 0;
    }

    private static int[][] copy(int[][] v) {
        int[][] c = new int[v.length][];
        for (int i = 0; i < v.length; i++) c[i] = v[i].clone();
        return c;
    }

    public static void main(String[] args) {
        solution sol = new solution();
        int[][] chain = new int[9999][];
        for (int i = 0; i < 9999; i++) chain[i] = new int[]{i, i + 1, 1, 2};
        int[][] ex2 = {{0, 1, 3, 1}, {1, 4, 2, 20}, {0, 2, 1, 1}, {2, 3, 1, 1}, {3, 4, 6, 1}};
        int[][] timedChain = {{0, 1, 1, 1}, {1, 2, 1, 9}, {2, 3, 1, 9}, {1, 3, 5, 1}};

        Object[][] tests = {
            {"example 1", 4, new int[][]{{0, 1, 2, 5}, {1, 3, 3, 4}, {0, 2, 4, 3}, {2, 3, 1, 10}}, 0, 7},
            {"example 2", 5, ex2, 1, 5},
            {"example 3", 3, new int[][]{{0, 1, 5, 2}}, 2, -1},
            {"extra: example 2 without vouchers", 5, ex2, 0, 8},
            {"extra: parallel routes, slower ride wins", 3, new int[][]{{0, 1, 4, 7}, {0, 1, 9, 1}, {1, 2, 3, 5}}, 0, 8},
            {"extra: one voucher can't fix a two-wait chain", 4, timedChain, 1, 6},
            {"extra: two vouchers unlock the chain", 4, timedChain, 2, 3},
            {"extra: 10000-island chain, no vouchers", 10000, chain, 0, 19997},
            {"extra: 10000-island chain, 10 vouchers", 10000, chain, 10, 19977},
        };

        for (Object[] t : tests) {
            int expected = (int) t[4];
            int got = sol.earliestArrival((int) t[1], copy((int[][]) t[2]), (int) t[3]);
            String status = got == expected ? "PASS" : "FAIL";
            System.out.printf("%s %s: expected=%d got=%d%n", status, t[0], expected, got);
        }
    }
}
