import java.util.Arrays;

public class solution {
    public static int[] countSpecialBadges(long[][] queries) {
        // TODO: implement
        return new int[0];
    }

    public static void main(String[] args) {
        Object[][] cases = {
            {"example 1", new long[][] { {1, 10}, {10, 50}, {1, 1} }, new int[] { 2, 2, 0 }},
            {"example 2", new long[][] { {4, 4}, {5, 8}, {1, 100} }, new int[] { 1, 0, 4 }},
            {"example 3", new long[][] { {1, 1000000000000L} }, new int[] { 78498 }},
            {"edge: no squares of primes in range", new long[][] { {2, 3}, {24, 26} }, new int[] { 0, 1 }},
            {"edge: square of largest prime below 10^6", new long[][] { {999966000289L, 999966000289L} }, new int[] { 1 }},
            {"edge: square of composite only", new long[][] { {36, 36}, {16, 16} }, new int[] { 0, 0 }},
        };

        for (Object[] t : cases) {
            long[][] queries = ((long[][]) t[1]).clone();
            int[] expected = (int[]) t[2];
            int[] actual = countSpecialBadges(queries);
            String status = Arrays.equals(actual, expected) ? "PASS" : "FAIL";
            System.out.printf("[%s] %s: expected=%s actual=%s%n", status, t[0], Arrays.toString(expected), Arrays.toString(actual));
        }
    }
}
