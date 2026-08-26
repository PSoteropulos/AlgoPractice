import java.util.*;

public class solution {

    public static int[] kthHighestScores(int k, int[] scores) {
        // TODO: implement
        return new int[0];
    }

    public static void main(String[] args) {
        List<Object[]> tests = new ArrayList<>();
        tests.add(new Object[]{2, new int[]{3, 5, 10, 1, 7}, new int[]{-1, 3, 5, 5, 7}});
        tests.add(new Object[]{1, new int[]{4, 4, 4}, new int[]{4, 4, 4}});
        tests.add(new Object[]{3, new int[]{9, 1}, new int[]{-1, -1}});
        tests.add(new Object[]{1, new int[]{-5, -1, -10}, new int[]{-5, -1, -1}});   // extra: negative scores
        tests.add(new Object[]{3, new int[]{2, 8, 5}, new int[]{-1, -1, 2}});        // extra: k equals length

        for (Object[] test : tests) {
            int k = (int) test[0];
            int[] scores = (int[]) test[1];
            int[] expected = (int[]) test[2];
            int[] got = kthHighestScores(k, scores);
            String status = Arrays.equals(got, expected) ? "PASS" : "FAIL";
            System.out.println(status + " k=" + k + " scores=" + Arrays.toString(scores)
                    + " expected=" + Arrays.toString(expected) + " got=" + Arrays.toString(got));
        }
    }
}
