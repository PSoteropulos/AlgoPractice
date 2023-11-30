var backspaceCompare = function(s, t) {
    let longestString = s.length >= t.length? s : t
    let s1 = ""
    let s2 = ""
    for (let i = 0; i < longestString.length; i++){
        if (i<s.length && s[i]!=="#"){
            s1 += s[i]
        }
        else if (i<s.length) {
            s1 = s1.slice(0,-1)
        }
        if (i<t.length && t[i]!=="#"){
            s2 += t[i]
        }
        else if (i<t.length) {
            s2 = s2.slice(0,-1)
        }
    }
    return s1 === s2 ? true : false
};







console.log(backspaceCompare(s = "ab#c", t = "ad#c"))
console.log(backspaceCompare(s = "ab##", t = "c#d#"))
console.log(backspaceCompare(s = "a#c", t = "b"))








// 844. Backspace String Compare
// Easy
// Topics
// Companies
// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

 

// Example 1:

// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".
// Example 2:

// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".
// Example 3:

// Input: s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b".
 

// Constraints:

// 1 <= s.length, t.length <= 200
// s and t only contain lowercase letters and '#' characters.
 

// Follow up: Can you solve it in O(n) time and O(1) space?