import java.util.*;

public class solution {

    public static int longestSteadyWindow(int[] occupancy, int tolerance, int minPeak) {
        // TODO: implement
        return 0;
    }

    public static void main(String[] args) {
        List<Object[]> tests = new ArrayList<>();
        tests.add(new Object[]{"example 1", new int[]{4,6,5,7,9,8,3}, 3, 8, 3});
        tests.add(new Object[]{"example 2", new int[]{2,2,2,2}, 0, 5, 0});
        tests.add(new Object[]{"example 3", new int[]{10,10,10,10,10}, 0, 10, 5});
        tests.add(new Object[]{"edge: single element meets peak", new int[]{5}, 0, 5, 1});
        tests.add(new Object[]{"edge: single element below peak", new int[]{5}, 0, 6, 0});

        for (Object[] test : tests) {
            String name = (String) test[0];
            int[] occupancy = (int[]) test[1];
            int tolerance = (Integer) test[2];
            int minPeak = (Integer) test[3];
            int expected = (Integer) test[4];
            int got = longestSteadyWindow(occupancy, tolerance, minPeak);
            String status = got == expected ? "PASS" : "FAIL";
            System.out.println("[" + status + "] " + name + ": expected=" + expected + " actual=" + got);
        }
    }
}
