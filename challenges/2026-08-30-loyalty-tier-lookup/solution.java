import java.util.*;

public class solution {

    public static int findTier(int[] thresholds, int points) {
        // TODO: implement
        return -1;
    }

    public static void main(String[] args) {
        List<Object[]> tests = new ArrayList<>();
        tests.add(new Object[]{new int[]{100, 250, 500, 1000}, 300, 1});
        tests.add(new Object[]{new int[]{100, 250, 500, 1000}, 50, -1});
        tests.add(new Object[]{new int[]{100, 250, 500, 1000}, 1000, 3});
        tests.add(new Object[]{new int[]{100, 250, 500, 1000}, 249, 0});   // extra: just below the next threshold
        tests.add(new Object[]{new int[]{5}, 5, 0});                       // extra: single-tier array, exact match

        for (Object[] test : tests) {
            int[] thresholds = (int[]) test[0];
            int points = (int) test[1];
            int expected = (int) test[2];
            int got = findTier(thresholds, points);
            String status = got == expected ? "PASS" : "FAIL";
            System.out.println(status + " thresholds=" + Arrays.toString(thresholds) + " points=" + points
                    + " expected=" + expected + " got=" + got);
        }
    }
}
