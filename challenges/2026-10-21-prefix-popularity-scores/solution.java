import java.util.Arrays;

public class solution {
    public static long[] prefixPopularity(String[] words, int k) {
        // TODO: implement
        return new long[0];
    }

    public static void main(String[] args) {
        Object[][] cases = {
            {"example 1", new String[] { "abc", "ab", "bc", "b" }, 2, new long[] { 3, 2, 1, 0 }},
            {"example 2", new String[] { "aa", "aa", "a" }, 1, new long[] { 5, 5, 3 }},
            {"example 3", new String[] { "cat", "car", "cart", "dog" }, 3, new long[] { 1, 2, 3, 1 }},
            {"edge: k longer than every word", new String[] { "z" }, 2, new long[] { 0 }},
            {"edge: duplicate single letters", new String[] { "a", "a" }, 1, new long[] { 2, 2 }},
            {"edge: triple duplicate words", new String[] { "ab", "ab", "ab" }, 1, new long[] { 6, 6, 6 }},
            {"edge: nested shared stems", new String[] { "hello", "help", "he" }, 2, new long[] { 7, 6, 3 }},
        };

        for (Object[] t : cases) {
            long[] actual = prefixPopularity(((String[]) t[1]).clone(), (Integer) t[2]);
            long[] expected = (long[]) t[3];
            String status = Arrays.equals(actual, expected) ? "PASS" : "FAIL";
            System.out.printf("[%s] %s: expected=%s actual=%s%n", status, t[0], Arrays.toString(expected), Arrays.toString(actual));
        }
    }
}
