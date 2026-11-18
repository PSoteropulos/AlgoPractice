public class solution {
    public int minDialRotations(String ring, String target) {
        // TODO: implement
        return -2;
    }

    public static void main(String[] args) {
        solution sol = new solution();
        String longRing = "a".repeat(99999) + "b";
        String longTarget = "a".repeat(49999) + "b" + "a".repeat(50000);
        Object[][] tests = {
            {"example 1", "abcde", "deabc", 2},
            {"example 2", "abcabcabc", "cabcabcab", 1},
            {"example 3", "abc", "acb", -1},
            {"extra: already aligned", "xyz", "xyz", 0},
            {"extra: single letter", "q", "q", 0},
            {"extra: anagram but not a rotation", "aabb", "abab", -1},
            {"extra: long ring, lone 'b' halfway around", longRing, longTarget, 50000},
        };

        for (Object[] t : tests) {
            int got = sol.minDialRotations((String) t[1], (String) t[2]);
            int expected = (int) t[3];
            String status = got == expected ? "PASS" : "FAIL";
            System.out.printf("%s %s: expected=%d got=%d%n", status, t[0], expected, got);
        }
    }
}
