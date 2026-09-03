import java.util.*;

public class solution {

    public static int maxBookings(int[][] bookings) {
        // TODO: implement
        return 0;
    }

    public static void main(String[] args) {
        List<Object[]> tests = new ArrayList<>();
        tests.add(new Object[]{new int[][]{{1, 3}, {2, 4}, {3, 5}}, 2});
        tests.add(new Object[]{new int[][]{{0, 1}, {1, 2}, {2, 3}, {3, 4}}, 4});
        tests.add(new Object[]{new int[][]{{5, 10}, {0, 2}, {3, 6}, {6, 8}, {8, 9}}, 4});
        tests.add(new Object[]{new int[][]{{2, 5}}, 1});                       // extra: single booking
        tests.add(new Object[]{new int[][]{{1, 10}, {1, 2}, {1, 3}}, 1});      // extra: same start, only one fits

        for (Object[] test : tests) {
            int[][] bookings = (int[][]) test[0];
            int expected = (int) test[1];
            int got = maxBookings(bookings);
            String status = got == expected ? "PASS" : "FAIL";
            StringBuilder sb = new StringBuilder();
            for (int[] b : bookings) {
                sb.append(Arrays.toString(b));
            }
            System.out.println(status + " bookings=" + sb + " expected=" + expected + " got=" + got);
        }
    }
}
