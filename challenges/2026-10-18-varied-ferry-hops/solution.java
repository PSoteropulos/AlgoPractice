public class solution {
    public static long minTotalFee(int[] fees) {
        // TODO: implement
        return -1;
    }

    public static void main(String[] args) {
        Object[][] cases = {
            {"example 1", new int[] { 4, 1, 5, 2, 3 }, 5L},
            {"example 2", new int[] { 3, 9, 1, 1 }, 3L},
            {"example 3", new int[] { 1, 1, 1, 1, 1, 1, 1 }, 3L},
            {"edge: single dock", new int[] { 7 }, 0L},
            {"edge: two docks", new int[] { 5, 2 }, 5L},
            {"edge: eight equal fees", new int[] { 2, 2, 2, 2, 2, 2, 2, 2 }, 6L},
            {"edge: thirteen unit fees", new int[] { 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 }, 5L},
            {"edge: large fees", new int[] { 1000000000, 1000000000, 1000000000, 1000000000 }, 1000000000L},
        };

        for (Object[] t : cases) {
            long actual = minTotalFee(((int[]) t[1]).clone());
            long expected = (Long) t[2];
            String status = actual == expected ? "PASS" : "FAIL";
            System.out.printf("[%s] %s: expected=%d actual=%d%n", status, t[0], expected, actual);
        }
    }
}
