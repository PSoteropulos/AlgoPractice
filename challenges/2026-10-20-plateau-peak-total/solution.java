public class solution {
    public static int peakPlateauTotal(int[] h) {
        // TODO: implement
        return 0;
    }

    public static void main(String[] args) {
        Object[][] cases = {
            {"example 1", new int[] { 1, 3, 3, 2, 2, 5, 4, 4, 4 }, 3},
            {"example 2", new int[] { 7, 7, 7 }, 3},
            {"example 3", new int[] { 1, 2, 3, 4 }, 1},
            {"edge: single element", new int[] { 9 }, 1},
            {"edge: valley between peaks", new int[] { 5, 1, 5 }, 2},
            {"edge: alternating with wide ends", new int[] { 2, 2, 1, 2, 1, 1 }, 3},
            {"edge: descending negatives", new int[] { -1, -2, -2, -3 }, 1},
        };

        for (Object[] t : cases) {
            int actual = peakPlateauTotal(((int[]) t[1]).clone());
            int expected = (int) t[2];
            String status = actual == expected ? "PASS" : "FAIL";
            System.out.printf("[%s] %s: expected=%d actual=%d%n", status, t[0], expected, actual);
        }
    }
}
