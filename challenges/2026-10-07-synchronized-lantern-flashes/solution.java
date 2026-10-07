public class solution {
    public static long countGrandFlashes(int[] p, long T) {
        // TODO: implement
        return 0;
    }

    public static void main(String[] args) {
        Object[][] cases = {
            {"example 1", new int[] { 4, 6 }, 40L, 3L},
            {"example 2", new int[] { 5, 7, 35 }, 100L, 2L},
            {"example 3", new int[] { 1000000000, 999999999 }, 1000000000000000L, 0L},
            {"edge: single lantern period 1", new int[] { 1 }, 1L, 1L},
            {"edge: period larger than limit", new int[] { 3 }, 2L, 0L},
            {"edge: duplicate periods", new int[] { 7, 7, 7 }, 49L, 7L},
            {"edge: first nine primes", new int[] { 2, 3, 5, 7, 11, 13, 17, 19, 23 }, 1000000000000000L, 4482438L},
        };

        for (Object[] t : cases) {
            long actual = countGrandFlashes(((int[]) t[1]).clone(), (long) t[2]);
            long expected = (long) t[3];
            String status = actual == expected ? "PASS" : "FAIL";
            System.out.printf("[%s] %s: expected=%d actual=%d%n", status, t[0], expected, actual);
        }
    }
}
