import java.util.*;

public class solution {

    public static int[] boosterNetworkMergeSizes(int n, List<List<Integer>> cables) {
        // TODO: implement
        return new int[0];
    }

    public static void main(String[] args) {
        List<Object[]> tests = new ArrayList<>();
        tests.add(new Object[]{"example 1", 5, List.of(List.of(0,1), List.of(1,2), List.of(3,4), List.of(2,3)), new int[]{2,3,2,5}});
        tests.add(new Object[]{"example 2", 3, List.of(List.of(0,1), List.of(0,1)), new int[]{2,2}});
        tests.add(new Object[]{"example 3", 4, List.of(List.of(0,1), List.of(2,3), List.of(1,3)), new int[]{2,2,4}});
        tests.add(new Object[]{"edge: no cables", 3, new ArrayList<List<Integer>>(), new int[]{}});
        tests.add(new Object[]{"edge: single booster network never grows", 1, new ArrayList<List<Integer>>(), new int[]{}});
        tests.add(new Object[]{"edge: long chain", 4, List.of(List.of(0,1), List.of(1,2), List.of(2,3)), new int[]{2,3,4}});

        for (Object[] test : tests) {
            String name = (String) test[0];
            int n = (Integer) test[1];
            @SuppressWarnings("unchecked")
            List<List<Integer>> cables = (List<List<Integer>>) test[2];
            int[] expected = (int[]) test[3];
            int[] got = boosterNetworkMergeSizes(n, cables);
            String status = Arrays.equals(got, expected) ? "PASS" : "FAIL";
            System.out.println("[" + status + "] " + name + ": expected=" + Arrays.toString(expected) + " actual=" + Arrays.toString(got));
        }
    }
}
