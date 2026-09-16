import java.util.*;

public class solution {

    public static int maxTotalDonations(int[][] slots) {
        // TODO: implement
        return 0;
    }

    public static void main(String[] args) {
        List<Object[]> tests = new ArrayList<>();
        tests.add(new Object[]{"example 1", new int[][]{{0,3,5}, {2,5,6}, {4,7,5}, {6,9,4}}, 10});
        tests.add(new Object[]{"example 2", new int[][]{{1,4,3}}, 3});
        tests.add(new Object[]{"example 3", new int[][]{{0,2,5}, {0,2,10}, {1,3,3}}, 10});
        tests.add(new Object[]{"edge: back-to-back slots both taken", new int[][]{{0,2,3}, {2,4,4}}, 7});
        tests.add(new Object[]{"edge: single slot", new int[][]{{5,10,100}}, 100});

        for (Object[] test : tests) {
            String name = (String) test[0];
            int[][] slots = (int[][]) test[1];
            int expected = (Integer) test[2];
            int got = maxTotalDonations(slots);
            String status = got == expected ? "PASS" : "FAIL";
            System.out.println("[" + status + "] " + name + ": expected=" + expected + " actual=" + got);
        }
    }
}
