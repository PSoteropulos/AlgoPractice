const wordPattern = (pattern, s) => {
    let sArray = s.split(" ")
    let patternObject = {}
    let sObject = {}
    if (sArray.length !== pattern.length) return false
    for (let i = 0; i<pattern.length; i++){
        // console.log("before",{sArray}, {pattern}, {sObject}, {patternObject})
        // console.log(pattern[i], sArray[i])
        // console.log("pattern[i] in patternObject", pattern[i] in patternObject, "sArray[i] !== patternObject[pattern[i]]", `${sArray[i]}` !== patternObject[pattern[i]], "sArray[i] in sObject", sArray[i] in sObject, "pattern[i] !== sObject[sArray[i]]", pattern[i] !== sObject[sArray[i]])
        console.log(sArray[i], {i}, {sObject})
        console.log(typeof(sArray[i]))
        if ((pattern[i] in patternObject && sArray[i] !== patternObject[pattern[i]]) || (`${sArray[i]}` in sObject && pattern[i] !== sObject[`${sArray[i]}`])){
            return false
        }
        patternObject[pattern[i]] = sArray[i]
        sObject[`${sArray[i]}`] = pattern[i]
        // console.log("after",{sArray}, {pattern}, {sObject}, {patternObject})
    }
    return true
};







// console.log(wordPattern(pattern = "abba", s = "dog cat cat dog"))
// console.log(wordPattern(pattern = "abba", s = "dog cat cat fish"))
// console.log(wordPattern(pattern = "aaaa", s = "dog cat cat dog"))
// console.log(wordPattern(pattern = "abba", s = "dog dog dog dog"))
console.log(wordPattern(pattern = "abba", s = "dog constructor constructor dog"))






// 290. Word Pattern
// Easy
// Topics
// Companies
// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false
 

// Constraints:

// 1 <= pattern.length <= 300
// pattern contains only lower-case English letters.
// 1 <= s.length <= 3000
// s contains only lowercase English letters and spaces ' '.
// s does not contain any leading or trailing spaces.
// All the words in s are separated by a single space.