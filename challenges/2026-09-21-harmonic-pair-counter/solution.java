import java.util.*;

public class solution {

    public static long countHarmonicPairs(List<Integer> freq, int k) {
        // TODO: implement
        return 0;
    }

    public static void main(String[] args) {
        List<Object[]> tests = new ArrayList<>();
        tests.add(new Object[]{"example 1", List.of(4, 6, 8, 10, 3), 2, 5L});
        tests.add(new Object[]{"example 2", List.of(2, 4, 8, 16), 4, 2L});
        tests.add(new Object[]{"example 3", List.of(5, 7, 11), 5, 0L});
        tests.add(new Object[]{"edge: k larger than every value", List.of(2, 4, 6), 100, 0L});
        tests.add(new Object[]{"edge: all elements equal to k", List.of(7, 7, 7), 7, 3L});

        for (Object[] test : tests) {
            String name = (String) test[0];
            @SuppressWarnings("unchecked")
            List<Integer> freq = (List<Integer>) test[1];
            int k = (Integer) test[2];
            long expected = (Long) test[3];
            long actual = countHarmonicPairs(freq, k);
            String status = actual == expected ? "PASS" : "FAIL";
            System.out.println("[" + status + "] " + name + ": expected=" + expected + " actual=" + actual);
        }
    }
}
