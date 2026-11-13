public class solution {
    public int minBatterySwaps(int[] stations, int destination, int batteryRange) {
        // TODO: implement
        return -1;
    }

    public static void main(String[] args) {
        solution sol = new solution();
        int[] spaced = new int[100000];
        for (int i = 0; i < spaced.length; i++) {
            spaced[i] = 10 * (i + 1);
        }
        Object[][] tests = {
            {"example 1", new int[]{3, 7, 9, 14}, 16, 6, 3},
            {"example 2", new int[]{2, 4}, 5, 5, 0},
            {"example 3", new int[]{2, 5, 11}, 15, 5, -1},
            {"extra: no stations, too far", new int[]{}, 10, 3, -1},
            {"extra: exact-boundary hops", new int[]{4}, 8, 4, 1},
            {"extra: must use every station", new int[]{1, 2, 3, 4}, 5, 1, 4},
            {"extra: 100000 evenly spaced stations", spaced, 1000010, 10, 100000},
        };

        for (Object[] t : tests) {
            int got = sol.minBatterySwaps((int[]) t[1], (int) t[2], (int) t[3]);
            int expected = (int) t[4];
            String status = got == expected ? "PASS" : "FAIL";
            System.out.printf("%s %s: expected=%d got=%d%n", status, t[0], expected, got);
        }
    }
}
