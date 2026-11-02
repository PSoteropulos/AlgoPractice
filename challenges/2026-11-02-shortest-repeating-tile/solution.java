public class solution {
    public int shortestTile(String s) {
        // TODO: implement
        return 0;
    }

    public static void main(String[] args) {
        solution sol = new solution();
        String[] inputs = {
            "abcabcab",
            "aabaaab",
            "abcd",
            "a",                                          // extra: single character
            "aaaaaaaa",                                   // extra: one repeated letter
            "abaababaab",                                 // extra: complete repeats
            "a".repeat(99999) + "b",                      // extra: large, no shorter tile
            "abc".repeat(33333) + "ab",                   // extra: large, partial last copy
        };
        int[] expected = {3, 4, 4, 1, 1, 5, 100000, 3};

        for (int i = 0; i < inputs.length; i++) {
            int got = sol.shortestTile(inputs[i]);
            String status = got == expected[i] ? "PASS" : "FAIL";
            System.out.printf("%s len=%d expected=%d got=%d%n", status, inputs[i].length(), expected[i], got);
        }
    }
}
