const checkIfPangram = (sentence) => {
    let alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let includesAll = true
    let sentenceArray = sentence.split("")
    for (let i=0; i<alphabetArray.length; i++){
        if (sentenceArray.includes(alphabetArray[i]) == false){
            includesAll = false
        }
    }
    return includesAll
};


console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"))
console.log(checkIfPangram("leetcode"))



// 1832. Check if the Sentence Is Pangram
// Easy
// 2.2K
// 50
// Companies
// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

 

// Example 1:

// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.
// Example 2:

// Input: sentence = "leetcode"
// Output: false
 

// Constraints:

// 1 <= sentence.length <= 1000
// sentence consists of lowercase English letters.
// Accepted
// 218.5K
// Submissions
// 261.4K
// Acceptance Rate
// 83.6%