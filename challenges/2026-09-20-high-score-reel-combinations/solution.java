import java.util.*;

public class solution {

    public static List<String> highScoreCombinations(List<List<Character>> reels, List<String> bannedPrefixes) {
        // TODO: implement
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        List<Object[]> tests = new ArrayList<>();
        tests.add(new Object[]{
            "example 1",
            List.of(List.of('A', 'B'), List.of('C', 'D'), List.of('E', 'F')),
            List.of("BD"),
            List.of("ACE", "ACF", "ADE", "ADF", "BCE", "BCF")
        });
        tests.add(new Object[]{
            "example 2",
            List.of(List.of('X'), List.of('Y', 'Z'), List.of('A', 'B', 'C')),
            List.of("XZ", "XYB"),
            List.of("XYA", "XYC")
        });
        tests.add(new Object[]{
            "example 3",
            List.of(List.of('A'), List.of('B'), List.of('C')),
            List.<String>of(),
            List.of("ABC")
        });
        tests.add(new Object[]{
            "edge: first letter banned prunes everything",
            List.of(List.of('A'), List.of('B'), List.of('C')),
            List.of("A"),
            List.<String>of()
        });
        tests.add(new Object[]{
            "edge: mid-level banned prefix prunes a branch",
            List.of(List.of('P', 'Q'), List.of('R'), List.of('S', 'T')),
            List.of("QR"),
            List.of("PRS", "PRT")
        });

        for (Object[] test : tests) {
            String name = (String) test[0];
            @SuppressWarnings("unchecked")
            List<List<Character>> reels = (List<List<Character>>) test[1];
            @SuppressWarnings("unchecked")
            List<String> banned = (List<String>) test[2];
            @SuppressWarnings("unchecked")
            List<String> expected = (List<String>) test[3];
            List<String> actual = highScoreCombinations(reels, banned);
            String status = actual.equals(expected) ? "PASS" : "FAIL";
            System.out.println("[" + status + "] " + name + ": expected=" + expected + " actual=" + actual);
        }
    }
}
