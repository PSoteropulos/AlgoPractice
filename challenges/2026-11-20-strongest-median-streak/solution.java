import java.util.*;

public class solution {
    public int strongestMedian(int[] nums, int k) {
        // TODO: implement
        return 0;
    }

    public static void main(String[] args) {
        solution sol = new solution();
        final int N = 100000;
        int[] increasing = new int[N];
        int[] alternating = new int[N];
        for (int i = 0; i < N; i++) {
            increasing[i] = i + 1;
            alternating[i] = i % 2 == 0 ? 1000000000 : 1;
        }

        Object[][] tests = {
            {"example 1", new int[]{1, 2, 3, 2, 1}, 3, 2},
            {"example 2", new int[]{5, 1, 8, 7, 2, 9}, 2, 7},
            {"example 3", new int[]{3, 9, 1, 9, 1, 9, 2}, 4, 9},
            {"extra: single hour", new int[]{7}, 1, 7},
            {"extra: even length takes the smaller middle", new int[]{4, 8}, 2, 4},
            {"extra: odd-length streak beats every pair", new int[]{6, 2, 6, 2, 6, 2}, 2, 6},
            {"extra: 100000 increasing, k = 50000", increasing, 50000, 75000},
            {"extra: 100000 alternating, whole array", alternating, N, 1},
            {"extra: 100000 alternating, k = n - 1", alternating, N - 1, 1000000000},
        };

        for (Object[] t : tests) {
            int expected = (int) t[3];
            int got = sol.strongestMedian(((int[]) t[1]).clone(), (int) t[2]);
            String status = got == expected ? "PASS" : "FAIL";
            System.out.printf("%s %s: expected=%d got=%d%n", status, t[0], expected, got);
        }
    }
}
