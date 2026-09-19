import java.util.*;

public class solution {

    public static int maxWorkshops(List<int[]> workshops) {
        // TODO: implement
        return 0;
    }

    public static void main(String[] args) {
        List<Object[]> tests = new ArrayList<>();
        tests.add(new Object[]{"example 1", List.of(new int[]{2, 5}, new int[]{3, 5}, new int[]{4, 7}, new int[]{5, 10}), 3});
        tests.add(new Object[]{"example 2", List.of(new int[]{4, 6}, new int[]{5, 5}, new int[]{2, 6}), 2});
        tests.add(new Object[]{"example 3", List.of(new int[]{10, 3}), 0});
        tests.add(new Object[]{"edge: tie deadlines both fit", List.of(new int[]{2, 4}, new int[]{1, 4}), 2});
        tests.add(new Object[]{"edge: tie deadlines only one fits", List.of(new int[]{3, 4}, new int[]{2, 4}), 1});

        for (Object[] test : tests) {
            String name = (String) test[0];
            @SuppressWarnings("unchecked")
            List<int[]> workshops = (List<int[]>) test[1];
            int expected = (int) test[2];
            int got = maxWorkshops(workshops);
            String status = got == expected ? "PASS" : "FAIL";
            System.out.println("[" + status + "] " + name + ": expected=" + expected + " actual=" + got);
        }
    }
}
