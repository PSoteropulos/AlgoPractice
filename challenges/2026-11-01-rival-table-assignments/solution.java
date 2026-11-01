public class solution {
    public int countSeatings(int n, int[][] rivals) {
        // TODO: implement
        return 0;
    }

    static int pow2(int e) {
        long r = 1;
        for (int i = 0; i < e; i++) r = r * 2 % 1_000_000_007L;
        return (int) r;
    }

    public static void main(String[] args) {
        solution sol = new solution();
        int[][] chain = new int[99999][];
        for (int i = 0; i < 99999; i++) chain[i] = new int[] {i, i + 1};
        int[][] none = new int[0][];

        int[] ns = {4, 3, 5, 1, 6, 4, 100000, 100000};
        int[][][] rivals = {
            {{0, 1}, {1, 2}},
            {{0, 1}, {1, 2}, {2, 0}},
            none,
            none,                                         // extra: lone guest
            {{0, 1}, {2, 3}, {4, 5}, {1, 0}},             // extra: duplicate pair
            {{0, 1}, {1, 2}, {2, 3}, {3, 0}},             // extra: even cycle
            chain,                                        // extra: long path
            none,                                         // extra: modulo needed
        };
        int[] expected = {4, 0, 32, 2, 8, 2, 2, pow2(100000)};

        for (int i = 0; i < ns.length; i++) {
            int got = sol.countSeatings(ns[i], rivals[i]);
            String status = got == expected[i] ? "PASS" : "FAIL";
            System.out.printf("%s n=%d rivals=%d expected=%d got=%d%n", status, ns[i], rivals[i].length, expected[i], got);
        }
    }
}
