import java.util.Arrays;

public class solution {
    public long[] windowDeviationCosts(int[] nums, int k) {
        // TODO: implement
        return new long[0];
    }

    public static void main(String[] args) {
        solution sol = new solution();
        int[] big = new int[100000];
        for (int i = 0; i < big.length; i++) big[i] = (i % 2 == 0) ? -1000000000 : 1000000000;

        int[][] inputs = {
            {1, 3, 2, 6, 4},
            {5, 5, 5, 5},
            {1, 10, 4, 7},
            {9},                      // extra: single reading
            {-3, 8, -1, 2, 2, 9},     // extra: negatives, even k
            {-5, -1, -9, 4},          // extra: negatives, odd k
            big,                      // extra: needs 64-bit result
        };
        int[] ks = {3, 2, 4, 1, 2, 3, 100000};
        long[][] expected = {
            {2, 4, 4},
            {0, 0, 0},
            {12},
            {0},
            {11, 9, 3, 0, 7},
            {8, 13},
            {100000000000000L},
        };

        for (int i = 0; i < inputs.length; i++) {
            long[] got = sol.windowDeviationCosts(inputs[i], ks[i]);
            String status = Arrays.equals(got, expected[i]) ? "PASS" : "FAIL";
            System.out.printf("%s n=%d k=%d expected=%s got=%s%n", status, inputs[i].length, ks[i],
                    Arrays.toString(expected[i]), Arrays.toString(got));
        }
    }
}
