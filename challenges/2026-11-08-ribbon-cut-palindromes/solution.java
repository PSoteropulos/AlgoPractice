import java.util.ArrayList;
import java.util.List;

public class solution {
    public List<List<String>> ribbonCuts(String ribbon, int minLen) {
        // TODO: implement
        List<List<String>> res = new ArrayList<>();
        res.add(List.of("TODO"));
        return res;
    }

    public static void main(String[] args) {
        solution sol = new solution();
        Object[][] tests = {
            {"example 1", "aab", 1, List.of("a|a|b", "aa|b")},
            {"example 2", "abba", 2, List.of("abba")},
            {"example 3", "aaaaaa", 2, List.of("aa|aa|aa", "aa|aaaa", "aaa|aaa", "aaaa|aa", "aaaaaa")},
            {"extra: no plan", "abc", 2, List.<String>of()},
            {"extra: single char", "a", 1, List.of("a")},
            {"extra: all compositions", "aaa", 1, List.of("a|a|a", "a|aa", "aa|a", "aaa")},
        };

        for (Object[] t : tests) {
            List<String> got = new ArrayList<>();
            for (List<String> p : sol.ribbonCuts((String) t[1], (int) t[2])) {
                got.add(String.join("|", p));
            }
            Object expected = t[3];
            String status = got.equals(expected) ? "PASS" : "FAIL";
            System.out.printf("%s %s: expected=%s got=%s%n", status, t[0], expected, got);
        }
    }
}
