const detectCapitalUse = (word) => {
    let first = (word[0].toUpperCase()===word[0])
    let restUpper = true
    let restLower = true
    for (let i=1; i<word.length; i++){
        if (word[i].toUpperCase() !== word[i]){
            restUpper = false
        }
        if (word[i].toLowerCase() !== word[i]){
            restLower = false
        }
    }
    if (first && restUpper){
        return true
    }
    if (first && restLower){
        return true
    }
    if (!first && restLower){
        return true
    }
    return false
};






console.log(detectCapitalUse("USA"))
console.log(detectCapitalUse("FlaG"))
console.log(detectCapitalUse("Leetcode"))






// 520. Detect Capital
// Easy
// Topics
// Companies
// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.

 

// Example 1:

// Input: word = "USA"
// Output: true
// Example 2:

// Input: word = "FlaG"
// Output: false
 

// Constraints:

// 1 <= word.length <= 100
// word consists of lowercase and uppercase English letters.
// Accepted
// 403.9K
// Submissions
// 712K
// Acceptance Rate
// 56.7%