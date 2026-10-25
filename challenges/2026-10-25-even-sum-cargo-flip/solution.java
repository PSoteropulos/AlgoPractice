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
        List<Integer> out = new ArrayList<>();
        for (ListNode n = head; n != null; n = n.next) out.add(n.val);
        return out.stream().mapToInt(Integer::intValue).toArray();
    }

    public static ListNode reverseEvenSumGroups(ListNode head, int k) {
        // TODO: implement
        return null;
    }

    public static void main(String[] args) {
        List<Object[]> tests = new ArrayList<>();
        tests.add(new Object[]{new int[]{2, 4, 1, 2, 3, 5, 7}, 2, new int[]{4, 2, 1, 2, 5, 3, 7}});
        tests.add(new Object[]{new int[]{1, 2, 4, 6, 2, 2, 9, 9}, 3, new int[]{1, 2, 4, 2, 2, 6, 9, 9}});
        tests.add(new Object[]{new int[]{1, 2, 3, 4, 5, 6, 7, 8}, 4, new int[]{4, 3, 2, 1, 8, 7, 6, 5}});
        tests.add(new Object[]{new int[]{1, 3}, 2, new int[]{3, 1}}); // extra: single even batch
        tests.add(new Object[]{new int[]{1, 2}, 2, new int[]{1, 2}}); // extra: single odd batch
        tests.add(new Object[]{new int[]{2, 2}, 3, new int[]{2, 2}}); // extra: k exceeds n, nothing changes
        tests.add(new Object[]{new int[]{3, 4, 5}, 1, new int[]{3, 4, 5}}); // extra: k = 1 changes nothing

        for (Object[] test : tests) {
            int[] values = (int[]) test[0];
            int k = (int) test[1];
            int[] expected = (int[]) test[2];
            int[] got = toArray(reverseEvenSumGroups(buildList(values), k));
            String status = Arrays.equals(got, expected) ? "PASS" : "FAIL";
            System.out.println(status + " crates=" + Arrays.toString(values) + " k=" + k
                    + " expected=" + Arrays.toString(expected) + " got=" + Arrays.toString(got));
        }
    }
}
