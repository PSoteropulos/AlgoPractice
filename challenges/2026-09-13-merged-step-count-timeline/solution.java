import java.util.*;

public class solution {

    static class ListNode {
        int timestamp;
        int steps;
        ListNode next;
        ListNode(int timestamp, int steps) {
            this.timestamp = timestamp;
            this.steps = steps;
        }
    }

    public static ListNode buildList(int[][] values) {
        ListNode dummy = new ListNode(0, 0);
        ListNode cur = dummy;
        for (int[] v : values) {
            cur.next = new ListNode(v[0], v[1]);
            cur = cur.next;
        }
        return dummy.next;
    }

    public static List<int[]> toList(ListNode head) {
        List<int[]> result = new ArrayList<>();
        ListNode node = head;
        while (node != null) {
            result.add(new int[]{node.timestamp, node.steps});
            node = node.next;
        }
        return result;
    }

    public static ListNode mergeStepTimelines(ListNode headA, ListNode headB) {
        // TODO: implement
        return null;
    }

    private static String formatPairs(List<int[]> pairs) {
        StringBuilder sb = new StringBuilder("[");
        for (int i = 0; i < pairs.size(); i++) {
            if (i > 0) sb.append(", ");
            sb.append(Arrays.toString(pairs.get(i)));
        }
        sb.append("]");
        return sb.toString();
    }

    private static String formatPairs(int[][] pairs) {
        return formatPairs(Arrays.asList(pairs));
    }

    public static void main(String[] args) {
        List<Object[]> tests = new ArrayList<>();
        tests.add(new Object[]{"example 1",
                new int[][]{{0, 0}, {30, 1200}, {60, 2500}},
                new int[][]{{15, 600}, {45, 1900}},
                new int[][]{{0, 0}, {15, 600}, {30, 1200}, {45, 1900}, {60, 2500}}});
        tests.add(new Object[]{"example 2: tie at timestamp 10",
                new int[][]{{10, 500}, {20, 1000}},
                new int[][]{{10, 480}, {25, 1100}},
                new int[][]{{10, 500}, {10, 480}, {20, 1000}, {25, 1100}}});
        tests.add(new Object[]{"example 3: A empty",
                new int[][]{},
                new int[][]{{5, 200}, {10, 450}},
                new int[][]{{5, 200}, {10, 450}}});
        tests.add(new Object[]{"edge: both empty",
                new int[][]{},
                new int[][]{},
                new int[][]{}});
        tests.add(new Object[]{"edge: B empty",
                new int[][]{{1, 10}, {2, 20}},
                new int[][]{},
                new int[][]{{1, 10}, {2, 20}}});

        for (Object[] test : tests) {
            String name = (String) test[0];
            int[][] aValues = (int[][]) test[1];
            int[][] bValues = (int[][]) test[2];
            int[][] expected = (int[][]) test[3];

            ListNode headA = buildList(aValues);
            ListNode headB = buildList(bValues);
            ListNode merged = mergeStepTimelines(headA, headB);
            List<int[]> actual = toList(merged);

            boolean ok = actual.size() == expected.length;
            if (ok) {
                for (int i = 0; i < actual.size(); i++) {
                    if (actual.get(i)[0] != expected[i][0] || actual.get(i)[1] != expected[i][1]) {
                        ok = false;
                        break;
                    }
                }
            }
            String status = ok ? "PASS" : "FAIL";
            System.out.println(status + " " + name + ": expected=" + formatPairs(expected)
                    + " actual=" + formatPairs(actual));
        }
    }
}
