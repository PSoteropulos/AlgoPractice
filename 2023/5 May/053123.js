const countWords = (words1, words2) => {
    let countObject = {}
    let ansCount = 0
    for (let i = 0; i<words1.length; i++){
        for (let j = 0; j<words2.length; j++){
            if (words1[i] === words2[j]){
                if (countObject.hasOwnProperty(`${words1[i]}`)){
                    countObject[`${words1[i]}`] = countObject[`${words1[i]}`] + 1
                }
                else {
                    countObject[`${words1[i]}`] = 1
                }
            }
        }
    }
    for (let i = 0; i<words2.length; i++){
        for (let j = 0; j<words1.length; j++){
            if (words2[i] === words1[j]){
                if (countObject.hasOwnProperty(`${words1[j]}`)){
                    countObject[`${words1[j]}`] = countObject[`${words1[j]}`] + 1
                }
                else {
                    countObject[`${words1[j]}`] = 1
                }
            }
        }
    }
    for (let key in countObject){
        if (countObject[key] === 2){
            ansCount ++
        }
    }
    return ansCount
};



console.log(countWords(["leetcode","is","amazing","as","is"], ["amazing","leetcode","is"]))
console.log(countWords(["b","bb","bbb"], ["a","aa","aaa"]))
console.log(countWords(["a","ab"], ["a","a","a","ab"]))




// 2085. Count Common Words With One Occurrence
// Easy
// 653
// 14
// Companies
// Given two string arrays words1 and words2, return the number of strings that appear exactly once in each of the two arrays.

 

// Example 1:

// Input: words1 = ["leetcode","is","amazing","as","is"], words2 = ["amazing","leetcode","is"]
// Output: 2
// Explanation:
// - "leetcode" appears exactly once in each of the two arrays. We count this string.
// - "amazing" appears exactly once in each of the two arrays. We count this string.
// - "is" appears in each of the two arrays, but there are 2 occurrences of it in words1. We do not count this string.
// - "as" appears once in words1, but does not appear in words2. We do not count this string.
// Thus, there are 2 strings that appear exactly once in each of the two arrays.
// Example 2:

// Input: words1 = ["b","bb","bbb"], words2 = ["a","aa","aaa"]
// Output: 0
// Explanation: There are no strings that appear in each of the two arrays.
// Example 3:

// Input: words1 = ["a","ab"], words2 = ["a","a","a","ab"]
// Output: 1
// Explanation: The only string that appears exactly once in each of the two arrays is "ab".
 

// Constraints:

// 1 <= words1.length, words2.length <= 1000
// 1 <= words1[i].length, words2[j].length <= 30
// words1[i] and words2[j] consists only of lowercase English letters.
// Accepted
// 46.9K
// Submissions
// 67K
// Acceptance Rate
// 69.9%