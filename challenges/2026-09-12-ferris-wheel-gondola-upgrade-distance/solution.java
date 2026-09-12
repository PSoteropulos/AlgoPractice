import java.util.*;

public class solution {

    public static int[] gondolaUpgradeDistance(int[] capacity) {
        // TODO: implement
        return new int[0];
    }

    public static void main(String[] args) {
        List<Object[]> tests = new ArrayList<>();
        tests.add(new Object[]{"example 1", new int[]{3, 1, 2, 4}, new int[]{3, 1, 1, -1}});
        tests.add(new Object[]{"example 2", new int[]{5, 5, 5, 5}, new int[]{-1, -1, -1, -1}});
        tests.add(new Object[]{"example 3", new int[]{2, 4, 3, 6, 1}, new int[]{1, 2, 1, -1, 1}});
        tests.add(new Object[]{"edge: single gondola", new int[]{1}, new int[]{-1}});
        tests.add(new Object[]{"edge: two gondolas ascending", new int[]{1, 2}, new int[]{1, -1}});

        for (Object[] test : tests) {
            String name = (String) test[0];
            int[] capacity = (int[]) test[1];
            int[] expected = (int[]) test[2];
            int[] got = gondolaUpgradeDistance(capacity);
            String status = Arrays.equals(got, expected) ? "PASS" : "FAIL";
            System.out.println("[" + status + "] " + name + ": expected=" + Arrays.toString(expected) + " actual=" + Arrays.toString(got));
        }
    }
}
