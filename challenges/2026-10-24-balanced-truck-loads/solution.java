public class solution {
    public static int minMaxTruckLoad(int[] weights, int k) {
        // TODO: implement
        return 0;
    }

    public static void main(String[] args) {
        Object[][] cases = {
            {"example 1", new int[] { 3, 5, 2, 7 }, 2, 9},
            {"example 2", new int[] { 4, 4, 4, 4, 4 }, 3, 8},
            {"example 3", new int[] { 9, 1, 1, 1 }, 2, 9},
            {"edge: single crate", new int[] { 8 }, 1, 8},
            {"edge: one crate per truck", new int[] { 7, 7, 7, 7 }, 4, 7},
            {"edge: mixed weights", new int[] { 6, 5, 4, 3, 3, 3 }, 3, 9},
            {"edge: split 1..7 over two trucks", new int[] { 1, 2, 3, 4, 5, 6, 7 }, 2, 14},
        };

        for (Object[] t : cases) {
            int actual = minMaxTruckLoad(((int[]) t[1]).clone(), (Integer) t[2]);
            int expected = (Integer) t[3];
            String status = actual == expected ? "PASS" : "FAIL";
            System.out.printf("[%s] %s: expected=%d actual=%d%n", status, t[0], expected, actual);
        }
    }
}
