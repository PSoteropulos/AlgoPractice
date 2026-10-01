import java.util.*;

public class solution {

    public static long kthClosestGap(int[] a, int[] b, long k) {
        // TODO: implement
        return -1;
    }

    public static void main(String[] args) {
        List<Object[]> tests = new ArrayList<>();
        tests.add(new Object[]{"example 1", new int[]{8, 1, 4}, new int[]{6, 2}, 4L, 2L});
        tests.add(new Object[]{"example 2", new int[]{5, 5}, new int[]{5}, 2L, 0L});
        tests.add(new Object[]{"example 3", new int[]{7, -3, 0}, new int[]{10, -1}, 4L, 8L});
        tests.add(new Object[]{"edge: k = 1 smallest gap", new int[]{8, 1, 4}, new int[]{6, 2}, 1L, 1L});
        tests.add(new Object[]{"edge: k = last, largest gap", new int[]{8, 1, 4}, new int[]{6, 2}, 6L, 6L});
        tests.add(new Object[]{"edge: extreme values", new int[]{-1000000000}, new int[]{1000000000}, 1L, 2000000000L});
        tests.add(new Object[]{"edge: all equal", new int[]{3, 3, 3}, new int[]{3, 3}, 6L, 0L});

        for (Object[] test : tests) {
            String name = (String) test[0];
            int[] a = ((int[]) test[1]).clone();
            int[] b = ((int[]) test[2]).clone();
            long k = (Long) test[3];
            long expected = (Long) test[4];

            long actual = kthClosestGap(a, b, k);
            String status = actual == expected ? "PASS" : "FAIL";
            System.out.println("[" + status + "] " + name + ": expected=" + expected + " actual=" + actual);
        }
    }
}
