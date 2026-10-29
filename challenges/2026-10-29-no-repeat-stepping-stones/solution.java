import java.util.*;

public class solution {

    // Minimum total toll to reach the last stone with jumps of 1-3, never repeating a jump length twice in a row.
    public static int minHopCost(int[] cost) {
        // TODO: implement
        return 0;
    }

    public static void main(String[] args) {
        List<Object[]> tests = new ArrayList<>();
        tests.add(new Object[]{new int[]{0, 5, 1, 4, 2}, 6});
        tests.add(new Object[]{new int[]{0, 1, 1, 1, 1, 1, 1}, 3});
        tests.add(new Object[]{new int[]{0, 9, 1, 1, 9, 1}, 2});
        tests.add(new Object[]{new int[]{7}, 0});                              // extra: already on the last stone
        tests.add(new Object[]{new int[]{3, 8}, 8});                           // extra: single forced jump (start toll ignored)
        tests.add(new Object[]{new int[]{0, 2, 100, 3}, 3});                   // extra: direct jump of 3
        tests.add(new Object[]{new int[]{0, 4, 4, 4, 4, 4, 4, 4, 4}, 12});     // extra: uniform tolls

        for (Object[] test : tests) {
            int[] cost = (int[]) test[0];
            int expected = (Integer) test[1];
            int got = minHopCost(cost);
            String status = got == expected ? "PASS" : "FAIL";
            System.out.println(status + " cost=" + Arrays.toString(cost) + " expected=" + expected + " got=" + got);
        }
    }
}
