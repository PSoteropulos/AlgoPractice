import java.util.*;

public class solution {

    public static boolean[] registerCallsigns(List<String> requests) {
        // TODO: implement
        return new boolean[0];
    }

    public static void main(String[] args) {
        List<Object[]> tests = new ArrayList<>();
        tests.add(new Object[]{"example 1", List.of("AB12", "AB", "CD9"), new boolean[]{true, false, true}});
        tests.add(new Object[]{"example 2", List.of("NET", "NETA", "NETB"), new boolean[]{true, false, false}});
        tests.add(new Object[]{"example 3", List.of("X", "Y", "XY"), new boolean[]{true, true, false}});
        tests.add(new Object[]{"edge: exact duplicate", List.of("A", "A"), new boolean[]{true, false}});
        tests.add(new Object[]{"edge: chain of prefixes then unrelated", List.of("AB", "ABC", "A"), new boolean[]{true, false, false}});

        for (Object[] test : tests) {
            String name = (String) test[0];
            @SuppressWarnings("unchecked")
            List<String> requests = (List<String>) test[1];
            boolean[] expected = (boolean[]) test[2];
            boolean[] got = registerCallsigns(requests);
            String status = Arrays.equals(got, expected) ? "PASS" : "FAIL";
            System.out.println("[" + status + "] " + name + ": expected=" + Arrays.toString(expected) + " actual=" + Arrays.toString(got));
        }
    }
}
