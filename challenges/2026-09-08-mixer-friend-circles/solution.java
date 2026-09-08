import java.util.*;

public class solution {

    public static int[] mixerFriendCircles(int n, List<List<Integer>> introductions) {
        // TODO: implement
        return new int[0];
    }

    public static void main(String[] args) {
        List<Object[]> tests = new ArrayList<>();
        tests.add(new Object[]{"example 1", 5, List.of(List.of(0,1), List.of(1,2), List.of(3,4)), new int[]{3,0}});
        tests.add(new Object[]{"example 2", 6, List.of(List.of(0,1), List.of(2,3)), new int[]{2,2}});
        tests.add(new Object[]{"example 3", 1, new ArrayList<List<Integer>>(), new int[]{1,1}});
        tests.add(new Object[]{"edge: duplicate introductions", 3, List.of(List.of(0,1), List.of(1,0), List.of(0,1)), new int[]{2,1}});
        tests.add(new Object[]{"edge: full chain merges everyone", 4, List.of(List.of(0,1), List.of(1,2), List.of(2,3)), new int[]{4,0}});

        for (Object[] test : tests) {
            String name = (String) test[0];
            int n = (Integer) test[1];
            @SuppressWarnings("unchecked")
            List<List<Integer>> introductions = (List<List<Integer>>) test[2];
            int[] expected = (int[]) test[3];
            int[] got = mixerFriendCircles(n, introductions);
            String status = Arrays.equals(got, expected) ? "PASS" : "FAIL";
            System.out.println("[" + status + "] " + name + ": expected=" + Arrays.toString(expected) + " actual=" + Arrays.toString(got));
        }
    }
}
