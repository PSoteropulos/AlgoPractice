const areOccurrencesEqual = (s) => {
    // const alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    // let values = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let occurences = {}
    let bool = true
    let count = 0
    for (let i=0; i<s.length; i++){
        let key = `${s[i]}`
        if (occurences.hasOwnProperty(key)){
            occurences[key] += 1
        }
        else {
            occurences = {...occurences, [key]: 1}
        }
    }
    Object.keys(occurences).forEach((key, index) => {
        if (index===0){
            count = occurences[key]
        }
        else {
            if (occurences[key] !== count){
                bool = false
            }
        }
    })
    return bool
};



console.log(areOccurrencesEqual("abacbc"))
console.log(areOccurrencesEqual("aaabb"))




// 1941. Check if All Characters Have Equal Number of Occurrences
// Easy
// 654
// 17
// Companies
// Given a string s, return true if s is a good string, or false otherwise.

// A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

 

// Example 1:

// Input: s = "abacbc"
// Output: true
// Explanation: The characters that appear in s are 'a', 'b', and 'c'. All characters occur 2 times in s.
// Example 2:

// Input: s = "aaabb"
// Output: false
// Explanation: The characters that appear in s are 'a' and 'b'.
// 'a' occurs 3 times while 'b' occurs 2 times, which is not the same number of times.
 

// Constraints:

// 1 <= s.length <= 1000
// s consists of lowercase English letters.
// Accepted
// 62K
// Submissions
// 80.7K
// Acceptance Rate
// 76.8%