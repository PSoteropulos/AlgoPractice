import java.util.*;

public class solution {

    public static long minConsolidationEffort(List<Integer> heights) {
        // TODO: implement
        return 0;
    }

    public static void main(String[] args) {
        List<Object[]> tests = new ArrayList<>();
        tests.add(new Object[]{"example 1", List.of(4, 3, 2, 6), 29L});
        tests.add(new Object[]{"example 2", List.of(1, 8, 3, 5), 30L});
        tests.add(new Object[]{"example 3", List.of(7), 0L});
        tests.add(new Object[]{"edge: no stacks at all", new ArrayList<Integer>(), 0L});
        tests.add(new Object[]{"edge: exactly two stacks", List.of(2, 9), 11L});

        for (Object[] test : tests) {
            String name = (String) test[0];
            @SuppressWarnings("unchecked")
            List<Integer> heights = (List<Integer>) test[1];
            long expected = (Long) test[2];
            long actual = minConsolidationEffort(heights);
            String status = actual == expected ? "PASS" : "FAIL";
            System.out.println("[" + status + "] " + name + ": expected=" + expected + " actual=" + actual);
        }
    }
}
