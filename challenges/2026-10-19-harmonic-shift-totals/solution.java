public class solution {
    public static long countBalancedSegments(int[] deltas, int k) {
        // TODO: implement
        return -1;
    }

    public static void main(String[] args) {
        Object[][] cases = {
            {"example 1", new int[] { 4, 5, 0, -2, -3, 1 }, 5, 5L},
            {"example 2", new int[] { 2, 2, 2 }, 2, 3L},
            {"example 3", new int[] { -7, 3, 4, -5, 5 }, 5, 4L},
            {"edge: all zeros", new int[] { 0, 0, 0, 0 }, 3, 6L},
            {"edge: k is one", new int[] { -1, 1, 9, 4, -6 }, 1, 10L},
            {"edge: no valid segment", new int[] { 1, 2, 4 }, 7, 1L},
            {"edge: large values", new int[] { 1000000000, 1000000000, 1000000000 }, 1000000000, 3L},
            {"edge: single hour", new int[] { 3 }, 7, 0L},
        };

        for (Object[] t : cases) {
            long actual = countBalancedSegments(((int[]) t[1]).clone(), (Integer) t[2]);
            long expected = (Long) t[3];
            String status = actual == expected ? "PASS" : "FAIL";
            System.out.printf("[%s] %s: expected=%d actual=%d%n", status, t[0], expected, actual);
        }
    }
}
