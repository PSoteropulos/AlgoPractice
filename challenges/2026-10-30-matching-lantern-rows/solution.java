import java.util.Arrays;

public class solution {
    public long countLanternRows(int[] heights) {
        // TODO: implement
        return 0;
    }

    public static void main(String[] args) {
        solution sol = new solution();
        int[] big = new int[100000];
        Arrays.fill(big, 1);

        int[][] inputs = {
            {3, 1, 3},
            {1, 4, 3, 3, 2},
            {5, 1, 6, 5},
            {7},                  // extra: single lantern
            {4, 4, 1, 4, 4},      // extra: repeated maxima around a dip
            {2, 2, 2},            // extra: all equal -> n(n+1)/2
            big,                  // extra: needs 64-bit result
        };
        long[] expected = {4, 6, 4, 1, 11, 6, 5000050000L};

        for (int i = 0; i < inputs.length; i++) {
            long got = sol.countLanternRows(inputs[i]);
            String status = got == expected[i] ? "PASS" : "FAIL";
            System.out.printf("%s n=%d expected=%d got=%d%n", status, inputs[i].length, expected[i], got);
        }
    }
}
