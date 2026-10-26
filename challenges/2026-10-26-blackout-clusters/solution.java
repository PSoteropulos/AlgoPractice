import java.util.*;

public class solution {

    public static long[] maxClusterAfterShutdowns(int[] weights, int[][] edges, int[] order) {
        // TODO: implement
        return null;
    }

    public static void main(String[] args) {
        List<Object[]> tests = new ArrayList<>();
        tests.add(new Object[]{new int[]{4, 1, 3, 2}, new int[][]{{0, 1}, {1, 2}, {2, 3}}, new int[]{1, 2, 0, 3}, new long[]{5L, 4L, 2L, 0L}});
        tests.add(new Object[]{new int[]{5, 5, 5}, new int[][]{{0, 1}, {1, 2}, {0, 2}}, new int[]{0, 1, 2}, new long[]{10L, 5L, 0L}});
        tests.add(new Object[]{new int[]{2, 7, 1, 3, 6}, new int[][]{{0, 1}, {1, 2}, {3, 4}}, new int[]{4, 0, 2, 1, 3}, new long[]{10L, 8L, 7L, 3L, 0L}});
        tests.add(new Object[]{new int[]{7}, new int[][]{}, new int[]{0}, new long[]{0L}}); // extra: single tower, no edges
        tests.add(new Object[]{new int[]{1, 1, 1, 1}, new int[][]{{0, 1}, {0, 2}, {0, 3}}, new int[]{0, 1, 2, 3}, new long[]{1L, 1L, 1L, 0L}}); // extra: removing the hub shatters a star
        tests.add(new Object[]{new int[]{1000000000, 1000000000, 1000000000, 1000000000}, new int[][]{{0, 1}, {1, 2}, {2, 3}}, new int[]{3, 2, 1, 0}, new long[]{3000000000L, 2000000000L, 1000000000L, 0L}}); // extra: sums exceed 32-bit range

        for (Object[] test : tests) {
            int[] weights = (int[]) test[0];
            int[][] edges = (int[][]) test[1];
            int[] order = (int[]) test[2];
            long[] expected = (long[]) test[3];
            long[] got = maxClusterAfterShutdowns(weights, edges, order);
            String status = Arrays.equals(got, expected) ? "PASS" : "FAIL";
            System.out.println(status + " weights=" + Arrays.toString(weights) + " edges=" + Arrays.deepToString(edges)
                    + " order=" + Arrays.toString(order) + " expected=" + Arrays.toString(expected) + " got=" + Arrays.toString(got));
        }
    }
}
