import java.util.Arrays;

public class solution {
    public int trailingZerosOfProduct(int[] nums) {
        // TODO: implement
        return -1;
    }

    public static void main(String[] args) {
        solution sol = new solution();
        int[] manyFives = new int[21];
        Arrays.fill(manyFives, 5);
        manyFives[20] = 2;
        int[] billions = new int[100000];
        Arrays.fill(billions, 1000000000);
        Object[][] tests = {
            {"example 1", new int[]{25, 8, 3}, 2},
            {"example 2", new int[]{125, 4, 7, 10}, 3},
            {"example 3", new int[]{3, 9, 11}, 0},
            {"extra: single 1", new int[]{1}, 0},
            {"extra: many fives, one two", manyFives, 1},
            {"extra: 2^10 * 5^8", new int[]{1024, 390625}, 8},
            {"extra: 100000 copies of 10^9", billions, 900000},
        };

        for (Object[] t : tests) {
            int got = sol.trailingZerosOfProduct(((int[]) t[1]).clone());
            int expected = (int) t[2];
            String status = got == expected ? "PASS" : "FAIL";
            System.out.printf("%s %s: expected=%d got=%d%n", status, t[0], expected, got);
        }
    }
}
