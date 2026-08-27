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

    public static int mirrorCarWeight(ListNode head, int k) {
        // TODO: implement
        return -1;
    }

    public static void main(String[] args) {
        List<Object[]> tests = new ArrayList<>();
        tests.add(new Object[]{new int[]{10, 20, 30, 40, 50}, 2, 40});
        tests.add(new Object[]{new int[]{9}, 1, 9});
        tests.add(new Object[]{new int[]{3, 6, 9}, 5, -1});
        tests.add(new Object[]{new int[]{7, 14}, 1, 14});       // extra: mirror maps to the last car
        tests.add(new Object[]{new int[]{1, 2, 3, 4}, 4, 1});   // extra: k equals n, mirror maps to the first car

        for (Object[] test : tests) {
            int[] values = (int[]) test[0];
            int k = (int) test[1];
            int expected = (int) test[2];
            ListNode head = buildList(values);
            int got = mirrorCarWeight(head, k);
            String status = got == expected ? "PASS" : "FAIL";
            System.out.println(status + " cars=" + Arrays.toString(values) + " k=" + k
                    + " expected=" + expected + " got=" + got);
        }
    }
}
