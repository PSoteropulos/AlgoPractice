public class solution {
    public static long countArrangements(String tiles) {
        // TODO: implement
        return 0;
    }

    public static void main(String[] args) {
        Object[][] cases = {
            {"example 1", "AAB", 1L},
            {"example 2", "AABBC", 12L},
            {"example 3", "AAA", 0L},
            {"edge: single tile", "A", 1L},
            {"edge: all distinct", "ABCDEFGHI", 362880L},
            {"edge: two colors balanced", "AAAABBBB", 2L},
            {"edge: mixed multiplicities", "AABBCCDDE", 8760L},
        };

        for (Object[] t : cases) {
            long actual = countArrangements((String) t[1]);
            long expected = (long) t[2];
            String status = actual == expected ? "PASS" : "FAIL";
            System.out.printf("[%s] %s: expected=%d actual=%d%n", status, t[0], expected, actual);
        }
    }
}
