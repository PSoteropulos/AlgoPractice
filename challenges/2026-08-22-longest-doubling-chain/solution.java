import java.util.*;

public class solution {

    public static int longestDoublingChain(int[] nums) {
        // TODO: implement
        return 0;
    }

    public static void main(String[] args) {
        List<Object[]> tests = new ArrayList<>();
        tests.add(new Object[]{new int[]{1, 2, 4, 8, 3, 10}, 4});
        tests.add(new Object[]{new int[]{-2, -4, -8, -1}, 4});
        tests.add(new Object[]{new int[]{0, 0, 5}, 1});
        tests.add(new Object[]{new int[]{7}, 1});       // extra: single element
        tests.add(new Object[]{new int[]{5, 5, 5}, 1});  // extra: all duplicates, odd, no successor

        for (Object[] test : tests) {
            int[] nums = (int[]) test[0];
            int expected = (int) test[1];
            int got = longestDoublingChain(nums);
            String status = got == expected ? "PASS" : "FAIL";
            System.out.println(status + " nums=" + Arrays.toString(nums)
                    + " expected=" + expected + " got=" + got);
        }
    }
}
