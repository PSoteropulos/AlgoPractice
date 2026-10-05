import java.util.*;

public class solution {

    public static int fewestBeaconTowers(int[] houses, int r) {
        // TODO: implement
        return 0;
    }

    public static void main(String[] args) {
        List<Object[]> tests = new ArrayList<>();
        tests.add(new Object[]{"example 1", new int[]{1, 2, 3, 4, 5}, 1, 2});
        tests.add(new Object[]{"example 2", new int[]{1, 5, 9}, 2, 3});
        tests.add(new Object[]{"example 3", new int[]{7, 3, 1, 10, 4, 12, 8}, 3, 2});
        tests.add(new Object[]{"edge: single house", new int[]{42}, 0, 1});
        tests.add(new Object[]{"edge: duplicates, r=0", new int[]{5, 5, 5}, 0, 1});
        tests.add(new Object[]{"edge: r=0 distinct", new int[]{3, 1, 2}, 0, 3});
        tests.add(new Object[]{"edge: large values", new int[]{1000000000, 0, 500000000}, 1000000000, 1});

        for (Object[] test : tests) {
            String name = (String) test[0];
            int[] houses = ((int[]) test[1]).clone();
            int r = (Integer) test[2];
            int expected = (Integer) test[3];

            int actual = fewestBeaconTowers(houses, r);
            String status = actual == expected ? "PASS" : "FAIL";
            System.out.println("[" + status + "] " + name + ": expected=" + expected + " actual=" + actual);
        }
    }
}
