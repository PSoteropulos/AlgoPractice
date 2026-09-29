import java.util.*;

public class solution {

    public static long maxTotalTips(List<Integer> tips, int d) {
        // TODO: implement
        return 0;
    }

    public static void main(String[] args) {
        List<Object[]> tests = new ArrayList<>();
        tests.add(new Object[]{"example 1", List.of(4, 1, 7, 3, 6), 2, 17L});
        tests.add(new Object[]{"example 2", List.of(5, 10, 5, 10), 3, 15L});
        tests.add(new Object[]{"example 3", List.of(-3, -1, -2), 2, 0L});
        tests.add(new Object[]{"edge: d = 1 takes all positives", List.of(2, -1, 3), 1, 5L});
        tests.add(new Object[]{"edge: d larger than n", List.of(9, 8, 7), 5, 9L});
        tests.add(new Object[]{"edge: single negative", List.of(-5), 1, 0L});

        for (Object[] test : tests) {
            String name = (String) test[0];
            @SuppressWarnings("unchecked")
            List<Integer> tips = (List<Integer>) test[1];
            int d = (Integer) test[2];
            long expected = (Long) test[3];
            long actual = maxTotalTips(tips, d);
            String status = actual == expected ? "PASS" : "FAIL";
            System.out.println("[" + status + "] " + name + ": expected=" + expected + " actual=" + actual);
        }
    }
}
