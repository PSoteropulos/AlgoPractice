const repeatedSubstringPattern = (s) => {
    let subString = s[0]
    while (subString.length < s.length){
        for (let i = 0; i<s.length; i+=subString.length){
            let valid = true
            for (let j=i; j<subString.length; j++){
                console.log(subString[j], s[j])
                if (subString[j] !== s[j]){
                    valid = false
                }
            }
            if (valid) return true
        }
        subString += s[subString.length]
    }
    return false
};







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