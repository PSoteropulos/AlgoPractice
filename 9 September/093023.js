const reformat = (s) => {
    let digits = []
    let letters = []
    let newString = ""
    for (let i=0; i<s.length; i++){
        if (isNaN(s[i]) === true){
            letters.push(s[i])
        }
        else {
            digits.push(s[i])
        }
    }
    if (Math.abs(digits.length - letters.length)===1 || Math.abs(digits.length - letters.length)===0){
        if (digits.length>=letters.length){
            for (let i=0; i<digits.length;i++){
                newString += digits[i]
                if (letters[i]){
                    newString += letters[i]
                }
            }
        }
        else {
            for (let i=0; i<letters.length;i++){
                newString += letters[i]
                if (digits[i]){
                    newString += digits[i]
                }
            }
        }
    }
    return newString
};






console.log(reformat("a0b1c2"))
console.log(reformat("leetcode"))
console.log(reformat("1229857369"))








// 1417. Reformat The String
// Easy
// Topics
// Companies
// Hint
// You are given an alphanumeric string s. (Alphanumeric string is a string consisting of lowercase English letters and digits).

// You have to find a permutation of the string where no letter is followed by another letter and no digit is followed by another digit. That is, no two adjacent characters have the same type.

// Return the reformatted string or return an empty string if it is impossible to reformat the string.

 

// Example 1:

// Input: s = "a0b1c2"
// Output: "0a1b2c"
// Explanation: No two adjacent characters have the same type in "0a1b2c". "a0b1c2", "0a1b2c", "0c2a1b" are also valid permutations.
// Example 2:

// Input: s = "leetcode"
// Output: ""
// Explanation: "leetcode" has only characters so we cannot separate them by digits.
// Example 3:

// Input: s = "1229857369"
// Output: ""
// Explanation: "1229857369" has only digits so we cannot separate them by characters.
 

// Constraints:

// 1 <= s.length <= 500
// s consists of only lowercase English letters and/or digits.
// Accepted
// 53.2K
// Submissions
// 99.4K
// Acceptance Rate
// 53.6%