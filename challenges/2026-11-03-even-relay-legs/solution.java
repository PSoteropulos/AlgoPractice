import java.util.Arrays;

public class solution {
    public int minLongestLeg(int[] distances, int k) {
        // TODO: implement
        return 0;
    }

    public static void main(String[] args) {
        solution sol = new solution();
        int[] large = new int[100000];
        Arrays.fill(large, 10000);
        Object[][] tests = {
            {new int[]{4, 9, 3, 6, 2, 8}, 3, 13},
            {new int[]{5, 5, 5, 5}, 2, 10},
            {new int[]{12, 1, 1}, 3, 12},
            {new int[]{7}, 1, 7}, // extra: single checkpoint gap
            {new int[]{0, 0, 0}, 2, 0}, // extra: all zero gaps
            {new int[]{1, 2, 3, 4, 5}, 1, 15}, // extra: one runner takes everything
            {new int[]{3, 1, 4, 1, 5, 9, 2, 6}, 8, 9}, // extra: one gap per runner
            {large, 50000, 20000}, // extra: large input
        };

        for (Object[] t : tests) {
            int[] distances = (int[]) t[0];
            int k = (int) t[1];
            int expected = (int) t[2];
            int got = sol.minLongestLeg(distances, k);
            String status = got == expected ? "PASS" : "FAIL";
            System.out.printf("%s n=%d k=%d expected=%d got=%d%n", status, distances.length, k, expected, got);
        }
    }
}
