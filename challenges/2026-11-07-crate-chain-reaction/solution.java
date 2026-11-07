import java.util.Arrays;

public class solution {
    public int[] crateChainReaction(int[] crates, int k) {
        // TODO: implement
        return new int[]{-1};
    }

    public static void main(String[] args) {
        solution sol = new solution();
        int[] big = new int[100000];
        Arrays.fill(big, 1);

        Object[][] tests = {
            {"example 1", new int[]{2, 2, 3, 3, 3, 2}, 3, new int[]{}},
            {"example 2", new int[]{1, 1, 2, 2, 1}, 2, new int[]{1}},
            {"example 3", new int[]{5, 5, 5, 5, 5}, 3, new int[]{5, 5}},
            {"extra: single crate", new int[]{7}, 2, new int[]{7}},
            {"extra: nested cancel", new int[]{1, 2, 3, 3, 2, 1}, 2, new int[]{}},
            {"extra: gap rejoins", new int[]{1, 2, 2, 1, 1, 2}, 2, new int[]{1, 2}},
            {"extra: large uniform", big, 3, new int[]{1}},
        };

        for (Object[] t : tests) {
            int[] got = sol.crateChainReaction(((int[]) t[1]).clone(), (int) t[2]);
            int[] expected = (int[]) t[3];
            String status = Arrays.equals(got, expected) ? "PASS" : "FAIL";
            String shown = got.length < 20 ? Arrays.toString(got) : "...";
            System.out.printf("%s %s: expected=%s got=%s%n", status, t[0], Arrays.toString(expected), shown);
        }
    }
}
