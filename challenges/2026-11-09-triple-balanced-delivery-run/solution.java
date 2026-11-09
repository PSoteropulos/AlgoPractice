public class solution {
    public int longestBalancedRun(String log) {
        // TODO: implement
        return -1;
    }

    public static void main(String[] args) {
        solution sol = new solution();
        Object[][] tests = {
            {"example 1", "AAABCCB", 6},
            {"example 2", "AABBAC", 3},
            {"example 3", "AAAB", 0},
            {"extra: single char", "A", 0},
            {"extra: exactly one of each", "ABC", 3},
            {"extra: balanced in the middle", "CBACBAAAB", 6},
            {"extra: only one category", "AAAAA", 0},
        };

        for (Object[] t : tests) {
            int got = sol.longestBalancedRun((String) t[1]);
            int expected = (int) t[2];
            String status = got == expected ? "PASS" : "FAIL";
            System.out.printf("%s %s: expected=%d got=%d%n", status, t[0], expected, got);
        }
    }
}
