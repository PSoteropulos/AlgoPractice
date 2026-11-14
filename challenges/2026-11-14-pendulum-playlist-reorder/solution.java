import java.util.*;

public class solution {

    static class ListNode {
        int val;
        ListNode next;
        ListNode(int val) {
            this.val = val;
        }
    }

    public static ListNode buildList(int[] values) {
        ListNode dummy = new ListNode(0);
        ListNode cur = dummy;
        for (int v : values) {
            cur.next = new ListNode(v);
            cur = cur.next;
        }
        return dummy.next;
    }

    // limit guards against accidental cycles in the returned list.
    public static List<Integer> toList(ListNode head, int limit) {
        List<Integer> result = new ArrayList<>();
        ListNode node = head;
        while (node != null && result.size() < limit) {
            result.add(node.val);
            node = node.next;
        }
        return result;
    }

    public static ListNode pendulumReorder(ListNode head, int k) {
        // TODO: implement
        return head;
    }

    public static void main(String[] args) {
        List<Object[]> tests = new ArrayList<>();
        tests.add(new Object[]{"example 1", new int[]{1, 2, 3, 4, 5, 6, 7}, 2,
                new int[]{1, 2, 7, 6, 3, 4, 5}});
        tests.add(new Object[]{"example 2", new int[]{1, 2, 3, 4, 5}, 1,
                new int[]{1, 5, 2, 4, 3}});
        tests.add(new Object[]{"example 3: k > n", new int[]{10, 20, 30}, 5,
                new int[]{10, 20, 30}});
        tests.add(new Object[]{"edge: single node", new int[]{42}, 1,
                new int[]{42}});
        tests.add(new Object[]{"edge: n=8, k=3, short final front block",
                new int[]{1, 2, 3, 4, 5, 6, 7, 8}, 3,
                new int[]{1, 2, 3, 8, 7, 6, 4, 5}});
        tests.add(new Object[]{"edge: duplicates and negatives",
                new int[]{5, -1, 5, 0, -1, 9, 9, 2, 3, 4}, 4,
                new int[]{5, -1, 5, 0, 4, 3, 2, 9, -1, 9}});

        for (Object[] test : tests) {
            String name = (String) test[0];
            int[] values = (int[]) test[1];
            int k = (Integer) test[2];
            int[] expectedArr = (int[]) test[3];
            List<Integer> expected = new ArrayList<>();
            for (int v : expectedArr) expected.add(v);

            ListNode result = pendulumReorder(buildList(values), k);
            List<Integer> actual = toList(result, values.length + 1);

            String status = actual.equals(expected) ? "PASS" : "FAIL";
            System.out.println("[" + status + "] " + name + ": expected=" + expected
                    + " actual=" + actual);
        }
    }
}
