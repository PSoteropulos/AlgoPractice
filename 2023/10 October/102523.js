const uncommonFromSentences = (s1, s2) => {
    let array1 = s1.split(" ")
    let array2 = s2.split(" ")
    let object1 = {}
    let object2 = {}
    let answerArray = []
    for (let i = 0; i<array1.length; i++){
        if (array1[i] in object1){
            object1[array1[i]] ++
        }
        else {
            object1[array1[i]] = 1
        }
    }
    for (let i = 0; i<array2.length; i++){
        if (array2[i] in object2){
            object2[array2[i]] ++
        }
        else {
            object2[array2[i]] = 1
        }
    }
    for (key in object1){
        if (object1[key]===1 && key in object2 === false){
            answerArray.push(key)
        }
    }
    for (key in object2){
        if (object2[key]===1 && key in object1 === false){
            answerArray.push(key)
        }
    }
    return answerArray
};







console.log(uncommonFromSentences(s1 = "this apple is sweet", s2 = "this apple is sour"))
console.log(uncommonFromSentences(s1 = "apple apple", s2 = "banana"))









// Code

// Testcase
// Test Result
// Test Result

// 884. Uncommon Words from Two Sentences
// Easy
// Topics
// Companies
// A sentence is a string of single-space separated words where each word consists only of lowercase letters.

// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

// Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

 

// Example 1:

// Input: s1 = "this apple is sweet", s2 = "this apple is sour"
// Output: ["sweet","sour"]
// Example 2:

// Input: s1 = "apple apple", s2 = "banana"
// Output: ["banana"]
 

// Constraints:

// 1 <= s1.length, s2.length <= 200
// s1 and s2 consist of lowercase English letters and spaces.
// s1 and s2 do not have leading or trailing spaces.
// All the words in s1 and s2 are separated by a single space.
// Accepted
// 127.7K
// Submissions
// 191.4K
// Acceptance Rate
// 66.7%