public class solution {
    public static int widestSpacing(int[] posts, int k) {
        // TODO: implement
        return 0;
    }

    public static void main(String[] args) {
        Object[][] cases = {
            {"example 1", new int[] { 1, 2, 8, 4, 9 }, 3, 3},
            {"example 2", new int[] { 5, 5, 5, 5 }, 2, 0},
            {"example 3", new int[] { 10, 1, 6 }, 2, 9},
            {"edge: lamp on every post", new int[] { 7, 1, 3 }, 3, 2},
            {"edge: two posts", new int[] { 1000000000, 1 }, 2, 999999999},
            {"edge: uneven clusters", new int[] { 1, 2, 3, 100, 101, 102 }, 3, 2},
            {"edge: two lamps spread over many posts", new int[] { 3, 9, 27, 81, 243 }, 2, 240},
        };

        for (Object[] t : cases) {
            int actual = widestSpacing(((int[]) t[1]).clone(), (Integer) t[2]);
            int expected = (Integer) t[3];
            String status = actual == expected ? "PASS" : "FAIL";
            System.out.printf("[%s] %s: expected=%d actual=%d%n", status, t[0], expected, actual);
        }
    }
}
