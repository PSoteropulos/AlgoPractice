import java.util.Arrays;

public class solution {
    public static int[] daysUntilHigher(int[] levels) {
        // TODO: implement
        return new int[0];
    }

    public static void main(String[] args) {
        Object[][] cases = {
            {"example 1", new int[] { 3, 1, 4, 1, 5 }, new int[] { 2, 1, 2, 1, 0 }},
            {"example 2", new int[] { 5, 5, 5 }, new int[] { 0, 0, 0 }},
            {"example 3", new int[] { 9, 7, 5, 6 }, new int[] { 0, 0, 1, 0 }},
            {"edge: single day", new int[] { 1 }, new int[] { 0 }},
            {"edge: strictly increasing", new int[] { 1, 2, 3, 4 }, new int[] { 1, 1, 1, 0 }},
            {"edge: strictly decreasing", new int[] { 4, 3, 2, 1 }, new int[] { 0, 0, 0, 0 }},
            {"edge: zero then big", new int[] { 0, 0, 1000000000, 0, 1000000000 }, new int[] { 2, 1, 0, 1, 0 }},
        };

        for (Object[] t : cases) {
            int[] actual = daysUntilHigher(((int[]) t[1]).clone());
            int[] expected = (int[]) t[2];
            String status = Arrays.equals(actual, expected) ? "PASS" : "FAIL";
            System.out.printf("[%s] %s: expected=%s actual=%s%n", status, t[0], Arrays.toString(expected), Arrays.toString(actual));
        }
    }
}
