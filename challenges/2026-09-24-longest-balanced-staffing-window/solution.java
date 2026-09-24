import java.util.*;

public class solution {

    public static int longestBalancedStaffingWindow(List<Integer> changes) {
        // TODO: implement
        return 0;
    }

    public static void main(String[] args) {
        List<Object[]> tests = new ArrayList<>();
        tests.add(new Object[]{"example 1", List.of(3,-3,4,-2,2,-4), 6});
        tests.add(new Object[]{"example 2", List.of(1,-1,1,-1,5), 4});
        tests.add(new Object[]{"example 3", List.of(2,3,-1), 0});
        tests.add(new Object[]{"edge: single zero", List.of(0), 1});
        tests.add(new Object[]{"edge: no balance possible", List.of(1,2,3), 0});

        for (Object[] test : tests) {
            String name = (String) test[0];
            @SuppressWarnings("unchecked")
            List<Integer> changes = (List<Integer>) test[1];
            int expected = (Integer) test[2];
            int got = longestBalancedStaffingWindow(changes);
            String status = got == expected ? "PASS" : "FAIL";
            System.out.println("[" + status + "] " + name + ": expected=" + expected + " actual=" + got);
        }
    }
}
