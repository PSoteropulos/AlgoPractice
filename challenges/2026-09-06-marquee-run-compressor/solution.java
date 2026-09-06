import java.util.*;

public class solution {

    public static String compressMarquee(String s) {
        // TODO: implement
        return "";
    }

    public static void main(String[] args) {
        List<Object[]> tests = new ArrayList<>();
        tests.add(new Object[]{"example 1", "AAAABBBCCD", "4A3BCCD"});
        tests.add(new Object[]{"example 2", "ABCD", "ABCD"});
        tests.add(new Object[]{"example 3", "AABBBBCCCCCC", "AA4B6C"});
        tests.add(new Object[]{"edge: empty string", "", ""});
        tests.add(new Object[]{"edge: long run", "A".repeat(12), "12A"});

        for (Object[] test : tests) {
            String name = (String) test[0];
            String input = (String) test[1];
            String expected = (String) test[2];
            String got = compressMarquee(input);
            String status = got.equals(expected) ? "PASS" : "FAIL";
            System.out.println("[" + status + "] " + name + ": expected=" + expected + " actual=" + got);
        }
    }
}
