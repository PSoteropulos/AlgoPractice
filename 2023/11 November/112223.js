const reverseStr = (s, k) => {
    let newString = ""
    for (let i = 0; i < s.length; i += 2*k){
        let firstChar = []
        let others = []
        let thisString = ""
        for (let j = i; j < i+(2*k); j++){
            if (j < i+ k){
                firstChar.push(s[j])
            }
            else {
                others.push(s[j])
            }
        }
        firstChar = firstChar.reverse().join("")
        others = others.join("")
        thisString = firstChar + others
        newString += thisString
    }
    return newString
};







console.log(reverseStr(s = "abcdefg", k = 2))
console.log(reverseStr(s = "abcd", k = 2))








// 541. Reverse String II
// Easy
// Topics
// Companies
// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

 

// Example 1:

// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"
// Example 2:

// Input: s = "abcd", k = 2
// Output: "bacd"
 

// Constraints:

// 1 <= s.length <= 104
// s consists of only lowercase English letters.
// 1 <= k <= 104