import java.util.Arrays;

public class solution {
    public long countExactAlarmWindows(int[] nums, int target) {
        // TODO: implement
        return -1;
    }

    public static void main(String[] args) {
        solution sol = new solution();
        int[] ones = new int[100000];
        Arrays.fill(ones, 1);
        Object[][] tests = {
            {"example 1", new int[]{1, 2, 3, 4}, 3, 4L},
            {"example 2", new int[]{5, 5, 5}, 5, 6L},
            {"example 3", new int[]{0, 2, 0, 1}, 2, 4L},
            {"extra: target zero counts quiet runs", new int[]{0, 0, 1, 0}, 0, 4L},
            {"extra: target bit never appears alone", new int[]{7}, 3, 0L},
            {"extra: stray bit splits windows", new int[]{4, 1, 2, 4, 2}, 6, 3L},
            {"extra: 100000 ones (64-bit answer)", ones, 1, 5000050000L},
        };

        for (Object[] t : tests) {
            long got = sol.countExactAlarmWindows((int[]) t[1], (int) t[2]);
            long expected = (long) t[3];
            String status = got == expected ? "PASS" : "FAIL";
            System.out.printf("%s %s: expected=%d got=%d%n", status, t[0], expected, got);
        }
    }
}
