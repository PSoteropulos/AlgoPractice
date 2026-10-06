public class solution {
    public static long minFloodlightCost(int[] x, int[] w, long c) {
        // TODO: implement
        return 0;
    }

    public static void main(String[] args) {
        Object[][] cases = {
            {"example 1", new int[] { 1, 2, 6, 7, 8 }, new int[] { 3, 1, 2, 2, 1 }, 5L, 14L},
            {"example 2", new int[] { 0, 10, 20 }, new int[] { 1, 1, 1 }, 100L, 120L},
            {"example 3", new int[] { 4 }, new int[] { 7 }, 3L, 3L},
            {"edge: free lights, every stall lit", new int[] { 0, 5 }, new int[] { 2, 2 }, 0L, 0L},
            {"edge: uniform line", new int[] { 0, 1, 2, 3, 4, 5 }, new int[] { 1, 1, 1, 1, 1, 1 }, 2L, 8L},
            {"edge: large answer", new int[] { 0, 1000000, 2000000, 3000000 }, new int[] { 10000, 10000, 10000, 10000 }, 1000000000L, 4000000000L},
        };

        for (Object[] t : cases) {
            long actual = minFloodlightCost(((int[]) t[1]).clone(), ((int[]) t[2]).clone(), (long) t[3]);
            long expected = (long) t[4];
            String status = actual == expected ? "PASS" : "FAIL";
            System.out.printf("[%s] %s: expected=%d actual=%d%n", status, t[0], expected, actual);
        }
    }
}
