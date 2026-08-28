using System;
using System.Collections.Generic;

public class Solution
{
    public static string UndoRedoNotepad(string[] ops)
    {
        // TODO: implement
        return "";
    }

    public static void Main(string[] args)
    {
        var tests = new List<(string[] Ops, string Expected)>
        {
            (new[] {"TYPE:Hello", "TYPE: World", "UNDO", "TYPE:!", "UNDO", "REDO"}, "Hello!"),
            (new[] {"TYPE:abc", "TYPE:def", "UNDO", "UNDO", "UNDO", "REDO"}, "abc"),
            (new[] {"TYPE:hi", "REDO", "UNDO", "TYPE:there", "REDO"}, "there"),
            (new[] {"UNDO", "REDO", "UNDO"}, ""),                                                       // extra: no TYPE ever happened
            (new[] {"TYPE:a", "UNDO", "TYPE:b", "TYPE:c", "UNDO", "UNDO", "REDO", "REDO"}, "bc"),        // extra: redo chain after multiple undos
        };

        foreach (var (ops, expected) in tests)
        {
            string got = UndoRedoNotepad(ops);
            string status = got == expected ? "PASS" : "FAIL";
            Console.WriteLine($"{status} ops=[{string.Join(",", ops)}] expected=\"{expected}\" got=\"{got}\"");
        }
    }
}
