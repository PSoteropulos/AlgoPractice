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
        while (head != null) {
            out.add(head.val);
            head = head.next;
        }
        return out.stream().mapToInt(Integer::intValue).toArray();
    }

    public static ListNode ridgeLineSorter(ListNode head) {
        // TODO: implement
        return null;
    }

    public static void main(String[] args) {
        Object[][] cases = {
            {"example 1", new int[] { 1, 4, 6, 5, 2 }, new int[] { 1, 2, 4, 5, 6 }},
            {"example 2", new int[] { 3, 3, 7, 7, 7, 1, 1 }, new int[] { 1, 1, 3, 3, 7, 7, 7 }},
            {"example 3", new int[] { 9, 8, 5 }, new int[] { 5, 8, 9 }},
            {"edge: empty list", new int[] {  }, new int[] {  }},
            {"edge: single node", new int[] { 5 }, new int[] { 5 }},
            {"edge: already ascending", new int[] { 1, 2, 3 }, new int[] { 1, 2, 3 }},
            {"edge: all equal", new int[] { 2, 2, 2 }, new int[] { 2, 2, 2 }},
            {"edge: negatives and plateau at peak", new int[] { -4, 1, 5, 5, 3, 3, 0, -4, -9 }, new int[] { -9, -4, -4, 0, 1, 3, 3, 5, 5 }},
        };

        for (Object[] t : cases) {
            int[] actual = toArray(ridgeLineSorter(buildList((int[]) t[1])));
            int[] expected = (int[]) t[2];
            String status = Arrays.equals(actual, expected) ? "PASS" : "FAIL";
            System.out.printf("[%s] %s: expected=%s actual=%s%n", status, t[0], Arrays.toString(expected), Arrays.toString(actual));
        }
    }
}
