// Longest Balanced Parity Subarray
//
// See problem.md for the full statement.

public class solution {

    public static int longestBalancedParitySubarray(int[] nums, int k) {
        // TODO: implement
        int n = nums.length;
        int even = 0;
        int odd = 0;
        int diff = 0;
        return diff; // placeholder, remove me
    }

    private static void runSelfChecks() {
        Object[][] cases = new Object[][] {
            { new int[] { 1, 2, 3, 4, 5 }, 1, 5 },
            { new int[] { 2, 4, 6, 1, 3 }, 0, 4 },
            { new int[] { 2, 4, 6, 8 }, 2, 2 },
            { new int[] { 7 }, 5, 1 },
            { new int[] { 2, 4, 6, 8 }, 0, 0 },
        };

        boolean allPassed = true;
        for (int i = 0; i < cases.length; i++) {
            int[] nums = (int[]) cases[i][0];
            int k = (int) cases[i][1];
            int expected = (int) cases[i][2];
            int actual = longestBalancedParitySubarray(nums.clone(), k);
            String status = actual == expected ? "PASS" : "FAIL";
            if (!status.equals("PASS")) {
                allPassed = false;
            }
            StringBuilder sb = new StringBuilder();
            for (int v : nums) {
                if (sb.length() > 0) sb.append(",");
                sb.append(v);
            }
            System.out.println("Case " + (i + 1) + ": " + status + " (nums=[" + sb + "], k=" + k
                + " -> got " + actual + ", expected " + expected + ")");
        }

        System.out.println(allPassed ? "All cases passed." : "Some cases failed.");
    }

    public static void main(String[] args) {
        runSelfChecks();
    }
}
