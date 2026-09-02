import java.util.*;

public class solution {

    public static List<List<String>> trailheadAutocomplete(String[] markers, int[] scores, String[] queries) {
        // TODO: implement
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        List<Object[]> tests = new ArrayList<>();
        tests.add(new Object[]{
                new String[]{"trailhead", "trailmap", "trailrun", "bridge"},
                new int[]{50, 80, 10, 40},
                new String[]{"trail", "bri", "zzz"},
                List.of(List.of("trailmap", "trailhead", "trailrun"), List.of("bridge"), List.of())
        });
        tests.add(new Object[]{
                new String[]{"cabin", "cave", "camp"},
                new int[]{20, 20, 20},
                new String[]{"ca"},
                List.of(List.of("cabin", "camp", "cave"))
        });
        tests.add(new Object[]{
                new String[]{"a", "ab", "abc", "abcd", "abcde"},
                new int[]{5, 4, 3, 2, 1},
                new String[]{"a"},
                List.of(List.of("a", "ab", "abc"))
        });
        tests.add(new Object[]{
                new String[]{"lone"},
                new int[]{1},
                new String[]{"lone", "lon", "x"},
                List.of(List.of("lone"), List.of("lone"), List.of())
        });
        tests.add(new Object[]{
                new String[]{"oak", "oakley", "oaks"},
                new int[]{3, 3, 5},
                new String[]{"oak"},
                List.of(List.of("oaks", "oak", "oakley"))
        });

        for (Object[] test : tests) {
            String[] markers = (String[]) test[0];
            int[] scores = (int[]) test[1];
            String[] queries = (String[]) test[2];
            @SuppressWarnings("unchecked")
            List<List<String>> expected = (List<List<String>>) test[3];
            List<List<String>> got = trailheadAutocomplete(markers, scores, queries);
            String status = got.equals(expected) ? "PASS" : "FAIL";
            System.out.println(status + " queries=" + Arrays.toString(queries)
                    + " expected=" + expected + " got=" + got);
        }
    }
}
