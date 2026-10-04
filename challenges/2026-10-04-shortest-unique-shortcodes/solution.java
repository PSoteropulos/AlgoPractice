import java.util.*;

public class solution {

    public static String[] shortestUniqueShortcodes(String[] names) {
        // TODO: implement
        return new String[0];
    }

    public static void main(String[] args) {
        List<Object[]> tests = new ArrayList<>();
        tests.add(new Object[]{"example 1", new String[]{"apple", "apply", "ape", "bat"}, new String[]{"apple", "apply", "ape", "b"}});
        tests.add(new Object[]{"example 2", new String[]{"zebra", "zoo", "zone", "yak"}, new String[]{"ze", "zoo", "zon", "y"}});
        tests.add(new Object[]{"example 3", new String[]{"ab", "abc", "abcd"}, new String[]{"ab", "abc", "abcd"}});
        tests.add(new Object[]{"edge: single name", new String[]{"hello"}, new String[]{"h"}});
        tests.add(new Object[]{"edge: single letters", new String[]{"a", "b", "c"}, new String[]{"a", "b", "c"}});
        tests.add(new Object[]{"edge: deep shared prefix", new String[]{"xxxxa", "xxxxb"}, new String[]{"xxxxa", "xxxxb"}});

        for (Object[] test : tests) {
            String name = (String) test[0];
            String[] names = ((String[]) test[1]).clone();
            String[] expected = (String[]) test[2];

            String[] actual = shortestUniqueShortcodes(names);
            String status = Arrays.equals(actual, expected) ? "PASS" : "FAIL";
            System.out.println("[" + status + "] " + name + ": expected=" + Arrays.toString(expected) + " actual=" + Arrays.toString(actual));
        }
    }
}
