import java.util.*;

public class solution {

    public static int longestStableWindow(int[] readings, int tolerance) {
        // TODO: implement
        return 0;
    }

    public static void main(String[] args) {
        List<Object[]> tests = new ArrayList<>();
        tests.add(new Object[]{new int[]{4, 8, 5, 1, 7, 9}, 4, 3});
        tests.add(new Object[]{new int[]{5, 2, 2, 3, 9, 1}, 3, 4});
        tests.add(new Object[]{new int[]{3, 3, 3, 3, 3, 3}, 0, 6});
        tests.add(new Object[]{new int[]{}, 3, 0});           // extra: empty readings
        tests.add(new Object[]{new int[]{10}, 5, 1});         // extra: single reading

        for (Object[] test : tests) {
            int[] readings = (int[]) test[0];
            int tolerance = (int) test[1];
            int expected = (int) test[2];
            int got = longestStableWindow(readings, tolerance);
            String status = got == expected ? "PASS" : "FAIL";
            System.out.println(status + " readings=" + Arrays.toString(readings)
                    + " tolerance=" + tolerance + " expected=" + expected + " got=" + got);
        }
    }
}
