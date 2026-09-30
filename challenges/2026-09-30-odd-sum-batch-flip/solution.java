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

    public static int[] toArray(ListNode head) {
        List<Integer> result = new ArrayList<>();
        for (ListNode node = head; node != null; node = node.next) {
            result.add(node.val);
        }
        return result.stream().mapToInt(Integer::intValue).toArray();
    }

    public static ListNode flipOddBatches(ListNode head, int k) {
        // TODO: implement
        return null;
    }

    public static void main(String[] args) {
        List<Object[]> tests = new ArrayList<>();
        tests.add(new Object[]{"example 1", new int[]{1, 2, 3, 4, 5, 6}, 3, new int[]{1, 2, 3, 6, 5, 4}});
        tests.add(new Object[]{"example 2", new int[]{2, 7, 4, 2, 8, 5, 9}, 2, new int[]{7, 2, 4, 2, 5, 8, 9}});
        tests.add(new Object[]{"example 3: fewer than k nodes", new int[]{5, 3, 1}, 4, new int[]{5, 3, 1}});
        tests.add(new Object[]{"edge: empty list", new int[]{}, 2, new int[]{}});
        tests.add(new Object[]{"edge: k = 1 never changes anything", new int[]{1, 2, 3}, 1, new int[]{1, 2, 3}});
        tests.add(new Object[]{"edge: whole list is one odd batch", new int[]{1, 2, 4}, 3, new int[]{4, 2, 1}});
        tests.add(new Object[]{"edge: all even sums", new int[]{0, 0, 0, 0}, 2, new int[]{0, 0, 0, 0}});
        tests.add(new Object[]{"edge: consecutive odd batches", new int[]{1, 2, 3, 4, 5, 6}, 2, new int[]{2, 1, 4, 3, 6, 5}});

        for (Object[] test : tests) {
            String name = (String) test[0];
            int[] values = (int[]) test[1];
            int k = (Integer) test[2];
            int[] expected = (int[]) test[3];

            int[] actual = toArray(flipOddBatches(buildList(values), k));
            String status = Arrays.equals(actual, expected) ? "PASS" : "FAIL";
            System.out.println("[" + status + "] " + name + ": expected=" + Arrays.toString(expected)
                    + " actual=" + Arrays.toString(actual));
        }
    }
}
