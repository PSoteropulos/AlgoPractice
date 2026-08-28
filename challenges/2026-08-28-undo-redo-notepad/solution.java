import java.util.*;

public class solution {

    public static String undoRedoNotepad(String[] ops) {
        // TODO: implement
        return "";
    }

    public static void main(String[] args) {
        List<Object[]> tests = new ArrayList<>();
        tests.add(new Object[]{new String[]{"TYPE:Hello", "TYPE: World", "UNDO", "TYPE:!", "UNDO", "REDO"}, "Hello!"});
        tests.add(new Object[]{new String[]{"TYPE:abc", "TYPE:def", "UNDO", "UNDO", "UNDO", "REDO"}, "abc"});
        tests.add(new Object[]{new String[]{"TYPE:hi", "REDO", "UNDO", "TYPE:there", "REDO"}, "there"});
        tests.add(new Object[]{new String[]{"UNDO", "REDO", "UNDO"}, ""});                          // extra: no TYPE ever happened
        tests.add(new Object[]{new String[]{"TYPE:a", "UNDO", "TYPE:b", "TYPE:c", "UNDO", "UNDO", "REDO", "REDO"}, "bc"}); // extra: redo chain after multiple undos

        for (Object[] test : tests) {
            String[] ops = (String[]) test[0];
            String expected = (String) test[1];
            String got = undoRedoNotepad(ops);
            String status = got.equals(expected) ? "PASS" : "FAIL";
            System.out.println(status + " ops=" + Arrays.toString(ops)
                    + " expected=\"" + expected + "\" got=\"" + got + "\"");
        }
    }
}
