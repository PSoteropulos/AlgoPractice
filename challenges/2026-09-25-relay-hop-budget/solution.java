import java.util.*;

public class solution {

    public static int minRelayCost(int n, List<int[]> edges, int src, int dst, int maxHops) {
        // TODO: implement
        return 0;
    }

    public static void main(String[] args) {
        List<int[]> edges = new ArrayList<>();
        edges.add(new int[]{0, 1, 100});
        edges.add(new int[]{1, 2, 100});
        edges.add(new int[]{0, 2, 500});
        edges.add(new int[]{2, 3, 100});
        edges.add(new int[]{1, 3, 300});

        List<Object[]> tests = new ArrayList<>();
        tests.add(new Object[]{"example 1", 4, edges, 0, 3, 2, 400});
        tests.add(new Object[]{"example 2", 4, edges, 0, 3, 1, -1});
        tests.add(new Object[]{"example 3", 4, edges, 0, 3, 3, 300});
        tests.add(new Object[]{"edge: zero hop budget", 4, edges, 0, 3, 0, -1});
        tests.add(new Object[]{"edge: unreachable dst", 4, List.of(new int[]{0, 1, 5}), 0, 3, 3, -1});
        tests.add(new Object[]{"edge: cheaper duplicate direct link wins", 2,
                List.of(new int[]{0, 1, 7}, new int[]{0, 1, 3}), 0, 1, 1, 3});

        for (Object[] test : tests) {
            String name = (String) test[0];
            int n = (Integer) test[1];
            @SuppressWarnings("unchecked")
            List<int[]> edgeList = (List<int[]>) test[2];
            int src = (Integer) test[3];
            int dst = (Integer) test[4];
            int maxHops = (Integer) test[5];
            int expected = (Integer) test[6];

            int got = minRelayCost(n, edgeList, src, dst, maxHops);
            String status = got == expected ? "PASS" : "FAIL";
            System.out.println("[" + status + "] " + name + ": expected=" + expected + " actual=" + got);
        }
    }
}
