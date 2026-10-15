public class solution {
    public static int busiestBay(int n, int[][] trucks) {
        // TODO: implement
        return 0;
    }

    public static void main(String[] args) {
        Object[][] cases = {
            {"example 1", 2, new int[][] { {1,5}, {2,2}, {3,1}, {6,1} }, 0},
            {"example 2", 3, new int[][] { {1,10}, {2,1}, {3,1}, {4,1}, {5,10} }, 1},
            {"example 3", 3, new int[][] { {1,2}, {1,2}, {2,1}, {3,1}, {3,5} }, 0},
            {"edge: single bay rejects simultaneous truck", 1, new int[][] { {1,1}, {1,1} }, 0},
            {"edge: rejections then tie", 2, new int[][] { {1,100}, {1,100}, {2,1}, {3,1}, {4,1} }, 0},
            {"edge: freed bay reused over higher bay", 3, new int[][] { {1,1}, {1,5}, {2,1}, {2,5}, {3,1}, {3,1} }, 0},
        };

        for (Object[] t : cases) {
            int actual = busiestBay((Integer) t[1], (int[][]) t[2]);
            int expected = (Integer) t[3];
            String status = actual == expected ? "PASS" : "FAIL";
            System.out.printf("[%s] %s: expected=%d actual=%d%n", status, t[0], expected, actual);
        }
    }
}
