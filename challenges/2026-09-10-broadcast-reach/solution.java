import java.util.*;

public class solution {

    public static int broadcastReach(int n, List<List<Integer>> edges, int start) {
        // TODO: implement
        return 0;
    }

    public static void main(String[] args) {
        List<Object[]> tests = new ArrayList<>();
        tests.add(new Object[]{"example 1", 6, List.of(List.of(0,1), List.of(0,2), List.of(1,3), List.of(2,3), List.of(3,4)), 0, 5});
        tests.add(new Object[]{"example 2", 4, List.of(List.of(1,2), List.of(2,3)), 0, 1});
        tests.add(new Object[]{"example 3", 3, List.of(List.of(0,1), List.of(1,2), List.of(2,0)), 1, 3});
        tests.add(new Object[]{"edge: no edges at all", 1, new ArrayList<List<Integer>>(), 0, 1});
        tests.add(new Object[]{"edge: duplicate edges", 3, List.of(List.of(0,1), List.of(0,1), List.of(1,2)), 0, 3});

        for (Object[] test : tests) {
            String name = (String) test[0];
            int n = (Integer) test[1];
            @SuppressWarnings("unchecked")
            List<List<Integer>> edges = (List<List<Integer>>) test[2];
            int start = (Integer) test[3];
            int expected = (Integer) test[4];
            int got = broadcastReach(n, edges, start);
            String status = got == expected ? "PASS" : "FAIL";
            System.out.println("[" + status + "] " + name + ": expected=" + expected + " actual=" + got);
        }
    }
}
