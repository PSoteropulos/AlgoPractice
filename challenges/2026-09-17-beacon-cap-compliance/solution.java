import java.util.*;

public class solution {

    public static int[] capCompliance(int cap, int[] powers) {
        // TODO: implement
        return new int[]{0, -1};
    }

    public static void main(String[] args) {
        List<Object[]> tests = new ArrayList<>();
        tests.add(new Object[]{"example 1", 6, new int[]{2, 4, 6, 7, 1}, new int[]{3, 6}});
        tests.add(new Object[]{"example 2", 0, new int[]{0, 0, 0}, new int[]{3, 0}});
        tests.add(new Object[]{"example 3", 5, new int[]{8, 16}, new int[]{0, -1}});
        tests.add(new Object[]{"edge: single drone equal to cap", 9, new int[]{9}, new int[]{1, 9}});
        tests.add(new Object[]{"edge: even cap excludes bit 0", 1_000_000_000, new int[]{0, 1}, new int[]{1, 0}});

        for (Object[] test : tests) {
            String name = (String) test[0];
            int cap = (Integer) test[1];
            int[] powers = (int[]) test[2];
            int[] expected = (int[]) test[3];
            int[] got = capCompliance(cap, powers);
            String status = Arrays.equals(got, expected) ? "PASS" : "FAIL";
            System.out.println("[" + status + "] " + name + ": expected=" + Arrays.toString(expected) + " actual=" + Arrays.toString(got));
        }
    }
}
