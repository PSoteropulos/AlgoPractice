public class solution {
    public static long affordableShiftBlocks(int[] pay, int budget) {
        // TODO: implement
        return 0L;
    }

    public static void main(String[] args) {
        int[] big = new int[100000];
        java.util.Arrays.fill(big, 1);
        Object[][] cases = {
            {"example 1", new int[] { 2, 1, 3 }, 3, 4L},
            {"example 2", new int[] { 4, 5 }, 3, 0L},
            {"example 3", new int[] { 1, 1, 1, 1 }, 2, 7L},
            {"edge: single shift exactly on budget", new int[] { 5 }, 5, 1L},
            {"edge: everything affordable", new int[] { 1, 1, 1 }, 100, 6L},
            {"edge: answer exceeds 32-bit", big, 1000000000, 5000050000L},
        };

        for (Object[] t : cases) {
            long actual = affordableShiftBlocks((int[]) t[1], (Integer) t[2]);
            long expected = (Long) t[3];
            String status = actual == expected ? "PASS" : "FAIL";
            System.out.printf("[%s] %s: expected=%d actual=%d%n", status, t[0], expected, actual);
        }
    }
}
