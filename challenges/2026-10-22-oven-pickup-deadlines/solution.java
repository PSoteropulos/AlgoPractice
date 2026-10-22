public class solution {
    public static int maxOrders(int[][] orders) {
        // TODO: implement
        return 0;
    }

    public static void main(String[] args) {
        Object[][] cases = {
            {"example 1", new int[][] { new int[] { 3, 5 }, new int[] { 2, 6 }, new int[] { 4, 7 } }, 2},
            {"example 2", new int[][] { new int[] { 5, 5 }, new int[] { 4, 6 }, new int[] { 2, 6 }, new int[] { 1, 8 } }, 3},
            {"example 3", new int[][] { new int[] { 2, 2 }, new int[] { 2, 2 }, new int[] { 2, 4 } }, 2},
            {"edge: bake time exceeds deadline", new int[][] { new int[] { 6, 5 } }, 0},
            {"edge: identical tight orders", new int[][] { new int[] { 1, 1 }, new int[] { 1, 1 }, new int[] { 1, 1 } }, 1},
            {"edge: unsorted input, swap needed", new int[][] { new int[] { 100, 200 }, new int[] { 200, 1300 }, new int[] { 1000, 1250 }, new int[] { 2000, 3200 } }, 3},
            {"edge: maximum values", new int[][] { new int[] { 1000000000, 1000000000 }, new int[] { 1000000000, 1000000000 }, new int[] { 999999999, 1000000000 } }, 1},
        };

        for (Object[] t : cases) {
            int[][] orders = ((int[][]) t[1]).clone();
            for (int i = 0; i < orders.length; i++) orders[i] = orders[i].clone();
            int actual = maxOrders(orders);
            int expected = (Integer) t[2];
            String status = actual == expected ? "PASS" : "FAIL";
            System.out.printf("[%s] %s: expected=%d actual=%d%n", status, t[0], expected, actual);
        }
    }
}
