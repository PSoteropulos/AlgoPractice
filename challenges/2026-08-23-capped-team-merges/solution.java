import java.util.*;

public class solution {

    public static int[] cappedTeamMerges(int n, int maxSize, int[][] requests) {
        // TODO: implement
        return new int[0];
    }

    public static void main(String[] args) {
        List<Object[]> tests = new ArrayList<>();
        tests.add(new Object[]{5, 3, new int[][]{{0, 1}, {2, 3}, {1, 2}, {3, 4}}, new int[]{2, 2, 3, 3, 3}});
        tests.add(new Object[]{4, 2, new int[][]{{0, 1}, {1, 2}, {2, 3}}, new int[]{2, 2, 2, 2}});
        tests.add(new Object[]{3, 1, new int[][]{{0, 1}, {1, 2}}, new int[]{1, 1, 1}});
        tests.add(new Object[]{1, 1, new int[][]{}, new int[]{1}});                                          // extra: single employee, no requests
        tests.add(new Object[]{4, 4, new int[][]{{0, 1}, {2, 3}, {1, 2}}, new int[]{4, 4, 4, 4}});           // extra: cap allows full merge

        for (Object[] test : tests) {
            int n = (int) test[0];
            int maxSize = (int) test[1];
            int[][] requests = (int[][]) test[2];
            int[] expected = (int[]) test[3];
            int[] got = cappedTeamMerges(n, maxSize, requests);
            String status = Arrays.equals(got, expected) ? "PASS" : "FAIL";
            System.out.println(status + " n=" + n + " maxSize=" + maxSize
                    + " requests=" + Arrays.deepToString(requests)
                    + " expected=" + Arrays.toString(expected)
                    + " got=" + Arrays.toString(got));
        }
    }
}
