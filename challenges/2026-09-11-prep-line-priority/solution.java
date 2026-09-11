import java.util.*;

public class solution {

    public static int maxOrdersCompleted(List<List<Integer>> orders) {
        // TODO: implement
        return 0;
    }

    public static void main(String[] args) {
        List<Object[]> tests = new ArrayList<>();
        tests.add(new Object[]{"example 1", List.of(List.of(5,9), List.of(2,6), List.of(3,9), List.of(4,15), List.of(6,15)), 4});
        tests.add(new Object[]{"example 2", List.of(List.of(3,3), List.of(2,3)), 1});
        tests.add(new Object[]{"example 3", List.of(List.of(5,3)), 0});
        tests.add(new Object[]{"edge: no orders at all", new ArrayList<List<Integer>>(), 0});
        tests.add(new Object[]{"edge: everything comfortably fits", List.of(List.of(1,10), List.of(2,10), List.of(3,10)), 3});

        for (Object[] test : tests) {
            String name = (String) test[0];
            @SuppressWarnings("unchecked")
            List<List<Integer>> orders = (List<List<Integer>>) test[1];
            int expected = (Integer) test[2];
            int got = maxOrdersCompleted(orders);
            String status = got == expected ? "PASS" : "FAIL";
            System.out.println("[" + status + "] " + name + ": expected=" + expected + " actual=" + got);
        }
    }
}
