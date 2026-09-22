import java.util.*;

public class solution {

    public static List<Integer> findScanGlitch(List<Integer> scans) {
        // TODO: implement
        return List.of(0, 0);
    }

    public static void main(String[] args) {
        List<Object[]> tests = new ArrayList<>();
        tests.add(new Object[]{"example 1", List.of(1, 2, 2, 4), List.of(2, 3)});
        tests.add(new Object[]{"example 2", List.of(1, 1), List.of(1, 2)});
        tests.add(new Object[]{"example 3", List.of(3, 2, 3, 4, 5, 1), List.of(3, 6)});
        tests.add(new Object[]{"edge: duplicate is smallest value, missing is largest", List.of(2, 2), List.of(2, 1)});
        tests.add(new Object[]{"edge: larger roster", List.of(7, 3, 4, 5, 6, 3, 1), List.of(3, 2)});

        for (Object[] test : tests) {
            String name = (String) test[0];
            @SuppressWarnings("unchecked")
            List<Integer> scans = (List<Integer>) test[1];
            @SuppressWarnings("unchecked")
            List<Integer> expected = (List<Integer>) test[2];
            List<Integer> actual = findScanGlitch(scans);
            String status = actual.equals(expected) ? "PASS" : "FAIL";
            System.out.println("[" + status + "] " + name + ": expected=" + expected + " actual=" + actual);
        }
    }
}
