import java.util.*;

public class solution {

    public static int minStorageBins(int[] batchCodes) {
        // TODO: implement
        return -1;
    }

    public static void main(String[] args) {
        List<Object[]> tests = new ArrayList<>();
        tests.add(new Object[]{"example 1", new int[]{6, 10, 15}, 3});
        tests.add(new Object[]{"example 2", new int[]{4, 9, 25, 6}, 2});
        tests.add(new Object[]{"example 3", new int[]{2, 4, 8, 16}, 4});
        tests.add(new Object[]{"edge: single sample", new int[]{7}, 1});
        tests.add(new Object[]{"edge: chain conflict needs two bins", new int[]{2, 3, 4}, 2});

        for (Object[] test : tests) {
            String name = (String) test[0];
            int[] batchCodes = (int[]) test[1];
            int expected = (int) test[2];
            int got = minStorageBins(batchCodes);
            String status = got == expected ? "PASS" : "FAIL";
            System.out.println("[" + status + "] " + name + ": expected=" + expected + " actual=" + got);
        }
    }
}
