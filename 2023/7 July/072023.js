const maxPower = (s) => {
    let max = 1
    let localMax = 1
    for (let i = 1; i<s.length; i++){
        if (s[i] === s[i-1]){
            localMax ++
            if (localMax > max){
                max = localMax
            }
        }
        else {
            if (localMax > max){
                max = localMax
            }
            localMax = 1
        }
    }
    return max
};






console.log(maxPower("leetcode"))
console.log(maxPower("abbcccddddeeeeedcba"))






// 1446. Consecutive Characters
// Easy
// 1.6K
// 30
// Companies
// The power of the string is the maximum length of a non-empty substring that contains only one unique character.

// Given a string s, return the power of s.

 

// Example 1:

// Input: s = "leetcode"
// Output: 2
// Explanation: The substring "ee" is of length 2 with the character 'e' only.
// Example 2:

// Input: s = "abbcccddddeeeeedcba"
// Output: 5
// Explanation: The substring "eeeee" is of length 5 with the character 'e' only.
 

// Constraints:

// 1 <= s.length <= 500
// s consists of only lowercase English letters.
// Accepted
// 144.1K
// Submissions
// 237.2K
// Acceptance Rate
// 60.8%