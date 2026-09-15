import java.util.*;

public class solution {

    public static int minMaxLoad(int[] hourly, int shifts) {
        // TODO: implement
        return 0;
    }

    public static void main(String[] args) {
        List<Object[]> tests = new ArrayList<>();
        tests.add(new Object[]{"example 1", new int[]{10,20,30,40}, 2, 60});
        tests.add(new Object[]{"example 2", new int[]{5,5,5,5,5,5}, 3, 10});
        tests.add(new Object[]{"example 3", new int[]{3,1,4}, 1, 8});
        tests.add(new Object[]{"edge: shifts equals length", new int[]{7,2,9}, 3, 9});
        tests.add(new Object[]{"edge: single hour", new int[]{42}, 1, 42});

        for (Object[] test : tests) {
            String name = (String) test[0];
            int[] hourly = (int[]) test[1];
            int shifts = (Integer) test[2];
            int expected = (Integer) test[3];
            int got = minMaxLoad(hourly, shifts);
            String status = got == expected ? "PASS" : "FAIL";
            System.out.println("[" + status + "] " + name + ": expected=" + expected + " actual=" + got);
        }
    }
}
