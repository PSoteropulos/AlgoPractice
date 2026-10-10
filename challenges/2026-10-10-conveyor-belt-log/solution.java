import java.util.Arrays;

public class solution {
    public static int[] conveyorBeltLog(int[] events) {
        // TODO: implement
        return new int[0];
    }

    public static void main(String[] args) {
        Object[][] cases = {
            {"example 1", new int[] { 5, 3, 0, 4, -1, 7 }, new int[] { 4, 7 }},
            {"example 2", new int[] { 2, 6, 1, -5, 9, 0, 0 }, new int[] { }},
            {"example 3", new int[] { 3, 8, 2, -1, 0, -2, 6 }, new int[] { 6 }},
            {"edge: removals on empty belt", new int[] { 0, 0, -3 }, new int[] { }},
            {"edge: single placement", new int[] { 4 }, new int[] { 4 }},
            {"edge: front then back removal interplay", new int[] { 1, 2, 3, -2, 0, 5, -1, 0, 9 }, new int[] { 9 }},
        };

        for (Object[] t : cases) {
            int[] actual = conveyorBeltLog((int[]) t[1]);
            int[] expected = (int[]) t[2];
            String status = Arrays.equals(actual, expected) ? "PASS" : "FAIL";
            System.out.printf("[%s] %s: expected=%s actual=%s%n", status, t[0], Arrays.toString(expected), Arrays.toString(actual));
        }
    }
}
