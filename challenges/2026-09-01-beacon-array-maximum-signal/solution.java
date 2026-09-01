import java.util.*;

public class solution {

    public static int maxBeaconSignal(int[] beacons) {
        // TODO: implement
        return -1;
    }

    public static void main(String[] args) {
        List<Object[]> tests = new ArrayList<>();
        tests.add(new Object[]{"example 1", new int[]{3, 10, 5, 25, 2, 8}, 31});
        tests.add(new Object[]{"example 2", new int[]{6, 6, 6}, 6});
        tests.add(new Object[]{"example 3", new int[]{42}, 42});
        tests.add(new Object[]{"edge: zeros mixed in don't help", new int[]{0, 0, 5}, 5});
        tests.add(new Object[]{"edge: disjoint bits XOR to the OR of all", new int[]{1, 2, 4, 8}, 15});

        for (Object[] test : tests) {
            String name = (String) test[0];
            int[] beacons = (int[]) test[1];
            int expected = (int) test[2];
            int got = maxBeaconSignal(beacons);
            String status = got == expected ? "PASS" : "FAIL";
            System.out.println("[" + status + "] " + name + ": expected=" + expected + " actual=" + got);
        }
    }
}
