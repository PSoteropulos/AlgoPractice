const repeatedSubstringPattern = (s) => {
    let subString = s[0]
    for (let i = 1; i <= s.length / 2; i++) {
        subString = s.substring(0, i);
        let repeatCount = Math.floor(s.length / subString.length)
        if (subString.repeat(repeatCount) === s) {
            return true
        }
    }
    return false
};


// gpt optimization
// const repeatedSubstringPattern = (s) => {
//     // Concatenate s with itself
//     let doubleS = s + s;

//     // Check if s exists in doubleS, starting from index 1 up to the second last character
//     return doubleS.slice(1, -1).includes(s);
// };






console.log(repeatedSubstringPattern("abab"))
console.log(repeatedSubstringPattern("aba"))
console.log(repeatedSubstringPattern("abcabcabcabc"))








// 459. Repeated Substring Pattern
// Easy
// Topics
// Companies
// Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

 

// Example 1:

// Input: s = "abab"
// Output: true
// Explanation: It is the substring "ab" twice.
// Example 2:

// Input: s = "aba"
// Output: false
// Example 3:

// Input: s = "abcabcabcabc"
// Output: true
// Explanation: It is the substring "abc" four times or the substring "abcabc" twice.
 

// Constraints:

// 1 <= s.length <= 104
// s consists of lowercase English letters.