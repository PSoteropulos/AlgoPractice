import java.util.*;

public class solution {

    public static int minMuralCost(int n, int k, int[][] cost) {
        // TODO: implement
        return -1;
    }

    public static void main(String[] args) {
        List<Object[]> tests = new ArrayList<>();
        tests.add(new Object[]{"example 1", 3, 3,
                new int[][]{{1, 2, 3}, {3, 2, 1}, {2, 1, 3}}, 3});
        tests.add(new Object[]{"example 2", 4, 3,
                new int[][]{{1, 5, 3}, {2, 9, 4}, {5, 1, 2}, {3, 6, 4}}, 9});
        tests.add(new Object[]{"example 3", 1, 3,
                new int[][]{{5, 2, 9}}, 2});
        tests.add(new Object[]{"edge: n=2, k=3", 2, 3,
                new int[][]{{4, 1, 9}, {2, 3, 8}}, 3});
        tests.add(new Object[]{"edge: all-equal costs force any valid pattern to same total", 5, 3,
                new int[][]{{2, 2, 2}, {2, 2, 2}, {2, 2, 2}, {2, 2, 2}, {2, 2, 2}}, 10});

        for (Object[] test : tests) {
            String name = (String) test[0];
            int n = (int) test[1];
            int k = (int) test[2];
            int[][] cost = (int[][]) test[3];
            int expected = (int) test[4];
            int got = minMuralCost(n, k, cost);
            String status = got == expected ? "PASS" : "FAIL";
            System.out.println("[" + status + "] " + name + ": expected=" + expected + " actual=" + got);
        }
    }
}
