import java.util.*;

public class solution {

    public static long countTwinPairs(String[] labels) {
        // TODO: implement
        return -1;
    }

    public static void main(String[] args) {
        String[] big = new String[100000];
        Arrays.fill(big, "a");

        List<Object[]> tests = new ArrayList<>();
        tests.add(new Object[]{"example 1", new String[]{"abc", "bca", "cab", "abd"}, 3L});
        tests.add(new Object[]{"example 2", new String[]{"aab", "aba", "baa", "aab"}, 6L});
        tests.add(new Object[]{"example 3", new String[]{"ab", "ba", "abc"}, 1L});
        tests.add(new Object[]{"edge: single label", new String[]{"a"}, 0L});
        tests.add(new Object[]{"edge: no twins", new String[]{"abc", "acb", "abd"}, 0L});
        tests.add(new Object[]{"edge: 100000 identical labels need 64-bit count", big, 4999950000L});

        for (Object[] test : tests) {
            String name = (String) test[0];
            String[] labels = ((String[]) test[1]).clone();
            long expected = (Long) test[2];

            long actual = countTwinPairs(labels);
            String status = actual == expected ? "PASS" : "FAIL";
            System.out.println("[" + status + "] " + name + ": expected=" + expected + " actual=" + actual);
        }
    }
}
