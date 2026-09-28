import java.util.*;

public class solution {

    public static long maxDuctArea(List<Integer> heights) {
        // TODO: implement
        return 0;
    }

    public static void main(String[] args) {
        List<Object[]> tests = new ArrayList<>();
        tests.add(new Object[]{"example 1", List.of(2, 1, 5, 6, 2, 3), 10L});
        tests.add(new Object[]{"example 2", List.of(6, 2, 5, 4, 5, 1, 6), 12L});
        tests.add(new Object[]{"example 3", List.of(3, 3, 3, 3), 12L});
        tests.add(new Object[]{"edge: single rack", List.of(5), 5L});
        tests.add(new Object[]{"edge: strictly increasing", List.of(1, 2, 3, 4, 5), 9L});

        for (Object[] test : tests) {
            String name = (String) test[0];
            @SuppressWarnings("unchecked")
            List<Integer> heights = (List<Integer>) test[1];
            long expected = (Long) test[2];
            long actual = maxDuctArea(heights);
            String status = actual == expected ? "PASS" : "FAIL";
            System.out.println("[" + status + "] " + name + ": expected=" + expected + " actual=" + actual);
        }
    }
}
