import java.util.Arrays;

public class solution {
    public long countCalmStretches(int[] readings, int tolerance) {
        // TODO: implement
        return -1;
    }

    public static void main(String[] args) {
        solution sol = new solution();
        int[] big = new int[100000];
        Arrays.fill(big, 1);

        Object[][] tests = {
            {"example 1", new int[]{1, 3, 2, 5}, 1, 5L},
            {"example 2", new int[]{4, 4, 4}, 0, 6L},
            {"example 3", new int[]{2, 5, 3, 4, 8}, 2, 8L},
            {"extra: single reading", new int[]{10}, 0, 1L},
            {"extra: huge tolerance", new int[]{1, 1000000000, 5}, 1000000000, 6L},
            {"extra: increasing", new int[]{1, 2, 3, 4, 5}, 1, 9L},
            {"extra: large uniform", big, 0, 5000050000L},
        };

        for (Object[] t : tests) {
            long got = sol.countCalmStretches((int[]) t[1], (int) t[2]);
            long expected = (long) t[3];
            String status = got == expected ? "PASS" : "FAIL";
            System.out.printf("%s %s: expected=%d got=%d%n", status, t[0], expected, got);
        }
    }
}
