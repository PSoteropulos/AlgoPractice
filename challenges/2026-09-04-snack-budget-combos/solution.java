import java.util.*;

public class solution {

    public static int countSnackCombos(int[] prices, int budget) {
        // TODO: implement
        return -1;
    }

    public static void main(String[] args) {
        List<Object[]> tests = new ArrayList<>();
        tests.add(new Object[]{"example 1", new int[]{1, 2, 3, 4, 3}, 6, 3});
        tests.add(new Object[]{"example 2", new int[]{5, 3, 3, 5}, 8, 1});
        tests.add(new Object[]{"example 3", new int[]{10}, 10, 0});
        tests.add(new Object[]{"edge: empty prices", new int[]{}, 5, 0});
        tests.add(new Object[]{"edge: all duplicates", new int[]{2, 2, 2, 2}, 4, 1});

        for (Object[] test : tests) {
            String name = (String) test[0];
            int[] prices = (int[]) test[1];
            int budget = (int) test[2];
            int expected = (int) test[3];
            int got = countSnackCombos(prices, budget);
            String status = got == expected ? "PASS" : "FAIL";
            System.out.println("[" + status + "] " + name + ": expected=" + expected + " actual=" + got);
        }
    }
}
