import java.util.*;

public class solution {

    public static long countDimWindows(int[] nums) {
        // TODO: implement
        return -1;
    }

    public static void main(String[] args) {
        List<Object[]> tests = new ArrayList<>();
        tests.add(new Object[]{"example 1", new int[]{1, 2, 3}, 4L});
        tests.add(new Object[]{"example 2", new int[]{5, 5, 5}, 2L});
        tests.add(new Object[]{"example 3", new int[]{0, 0}, 3L});
        tests.add(new Object[]{"edge: single power of two", new int[]{4}, 1L});
        tests.add(new Object[]{"edge: single value with three bits", new int[]{7}, 0L});
        tests.add(new Object[]{"edge: two readings", new int[]{1, 3}, 2L});
        tests.add(new Object[]{"edge: 200000 zeros need 64-bit count", new int[200000], 20000100000L});

        for (Object[] test : tests) {
            String name = (String) test[0];
            int[] nums = ((int[]) test[1]).clone();
            long expected = (Long) test[2];

            long actual = countDimWindows(nums);
            String status = actual == expected ? "PASS" : "FAIL";
            System.out.println("[" + status + "] " + name + ": expected=" + expected + " actual=" + actual);
        }
    }
}
