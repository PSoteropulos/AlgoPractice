import java.util.Arrays;

public class solution {
    public long minSplitCost(int[] weights, int k) {
        // TODO: implement
        return -1;
    }

    public static void main(String[] args) {
        solution sol = new solution();
        int[] big = new int[20000];
        Arrays.fill(big, 1);

        Object[][] tests = {
            {"example 1", new int[]{1, 2, 3, 4}, 2, 52L},
            {"example 2", new int[]{3, 1, 4, 1, 5}, 3, 66L},
            {"example 3", new int[]{0, 0, 5}, 3, 25L},
            {"extra: single crate", new int[]{7}, 1, 49L},
            {"extra: k = n", new int[]{1, 2, 3, 4}, 4, 30L},
            {"extra: k = 1", new int[]{1, 2, 3, 4}, 1, 100L},
            {"extra: large uniform", big, 100, 4000000L},
        };

        for (Object[] t : tests) {
            long got = sol.minSplitCost((int[]) t[1], (int) t[2]);
            long expected = (long) t[3];
            String status = got == expected ? "PASS" : "FAIL";
            System.out.printf("%s %s: expected=%d got=%d%n", status, t[0], expected, got);
        }
    }
}
