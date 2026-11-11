import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class solution {
    public long countBookendPairs(String[] tags) {
        // TODO: implement
        return -1;
    }

    public static void main(String[] args) {
        solution sol = new solution();
        String[] big = new String[100000];
        Arrays.fill(big, "q");

        Object[][] tests = {
            {"example 1", new String[]{"a", "aba", "ababa", "aa"}, 4L},
            {"example 2", new String[]{"xyz", "xyzxy", "xy", "xyzxy"}, 2L},
            {"example 3", new String[]{"ab", "b", "ba", "abab"}, 1L},
            {"extra: single tag", new String[]{"zzz"}, 0L},
            {"extra: longer before shorter", new String[]{"aa", "a"}, 0L},
            {"extra: nested bookends", new String[]{"a", "aa", "aaa", "aaaa"}, 6L},
            {"extra: 100000 identical tags", big, 4999950000L},
        };

        for (Object[] t : tests) {
            long got = sol.countBookendPairs(((String[]) t[1]).clone());
            long expected = (long) t[2];
            String status = got == expected ? "PASS" : "FAIL";
            System.out.printf("%s %s: expected=%d got=%d%n", status, t[0], expected, got);
        }
    }
}
