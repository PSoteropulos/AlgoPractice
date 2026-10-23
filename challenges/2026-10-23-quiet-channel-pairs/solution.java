public class solution {
    public static int countQuietPairs(int[] masks) {
        // TODO: implement
        return 0;
    }

    public static void main(String[] args) {
        Object[][] cases = {
            {"example 1", new int[] { 1, 2, 3 }, 1},
            {"example 2", new int[] { 6, 9, 5, 10 }, 2},
            {"example 3", new int[] { 0, 0, 5 }, 3},
            {"edge: single transmitter", new int[] { 7 }, 0},
            {"edge: identical masks overlap", new int[] { 4, 4, 4 }, 0},
            {"edge: max mask with zero", new int[] { 1048575, 0 }, 1},
            {"edge: all distinct single channels", new int[] { 1, 2, 4, 8, 16 }, 10},
        };

        for (Object[] t : cases) {
            int actual = countQuietPairs(((int[]) t[1]).clone());
            int expected = (Integer) t[2];
            String status = actual == expected ? "PASS" : "FAIL";
            System.out.printf("[%s] %s: expected=%d actual=%d%n", status, t[0], expected, actual);
        }
    }
}
