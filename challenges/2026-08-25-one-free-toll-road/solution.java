import java.util.*;

public class solution {

    public static int oneFreeTollRoad(int n, int[][] roads, int src, int dst) {
        // TODO: implement
        return -1;
    }

    public static void main(String[] args) {
        int[][] roads1 = new int[][]{{0, 1, 3}, {1, 2, 3}, {2, 3, 3}, {0, 2, 8}};
        int[][] roads3 = new int[][]{{0, 1, 2}, {2, 3, 4}};

        List<Object[]> tests = new ArrayList<>();
        tests.add(new Object[]{4, roads1, 0, 3, 3});
        tests.add(new Object[]{4, roads1, 0, 2, 0});
        tests.add(new Object[]{5, roads3, 0, 4, -1});
        tests.add(new Object[]{4, roads1, 2, 2, 0});                     // extra: src == dst
        tests.add(new Object[]{1, new int[][]{}, 0, 0, 0});              // extra: single city, no roads

        for (Object[] test : tests) {
            int n = (int) test[0];
            int[][] roads = (int[][]) test[1];
            int src = (int) test[2];
            int dst = (int) test[3];
            int expected = (int) test[4];
            int got = oneFreeTollRoad(n, roads, src, dst);
            String status = got == expected ? "PASS" : "FAIL";
            System.out.println(status + " n=" + n + " roads=" + Arrays.deepToString(roads)
                    + " src=" + src + " dst=" + dst
                    + " expected=" + expected + " got=" + got);
        }
    }
}
